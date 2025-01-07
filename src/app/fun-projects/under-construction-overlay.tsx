import { Construction } from 'lucide-react'
import { motion } from 'framer-motion'

interface UnderConstructionOverlayProps {
  onClose: () => void
}

export function UnderConstructionOverlay({ onClose }: UnderConstructionOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-yellow-400 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="text-black text-center">
        <Construction className="w-24 h-24 mb-6 mx-auto" />
        <h2 className="text-4xl font-bold mb-4">Under Construction</h2>
        <p className="text-xl">We&apos;re working on something exciting! Check back soon.</p>
      </div>
    </motion.div>
  )
}

