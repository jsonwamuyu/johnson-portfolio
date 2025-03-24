"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left - Interactive Image */}
        <motion.div
          className="relative w-80 h-80 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Johnson Muchiri"
            width={250}
            height={250}
            className="rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Right - Animated Text */}
        <motion.div
          className="text-center md:text-left max-w-lg"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-extrabold text-blue-400 mb-4">Who Am I?</h2>
          
          <p className="text-lg text-gray-300 mb-4">
            I’m <span className="text-blue-500 font-semibold">Johnson Muchiri</span>, a **Fullstack Developer & QA Engineer**.
          </p>

          {/* Dynamic Typewriter Effect */}
          <p className="text-xl font-semibold text-blue-300">
            <Typewriter
              words={[
                "I craft user-friendly experiences",
                "I build scalable applications",
                "I test software for perfection",
                "I create innovative solutions"
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </p>

          {/* Mini Bio */}
          <p className="mt-4 text-gray-400">
            With a background in **Mathematics & Computer Science**, I specialize in **React, Next.js, Node.js, and automated testing**. My passion lies in **optimizing user experiences** and **creating impactful tech solutions**.
          </p>

          {/* Call to Action */}
          <motion.div
            className="mt-6 flex justify-center md:justify-start space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="/projects" className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition">See My Work</a>
            <a href="/contact" className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition">Let’s Talk</a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom - Live Coding Effect */}
      <motion.div
        className="mt-12 p-6 bg-black bg-opacity-20 rounded-lg shadow-lg text-green-400 text-center text-sm md:text-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className="font-mono">const developer = "Johnson Muchiri";</p>
        <p className="font-mono">const skills = ["Next.js", "Node.js", "Testing", "UI/UX"];</p>
        <p className="font-mono">console.log("Building high-quality software...");</p>
      </motion.div>
    </section>
  );
}
