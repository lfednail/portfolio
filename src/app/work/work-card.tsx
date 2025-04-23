import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Video, Eye, SquareCode } from "lucide-react";
import { WorkItem } from "@/config/work-item";
import QrCodeModal from "./qr-code-modal";

interface WorkCardProps {
  item: WorkItem;
}

export function WorkCard({ item }: WorkCardProps) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={item.image}
        alt={item.title}
        width={300}
        height={200}
        className="w-full object-cover h-48"
      />
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.type.replace("_", " ")}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{item.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        {item.demoLink && (
          <Button variant="outline" asChild>
            <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        )}
        {item.githubLink && (
          <Button variant="outline" asChild>
            <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        )}
        {item.viewLink && (
          <Button variant="outline" asChild>
            <a href={item.viewLink} target="_blank" rel="noopener noreferrer">
              <Eye className="mr-2 h-4 w-4" />
              View
            </a>
          </Button>
        )}
        {item.squareCode && (
          <Button variant="outline" asChild>
            <a href={item.squareCode} target="_blank" rel="noopener noreferrer">
              <SquareCode className="mr-2 h-4 w-4" />
              Ressources
            </a>
          </Button>
        )}
        {item.videoLink && (
          <Button variant="outline" asChild>
            <a href={item.videoLink} target="_blank" rel="noopener noreferrer">
              <Video className="mr-2 h-4 w-4" />
              Video
            </a>
          </Button>
        )}
        {item.type === "certification" && item.qrCodeLink && (
          <QrCodeModal title={item.title} qrCodeLink={item.qrCodeLink} />
        )}
      </CardFooter>
    </Card>
  );
}
