import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const heroSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  alias: {
    type: String,
    default: "???",
  },
  featsOfValor: [
    {
      headline: {
        type: String,
        required: true,
      },
      story: {
        type: String,
        required: true,
        minLength: 20,
      },
    },
  ],
  powers: [String],
  nemeses: [
    {
      type: ObjectId,
      ref: "Villain",
    },
  ],
});

const Hero = model("Hero", heroSchema);

export default Hero;
