import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users } from "lucide-react";
import { PageTransition } from "@/components/page-transition";

// In a real application, this data would come from a database or API
const recipes = [
  {
    id: "1",
    title: "Green Smoothie Bowl",
    description: "Start your day with this nutritious and delicious smoothie bowl.",
    prepTime: "10 min",
    servings: 2,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80",
    ingredients: ["1 frozen banana", "1 cup spinach", "1/2 cup almond milk", "1 tbsp chia seeds", "1 tbsp honey"],
    instructions: [
      "Blend frozen banana, spinach, and almond milk until smooth.",
      "Pour into a bowl.",
      "Top with chia seeds and drizzle with honey.",
      "Add any additional toppings of your choice.",
    ],
  },
  {
    id: "2",
    title: "Avocado Toast",
    description: "A classic breakfast or snack that's both healthy and satisfying.",
    prepTime: "5 min",
    servings: 1,
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=300&q=80",
    ingredients: [
      "1 slice of whole grain bread",
      "1/2 ripe avocado",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)",
    ],
    instructions: [
      "Toast the bread until golden brown.",
      "Mash the avocado and spread it on the toast.",
      "Season with salt, pepper, and red pepper flakes if desired.",
    ],
  },
  {
    id: "3",
    title: "Spinach and Feta Quiche",
    description: "A savory pie that's perfect for brunch or dinner.",
    prepTime: "45 min",
    servings: 6,
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=300&q=80",
    ingredients: [
      "1 pre-made pie crust",
      "6 eggs",
      "1 cup milk",
      "2 cups fresh spinach",
      "1 cup crumbled feta cheese",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Whisk together eggs and milk in a large bowl.",
      "Stir in spinach and feta cheese.",
      "Pour mixture into the pie crust.",
      "Bake for 35-40 minutes until set and golden brown.",
      "Let cool for 10 minutes before serving.",
    ],
  },
];

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe = recipes.find((r) => r.id === params.id);

  if (!recipe) {
    notFound();
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <Card className="overflow-hidden max-w-3xl mx-auto">
          <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
          <CardHeader>
            <CardTitle className="text-3xl text-green-800">{recipe.title}</CardTitle>
            <CardDescription className="text-green-600">{recipe.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-green-700 mb-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{recipe.prepTime}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{recipe.servings} servings</span>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Ingredients</h3>
              <ul className="list-disc pl-5">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-green-700">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Instructions</h3>
              <ol className="list-decimal pl-5">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="text-green-700 mb-2">
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}
