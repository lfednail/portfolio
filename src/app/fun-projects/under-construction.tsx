import { Construction } from 'lucide-react'

export function UnderConstruction() {
  return (
    <div className="bg-yellow-400 text-black p-6 rounded-2xl flex flex-col items-center justify-center aspect-square">
      <Construction className="w-16 h-16 mb-4" />
      <h3 className="text-2xl font-bold mb-2">Under Construction</h3>
      <p className="text-center">Exciting new features coming soon!</p>
    </div>
  )
}

