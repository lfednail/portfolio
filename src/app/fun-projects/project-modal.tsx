'use client'

import { Dialog } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, X } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FunProject } from '@/config/fun-project'

interface ProjectModalProps {
  project: FunProject
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      <Dialog open onOpenChange={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="fixed inset-0 bg-black/90" onClick={onClose} />
          <div className="relative z-50 w-full max-w-5xl p-4">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="rounded-b-2xl bg-gray-900 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                  <p className="mt-2 text-gray-400">{project.description}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                  onClick={onClose}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                {project.githubLink && (
                  <Button asChild>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source
                    </a>
                  </Button>
                )}
                {project.demoLink && (
                  <Button variant="outline" asChild>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </Dialog>
    </AnimatePresence>
  )
}

