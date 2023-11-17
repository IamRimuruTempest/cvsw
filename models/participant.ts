import mongoose, { Schema } from "mongoose";

const participantSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    phonenumber: String,
    agency: String,
  },
  {
    timestamps: true,
  }
);

const Participant =
  mongoose.models.Participant ||
  mongoose.model("Participant", participantSchema);

export default Participant;
