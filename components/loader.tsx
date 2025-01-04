"use client"

import { motion } from "framer-motion"

export default function Loader() {
  return (
    <div className="flex space-x-3">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-3 h-3 bg-green-500 rounded-full"
          animate={{
            y: ["0%", "-50%", "0%"],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  )
}

