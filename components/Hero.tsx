"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="text-blue-500">Johnson Muchiri</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-lg text-gray-600 max-w-xl pt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        I am a <strong>Fullstack Web Developer and QA Engineer</strong>{" "}
        passionate about building modern, user-friendly web applications.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="mt-10 flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          href="/projects"
          className="px-6 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition"
        >
          Explore My Work
        </Link>
        <Link
          href="/contact"
          className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-500 hover:text-white transition"
        >
          Let’s Build Something Great
        </Link>
      </motion.div>
    </section>
  );
}
