import { Schema } from "mongoose";

const TaskSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

export default TaskSchema;