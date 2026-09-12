import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import LevelViewer from "./LevelViewer";

interface PageProps {
  params: Promise<{ level: string }>;
}

interface Card {
  number: string | number;
  title: string;
  description: string;
}

interface Section {
  id: string;
  title: string;
  content?: string[];
  cards?: Card[];
  imagePlaceholder?: string;
}

export default async function LevelPage({ params }: PageProps) {
  const { level } = await params;
  
  const validLevels = ["beginner", "intermediate", "advanced"];
  if (!validLevels.includes(level)) {
    notFound();
  }

  const faPath = path.join(process.cwd(), "Adobe-InCopy", "fa", `${level}.json`);
  const enPath = path.join(process.cwd(), "Adobe-InCopy", "en", `${level}.json`);

  let faData;
  let enData;

  try {
    const [faRaw, enRaw] = await Promise.all([
      fs.readFile(faPath, "utf8"),
      fs.readFile(enPath, "utf8")
    ]);
    faData = JSON.parse(faRaw);
    enData = JSON.parse(enRaw);
  } catch (error) {
    console.error("Error loading course files:", error);
    notFound();
  }

  return <LevelViewer level={level} faData={faData} enData={enData} />;
}
