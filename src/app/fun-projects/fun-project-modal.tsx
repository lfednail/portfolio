import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { FunProject } from '@/config/fun-project'

interface FunProjectModalProps {
  project: FunProject
  onClose: () => void
}

export function FunProjectModal({ project, onClose }: FunProjectModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative w-full h-[500px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="rounded-lg object-contain"
            />
          </div>
          <p className="text-sm text-gray-500">{project.description}</p>
          <Button asChild>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}