import mongoose, { type InferSchemaType, model, Schema } from 'mongoose'

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    favoriteComics: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comic',
    },
    favoriteCharacters: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Character',
    },
  },
  { timestamps: true },
)

type User = InferSchemaType<typeof UserSchema>

export const UserModel = model<User>('User', UserSchema)
