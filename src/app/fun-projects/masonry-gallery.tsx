'use client'

import {useState, useMemo} from "react";
import Image from "next/image";
import {FunProject} from "@/config/fun-project";
import {UnderConstructionOverlay} from "./under-construction-overlay";
import {motion, AnimatePresence}  from "framer-motion";

interface MasonryGalleryProps {
  projects: FunProject[]
}

export function MasonryGallery({projects}: MasonryGalleryProps) {
  const [isUnderConstruction, setIsUnderConstruction] = useState(false);

  // Split projects into columns
  const columns = useMemo(() => {
    if (!projects || projects.length === 0) {
      return []
    }
    const cols: FunProject[][] = [[], [], [], []]
    projects.forEach((project, i) => {
      cols[i % 4].push(project)
    })
    return cols
  }, [projects])

  if (!projects || projects.length === 0) {
    return <p className="text-center text-gray-400">No projects to display.</p>
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-4">
            {column.map((project) => (
              <motion.div
                key={project.id}
                layoutId={project.id}
                className="relative cursor-pointer rounded-2xl overflow-hidden"
                onClick={() => setIsUnderConstruction(true)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={project.height || 400}
                  className="object-cover w-full"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      <AnimatePresence>
        {isUnderConstruction && (
          <UnderConstructionOverlay onClose={() => setIsUnderConstruction(false)} />
        )}
      </AnimatePresence>
    </>
  )
}