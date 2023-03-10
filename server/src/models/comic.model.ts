import { type InferSchemaType, model, Schema } from 'mongoose'

const ComicSchema = new Schema(
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

type Comic = InferSchemaType<typeof ComicSchema>

export const ComicModel = model<Comic>('Comic', ComicSchema)
