"use client"

import { motion } from "framer-motion"
import { FaBootstrap, FaCss3, FaGitAlt, FaGithub, FaHtml5, FaJs, FaReact, FaPython, FaDocker, FaNodeJs } from "react-icons/fa"
import { FaGolang } from "react-icons/fa6"
import { BiLogoTypescript } from "react-icons/bi"
import {
  SiMongodb,
  SiMysql,
  SiKubernetes,
  SiPostgresql,
  SiRedis,
  SiPrisma,
  SiExpress,
  SiGithubactions,
  SiIntellijidea,
} from "react-icons/si"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { VscVscode } from "react-icons/vsc"
import { IoLogoFigma, IoLogoVercel } from "react-icons/io5"
import { Layers, Network, Database, ListChecks, Sparkles, Workflow } from "lucide-react"

// Tools without a brand icon get a generic one that hints at what they do.
const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <BiLogoTypescript className="text-blue-400" /> },
      { name: "Go", icon: <FaGolang className="text-sky-500" /> },
      { name: "Python", icon: <FaPython className="text-blue-400" /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-500" /> },
      { name: "Next.js", icon: <RiNextjsFill className="text-black dark:text-white" /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-cyan-400" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3 className="text-blue-500" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-black dark:text-white" /> },
      { name: "Prisma", icon: <SiPrisma className="text-black dark:text-white" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      { name: "BullMQ", icon: <ListChecks className="h-5 w-5 text-red-400" /> },
      { name: "OpenRouter", icon: <Sparkles className="h-5 w-5 text-violet-500" /> },
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
      { name: "Crossplane", icon: <Layers className="h-5 w-5 text-amber-500" /> },
      { name: "Karmada", icon: <Network className="h-5 w-5 text-indigo-500" /> },
      { name: "Docker", icon: <FaDocker className="text-sky-500" /> },
      { name: "CI/CD", icon: <Workflow className="h-5 w-5 text-emerald-500" /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
      { name: "pgvector", icon: <Database className="h-5 w-5 text-sky-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-blue-500" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
      { name: "IntelliJ", icon: <SiIntellijidea className="text-pink-600" /> },
      { name: "Figma", icon: <IoLogoFigma className="text-purple-600" /> },
      { name: "Vercel", icon: <IoLogoVercel className="text-black dark:text-white" /> },
    ],
  },
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My Skills
        </motion.h2>
        <motion.p 
          className="text-muted-foreground mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Technologies and tools I&apos;ve worked with throughout my projects and experience
        </motion.p>

        <motion.div 
          className="grid gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
            >
              <motion.h3 
                className="text-xl font-semibold mb-4"
                whileHover={{ 
                  x: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {category.title}
              </motion.h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex flex-col items-center gap-2 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                  >
                    <motion.div 
                      className={`
                        w-14 h-14 rounded-full bg-muted flex items-center justify-center text-xl
                        group-hover:bg-muted/50 transition-colors duration-300
                        border border-transparent group-hover:border-primary/20
                      `}
                      whileHover={{
                        y: -5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <motion.span 
                      className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}