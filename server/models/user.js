import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  interests: [String], // Teknoloji, Spor vb.
}, { timestamps: true });

const user = mongoose.model("User", UserSchema);
export default user;
