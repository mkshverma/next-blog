import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this user.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email for this user.'],
    maxlength: [60, 'Email cannot be more than 60 characters'],
  },
  password: String
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;