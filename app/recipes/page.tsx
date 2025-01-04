"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import useSWR from "swr";
import Loader from "@/components/loader";
import Pagination from "@/components/pagination";

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

export default function Recipes() {
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6; // Show 6 recipes per page

  const { data, error, isLoading } = useSWR<{ recipes: Recipe[] }>(
    "/api/recipes",
    async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    },
    {
      revalidateOnFocus: false, // Don't revalidate when tab is focused
      revalidateOnReconnect: false, // Don't revalidate on reconnection
      refreshInterval: 0, // No automatic refresh
      dedupingInterval: 3600000, // Cache for 1 hour
      errorRetryCount: 3, // Still keep some error retries for reliability
    }
  );

  // Calculate pagination values
  const totalPages = data ? Math.ceil(data.recipes.length / recipesPerPage) : 0;
  const startIndex = (currentPage - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const currentRecipes = data?.recipes.slice(startIndex, endIndex);

  if (isLoading) {
    return (
      <div className="h-[calc(100vh-200px)] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-red-800">Error loading recipes</p>
      </div>
    );
  }

  return (
    <div className="container mx-8 px-4 py-16">
      <motion.h1
        className="text-4xl font-bold text-green-800 mb-14 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Recipes
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, staggerChildren: 0.1 }}
      >
        {currentRecipes?.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </motion.div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}

function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative pt-[56.25%]">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <CardHeader className="flex-none">
          <CardTitle className="text-2xl text-green-800">
            {recipe.title}
          </CardTitle>
          <CardDescription className="text-green-600 line-clamp-2">
            {recipe.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex justify-between text-green-700">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{recipe.prepTime}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-none">
          <Link href={`/recipes/${recipe._id}`} className="w-full">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6">
              View Recipe
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
