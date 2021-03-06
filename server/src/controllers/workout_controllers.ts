import {Request, Response} from "express"
import * as workoutServices from "../services/db/workout_services"
import * as circuitServices from "../services/db/circuit_services"
import * as userServices from "../services/db/user_services"
import {Types} from "mongoose"
import CircuitModel from "../models/circuit_model"

const getWorkouts = async (req: Request, res: Response) => {
  const user = await userServices.getUserById(req.body.userId)
  if (!user) {
    return res.json({
      success: false,
      message: "Fetching workouts failed."
    })
  }

  if (user.workoutIds.length === 0) {
    return res.status(200).json({
      success: true,
      workouts: []
    })
  }

  const workoutsIds = user.workoutIds.map((workoutId) => Types.ObjectId(`${workoutId}`))
  const workoutDocs = await workoutServices.getWorkoutsBasedOnIds(workoutsIds)
  if (!workoutDocs) {
    return res.json({
      success: false,
      message: "Fetching workouts failed!"
    })
  }
  res.status(200).json({
    success: true,
    workouts: workoutDocs
  })
}

const addDefaultWorkout = async (req: Request, res: Response) => {
  const circuit = new CircuitModel({setAmount: 0, timeBetweenSetsSec: 0})
  const circuitDoc = await circuitServices.saveCircuit(circuit)

  if (!circuitDoc) return res.json({success: false, message: "Adding workout failed."})

  const workoutDoc = await workoutServices.addWorkout({
    description: "No description",
    exerciseTotalAmount: 0,
    setTotalAmount: 0,
    name: "No name",
    circuitIds: circuitDoc._id
  })

  if (!workoutDoc) return res.json({success: false, message: "Adding workout failed."})

  //user update
  const user = await userServices.getUserById(req.body.userId)
  if (!user) {
    console.log(`Fetching user by id either failed or not found!`)
    return
  }
  user.workoutIds?.push(workoutDoc._id)

  const userDoc = await userServices.saveUser(user)
  if (!userDoc) {
    return res.json({success: false, workoutId: "Adding workout failed."})
  }

  res.status(200).json({success: true, workout: workoutDoc})
}

const updateWorkout = async (req: Request, res: Response) => {
  const {workoutName, workoutDescription, workoutId} = req.body

  if (!workoutName || !workoutDescription || !workoutId) {
    return res.status(422).json({
      success: false,
      message: "Please provide all fields."
    })
  }

  const updateInfo = await workoutServices.updateWorkoutNameAndDescription({
    _id: workoutId,
    name: workoutName,
    description: workoutDescription
  })
  if (!updateInfo)
    return res.status(500).json({
      success: false,
      message: "Internal Server Error: Updating workout failed."
    })
  res.status(200).json({
    success: true,
    updateInfo: updateInfo
  })
}

export {getWorkouts, addDefaultWorkout, updateWorkout}
