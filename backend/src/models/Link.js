import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const linkSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    link: {
      type: String,
      trim: true,
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
linkSchema.plugin(mongoosePaginate);
export default model("Link", linkSchema);
