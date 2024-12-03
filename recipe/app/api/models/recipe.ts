import mongoose, { Schema, model, Document } from "mongoose";

// Define the Recipe interface
interface IRecipe extends Document {
  title: string;
  description: string;
  prepTime: string;
  servings: number;
  image: string;
  ingredients: string[];
  instructions: string[];
}

// Define the Recipe schema
const recipeSchema = new Schema<IRecipe>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  prepTime: { type: String, required: true },
  servings: { type: Number, required: true },
  image: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: [String], required: true },
});

// Export the Recipe model
export default mongoose.models.Recipe || model<IRecipe>("Recipe", recipeSchema);
