const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = Schema.Types

const UserSchema = new mongoose.Schema({
  avatar: String,
  tel: String,
  mail: String,
  username: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    unique: true
  },
  role: {
    type: ObjectId,
    ref: 'Role'
  },
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

UserSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now()
  } else {
    this.meta.updatedAt = Date.now()
  }

  next()
})

mongoose.model('User', UserSchema)
