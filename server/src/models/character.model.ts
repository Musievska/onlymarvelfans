import { type InferSchemaType, model, Schema } from 'mongoose'

const CharacterSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

type Character = InferSchemaType<typeof CharacterSchema>

export const CharacterModel = model<Character>('Character', CharacterSchema)
