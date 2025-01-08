import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from "react";

export default function ProfileHeader() {
  return (
    <div className="mb-12 mt-16">
      <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-6">
        <div className="flex items-start gap-8">
          <div className="relative">
            <Image
              src="/images/moi.png"
              alt="Moi"
              width={220}
              height={220}
              className="w-30 h-30 rounded-full"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">FEDNAIL - LADOUCEUR LECLERCQ</h1>
            <h2 className="text-3xl text-muted-foreground mb-4">Développeur informatique</h2>
            <div className="flex items-center gap-2 text-emerald-500 mb-4">
              <MapPin className="w-4 h-4"/>
              <span>Denain / France</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/lfednail" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2"/> GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="hhttps://www.linkedin.com/in/fednail-leclercq-734333250/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2"/> LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:lfednail@gmail.com">
                  <Mail className="w-4 h-4 mr-2"/> Mail
                </a>
              </Button>
            </div>

          </div>
        </div>
        <div className="flex gap-4">
          <a
            href="/pdf/CV_FEDNAIL.pdf"
            download="CV_FEDNAIL.pdf"
            className="inline-flex items-center gap-2  px-2 text-emerald-500 border border-emerald-500/20 rounded-md hover:bg-emerald-500/10"
          >
            <Download className="w-4 h-4"/>
            <span>Download CV</span>
          </a>
        </div>

      </div>
      <p className="text-lg text-muted-foreground max-w-3xl">
        Étudiant en <span className="text-emerald-500"> BTS SIO</span>, j&#39;aspire à devenir développeur informatique. Je suis passionné par les
        nouvelles technologies et l&apos;informatique. De nature débrouillarde et autonome, j&apos;aime
        apprendre de nouvelles choses et technologies.
      </p>
    </div>
  )
}

