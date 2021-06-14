import mongoose, {Schema, Types} from "mongoose"

const exerciseSchema = new Schema({
  name: {type: String, required: true, unique: false},
  muscleGroup: {type: String, required: true}
})

export default mongoose.model("Exercise", exerciseSchema)

export {exerciseSchema}
