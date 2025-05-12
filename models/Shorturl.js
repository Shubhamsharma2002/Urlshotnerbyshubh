import mongoose from "mongoose";

const shortURLSchema = new mongoose.Schema({
  originalURL: {
    type: String,
    required: true,
  },
  shortCode: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  
});

// Prevent model overwrite issue in Next.js dev mode
const ShortURL = mongoose.models.ShortURL || mongoose.model("ShortURL", shortURLSchema);

export default ShortURL;
