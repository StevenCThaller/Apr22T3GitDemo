import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const villainSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    alias: {
      type: String,
      required:
        "Unknown - The FBI is putting out a reward for any information leading to the arrest of this individual.",
    },
    notoriousCrimes: [
      {
        headline: {
          type: String,
          required: true,
        },
        numberOfVictims: {
          type: Number,
          default: 0,
        },
        costOfDamage: {
          type: Number,
          defualt: 0,
        },
      },
    ],
    nemeses: [
      {
        type: ObjectId,
        ref: "Hero",
      },
    ],
  },
  { timestamps: true }
);

const Villain = model("Villain", villainSchema);

export default Villain;
