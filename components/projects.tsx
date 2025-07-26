"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Yuno",
    description:
      "Yuno is an AI-powered career platform that helps users prepare for interviews through tailored, role-specific quizzes. It delivers personalized insights and question sets based on industry trends and user roles.",
    image: "/yuno.png",
    tags: ["Next.js", "Clerk", "Prisma", "Tailwind CSS", "Gemini API"],
    demoUrl: "https://yuno-seven.vercel.app/",
    githubUrl: "https://github.com/ydhanush8/YUNO",
    features: [
      "Designed an AI-powered platform for tailored quiz-based interview preparation across 50+ industries.",
      "mplemented dynamic role-specific question generation with real-time insights from market trends.",
      "Achieved 80% quiz completion rate by optimizing question relevance, pacing, and overall user experience."
    ],
  },
  {
    title: "react-prompt-palette (NPM Package)",
    description:
      "A React + TypeScript library for saving, selecting, and managing AI prompt templates with localStorage support and styled Tailwind UI components — ideal for AI chat interfaces.",
    image: "/react-prompt-palette.png",
    tags: ["React.js", "Tailwind CSS", "TailwindCSS"],
    demoUrl: "https://www.npmjs.com/package/react-prompt-palette",
    githubUrl: "https://github.com/ydhanush8/react-prompt-palette",
    features: [
      "Built a reusable prompt management UI component for creating, organizing, and reusing AI prompts.",
      "Helped reduce prompt repetition by 60% through intuitive design, local storage, and folder structure.",
      "Surpassed 1,200 downloads within two weeks, gaining traction among AI and developer communities.",
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
            >
              <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r">
                <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={1200}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm">
                    <Link
                      href={project.demoUrl}
                      className="flex items-center"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                  {
                    project.githubUrl && (
                      <Button size="sm" variant="outline">
                        <Link
                          href={project.githubUrl}
                          className="flex items-center"
                          target="_blank"
                        >
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}