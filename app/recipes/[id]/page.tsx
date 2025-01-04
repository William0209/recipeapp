"use client";

import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";

interface Recipe {
  _id: string;
  title: string;
  description: string;
  prepTime: string;
  servings: number;
  image: string;
  ingredients: string[];
  instructions: string[];
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await fetch(`/api/singularRecipe?id=${params.id}`);
        if (!response.ok) {
          throw new Error("Recipe not found");
        }
        const data = await response.json();
        setRecipe(data.recipe);
      } catch (error) {
        console.error("Error fetching recipe:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    }

    fetchRecipe();
  }, [params.id]);

  if (loading) {
    return (
      <div className="h-[calc(100vh-200px)] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

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
