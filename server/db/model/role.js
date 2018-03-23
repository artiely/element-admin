const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = Schema.Types

const RoleSchema = new mongoose.Schema({
  rolename: {
    type: String,
    unique: true,
    require: true
  },
  user: {
    type: ObjectId,
    ref: 'User'
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

RoleSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now()
  } else {
    this.meta.updatedAt = Date.now()
  }

  next()
})

mongoose.model('Role', RoleSchema)
