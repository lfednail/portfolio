'use client'

import { useState } from 'react'
import { workItems, WorkItem } from '@/config/work-item'
import { WorkGrid } from './work-grid'
import { SortingButtons } from './sorting-buttons'

export default function WorkPage() {
  const [activeType, setActiveType] = useState<WorkItem['type'] | 'all'>('all')

  const filteredItems = activeType === 'all'
      ? workItems
      : workItems.filter(item => item.type === activeType)

  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Different Work</h1>
        <SortingButtons onSort={setActiveType} activeType={activeType} />
        <WorkGrid items={filteredItems} />
      </div>
  )
}

