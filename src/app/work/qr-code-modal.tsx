'use client'

import {useState} from 'react'
import Image from 'next/image'
import {Button}from "@/components/ui/button";
import {Dialog,DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {QrCode} from 'lucide-react'

interface QrCodeModalProps {
  title: string
  qrCodeLink: string
}

export default function QrCodeModal({title, qrCodeLink}: QrCodeModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return(
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">
            <QrCode className="mr-2 h-4 w-4" />
            QR Code
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{title} - QR Code</DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center p-6">
            <Image
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrCodeLink)}`}
                alt={`QR Code for ${title}`}
                width={200}
                height={200}
            />
          </div>
        </DialogContent>
      </Dialog>
  )
}