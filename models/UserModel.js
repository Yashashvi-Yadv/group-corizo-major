const mongoose = require('mongoose');
const {createHmac, randomBytes} = require("crypto")

const UserSchema = new mongoose.Schema({
  type: { type: ["USER", "ADMIN"], default:"USER", required: true },
  name: { type: String, required: true, },
  salt: { type: String, },
  email: { type: String, required: true, unique: true },
   password: { type: String, required: true },
   orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});

//Hash password before saving
 UserSchema.pre('save', async function (next) {
   const user = this;
  if (!this.isModified('password')) return next();
  const salt = randomBytes(16).toString();
  const HashedPassword = createHmac("sha256", salt).update(user.password).digest("hex");
  this.password =HashedPassword;
  this.salt = salt;
   next();
});
module.exports = mongoose.model('User', UserSchema);
