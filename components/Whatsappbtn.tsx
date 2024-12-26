'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { X } from 'lucide-react'
import Image from 'next/image'

export default function PhotoModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="hover:text-white cursor-pointer transition-colors py-2 px-4 flex w-3/6 bg-transparent border-white border-2 rounded">
                <FaWhatsapp className="h-5 w-5" />
                <span className="ml-auto">Whatsapp</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-white bg-black/20 backdrop-blur-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Scanne um mit mir auf Whatsapp zu chatten!</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Image
            src="/whatsappqr.png"
            alt="Beispielfoto"
            width={300}
            height={300}
            className="rounded-md m-auto object-cover"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
