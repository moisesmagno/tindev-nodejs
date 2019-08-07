import { Schema, model } from 'mongoose';

const DevSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    bio: String,
    avatar: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Dev', DevSchema);
