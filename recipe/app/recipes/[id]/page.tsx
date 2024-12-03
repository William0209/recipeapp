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
  {
    id: "4",
    title: "Carbonara Pasta",
    description: "A classic Italian pasta dish that's rich, creamy, and full of flavor.",
    prepTime: "20 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1627207644206-a2040d60ecad?auto=format&fit=crop&w=300&q=80",
    ingredients: [
      "400g spaghetti",
      "150g pancetta or bacon",
      "2 large eggs",
      "1/2 cup grated Parmesan cheese",
      "2 cloves garlic (optional)",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Cook the spaghetti according to package instructions.",
      "In a pan, cook pancetta or bacon until crispy. Remove from heat.",
      "Whisk eggs and Parmesan together in a bowl.",
      "Combine drained pasta with pancetta in the pan, then mix in the egg mixture off the heat.",
      "Season with salt and pepper, and serve immediately.",
    ],
  },
  {
    id: "5",
    title: "Bolognese Pasta",
    description: "A hearty and comforting pasta dish made with a rich tomato and meat sauce.",
    prepTime: "30 min",
    servings: 6,
    image: "https://plus.unsplash.com/premium_photo-1677000666741-17c3c57139a2?auto=format&fit=crop&w=300&q=80",
    ingredients: [
      "400g pasta (spaghetti or tagliatelle)",
      "500g ground beef",
      "1 can (400g) diced tomatoes",
      "1 small onion, diced",
      "2 cloves garlic, minced",
      "1 tbsp olive oil",
      "Salt and pepper to taste",
      "Fresh basil for garnish",
    ],
    instructions: [
      "Cook the pasta according to package instructions.",
      "In a pan, heat olive oil and sauté onion and garlic until softened.",
      "Add ground beef and cook until browned.",
      "Stir in diced tomatoes, season with salt and pepper, and simmer for 15 minutes.",
      "Serve the sauce over cooked pasta and garnish with fresh basil.",
    ],
  },
  {
    id: "6",
    title: "American Pancakes",
    description: "Fluffy and delicious pancakes that are perfect for breakfast or brunch.",
    prepTime: "15 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=300&q=80",
    ingredients: [
      "1 cup all-purpose flour",
      "1 tbsp sugar",
      "1 tsp baking powder",
      "1/2 tsp baking soda",
      "1/4 tsp salt",
      "1 cup buttermilk",
      "1 large egg",
      "2 tbsp melted butter",
      "Butter or oil for cooking",
    ],
    instructions: [
      "In a bowl, whisk together flour, sugar, baking powder, baking soda, and salt.",
      "In another bowl, whisk buttermilk, egg, and melted butter.",
      "Combine the wet and dry ingredients until just mixed.",
      "Heat a non-stick pan and cook pancakes in batches until golden on both sides.",
      "Serve with syrup, butter, or your favorite toppings.",
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
