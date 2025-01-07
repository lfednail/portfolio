'use client';

import { Button } from "@/components/ui/button";
import { WorkItem } from "@/config/work-item";

type WorkItemType = WorkItem['type'] | 'all'; // Ajoutez 'all' au type pour éviter les erreurs

interface SortingButtonsProps {
  onSort: (type: WorkItemType) => void; // Assurez-vous que le type correspond bien
  activeType: WorkItemType; // Le type actif doit être cohérent
}

export function SortingButtons({ onSort, activeType }: SortingButtonsProps) {
  const types: WorkItemType[] = [
    'all',
    'school_project',
    'certification',
    'veille-technologique',
    'internship',
    'personnal-project'
  ];

  return (
      <div className="flex flex-wrap gap-2 mb-4">
        {types.map((type) => (
            <Button
                key={type}
                onClick={() => onSort(type)} // Appelle la fonction avec le type sélectionné
                variant={activeType === type ? 'default' : 'outline'} // Définit le style en fonction de l'état actif
            >
              {type.replace('_', ' ')} {/* Remplace les underscores par des espaces */}
            </Button>
        ))}
      </div>
  );
}
