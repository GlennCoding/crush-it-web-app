import { Exercise } from "../interfaces/exercise";
export interface Circuit {
  _id?: string;
  setAmount: number;
  timeBetweenSetsSec: number;
  exercises?: Exercise[];
}
