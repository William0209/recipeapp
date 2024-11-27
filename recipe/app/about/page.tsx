"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Heart, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <motion.h1
        className="text-4xl font-bold text-green-800 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Tasty Bytes
      </motion.h1>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="mb-8">
            <CardContent className="prose prose-green py-6">
              <p className="text-green-700 mb-4">
                Tasty Bytes is a community-driven recipe app dedicated to bringing food lovers together. Our mission is
                to inspire creativity in the kitchen and make cooking accessible to everyone.
              </p>
              <p className="text-green-700 mb-4">
                Whether you&apos;re a seasoned chef or a beginner cook, Tasty Bytes offers a platform to discover new
                recipes, share your culinary creations, and connect with fellow food enthusiasts.
              </p>
              <p className="text-green-700">Join us on this delicious journey and let&apos;s make every bite count!</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, staggerChildren: 0.2 }}
        >
          <ValueCard
            icon={<Leaf className="w-12 h-12 text-green-600" />}
            title="Sustainability"
            description="We champion eco-friendly cooking and sustainable ingredients."
          />
          <ValueCard
            icon={<Heart className="w-12 h-12 text-green-600" />}
            title="Passion"
            description="We're passionate about food and the joy it brings to people's lives."
          />
          <ValueCard
            icon={<Globe className="w-12 h-12 text-green-600" />}
            title="Diversity"
            description="We celebrate the rich diversity of cuisines from around the world."
          />
        </motion.div>
      </div>
    </div>
  );
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <motion.div className="h-full" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className="text-center h-full flex flex-col">
        <CardHeader className="flex-grow flex flex-col justify-center">
          <motion.div
            className="flex justify-center mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {icon}
          </motion.div>
          <CardTitle className="text-xl font-semibold text-green-800">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-green-700">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
