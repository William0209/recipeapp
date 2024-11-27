'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Recipes() {
  const recipes = [
    { 
      id: 1, 
      title: "Green Smoothie Bowl", 
      description: "Start your day with this nutritious and delicious smoothie bowl.",
      prepTime: "10 min",
      servings: 2,
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80"
    },
    { 
      id: 2, 
      title: "Avocado Toast", 
      description: "A classic breakfast or snack that's both healthy and satisfying.",
      prepTime: "5 min",
      servings: 1,
      image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=300&q=80"
    },
    { 
      id: 3, 
      title: "Spinach and Feta Quiche", 
      description: "A savory pie that's perfect for brunch or dinner.",
      prepTime: "45 min",
      servings: 6,
      image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=300&q=80"
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold text-green-800 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Recipes
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, staggerChildren: 0.1 }}
      >
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </motion.div>
    </div>
  )
}

function RecipeCard({ recipe }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className="overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
        <CardHeader>
          <CardTitle className="text-2xl text-green-800">{recipe.title}</CardTitle>
          <CardDescription className="text-green-600">{recipe.description}</CardDescription>
        </CardHeader>
        <CardContent>
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
        <CardFooter>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">View Recipe</Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

