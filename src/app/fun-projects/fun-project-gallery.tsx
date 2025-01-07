'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { FunProject, funProjects } from '@/config/fun-project'
import { FunProjectModal } from './fun-project-modal'

interface FunProjectGalleryProps {
  initialProjects: FunProject[]
  totalProjects: number
}

export function FunProjectGallery({ initialProjects, totalProjects }: FunProjectGalleryProps) {
  const [projects, setProjects] = useState<FunProject[]>(initialProjects)
  const [selectedProject, setSelectedProject] = useState<FunProject | null>(null)
  const [loading, setLoading] = useState(false)
  const loaderRef = useRef(null)

  const columnCount = Math.min(5, Math.max(2, Math.floor(totalProjects / 10)))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0]
        if (first.isIntersecting && projects.length < totalProjects) {
          loadMoreProjects()
        }
      },
      { threshold: 1 }
    )

    const currentLoaderRef = loaderRef.current
    if (currentLoaderRef) {
      observer.observe(currentLoaderRef)
    }

    return () => {
      if (currentLoaderRef) {
        observer.unobserve(currentLoaderRef)
      }
    }
  }, [projects, totalProjects])

  const loadMoreProjects = () => {
    setLoading(true)
    setTimeout(() => {
      const nextProjects = funProjects.slice(projects.length, projects.length + 12)
      setProjects((prevProjects) => [...prevProjects, ...nextProjects])
      setLoading(false)
    }, 500) // Simulating network delay
  }

  return (
    <>
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`
        }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => setSelectedProject(project)}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={400}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      {loading && <p className="text-center mt-4">Loading more projects...</p>}
      {projects.length < totalProjects && <div ref={loaderRef} className="h-10" />}
      {selectedProject && (
        <FunProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}

