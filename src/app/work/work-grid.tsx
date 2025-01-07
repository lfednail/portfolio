import { WorkItem } from "@/config/work-item";
import { WorkCard } from './work-card'

interface WorkGridProps {
  items: WorkItem[]
}

export function WorkGrid({ items }: WorkGridProps) {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
            <WorkCard key={item.id} item={item} />
        ))}
      </div>
  )
}