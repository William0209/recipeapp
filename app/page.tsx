"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Utensils, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6">Tasty Bytes</h1>
        <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
          Discover, create, and share delicious recipes with food lovers around the world.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-full transition-all duration-300 ease-in-out"
          >
            <Link href="/recipes" className="flex items-center">
              Explore Recipes
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, staggerChildren: 0.2 }}
      >
        <FeatureCard
          icon={<Utensils className="w-12 h-12 text-green-600" />}
          title="Diverse Recipes"
          description="Explore a wide variety of cuisines and dietary options to suit every palate and lifestyle."
        />
        <FeatureCard
          icon={<Users className="w-12 h-12 text-green-600" />}
          title="Community Driven"
          description="Connect with fellow food enthusiasts, share your creations, and get inspired by others."
        />
        <FeatureCard
          icon={<BookOpen className="w-12 h-12 text-green-600" />}
          title="Learn & Grow"
          description="Improve your culinary skills with our detailed recipes, tips, and cooking techniques."
        />
      </motion.div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 text-center h-full flex flex-col justify-between"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div>
        <motion.div
          className="flex justify-center mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {icon}
        </motion.div>
        <h2 className="text-2xl font-semibold text-green-800 mb-2">{title}</h2>
        <p className="text-green-700">{description}</p>
      </div>
    </motion.div>
  );
}
