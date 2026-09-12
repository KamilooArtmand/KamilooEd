import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";

// Since next 15 pages receive a Promise for params
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

  // Read JSON content based on level
  const filePath = path.join(process.cwd(), "Adobe-InCopy", "fa", `${level}.json`);
  let content;
  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    content = JSON.parse(fileContents);
  } catch {
    notFound();
  }

  return (
    <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      
      <nav className="mb-8 text-sm text-gray-500 flex items-center gap-2 font-medium">
        <Link href="/courses/adobe-incopy-2026" className="hover:text-blue-600 transition-colors">Adobe InCopy 2026</Link>
        <span>/</span>
        <span className="text-gray-900">{content.breadcrumb}</span>
      </nav>

      {/* Video / Main Image Area */}
      <div className="liquid-glass-darker rounded-[2.5rem] p-4 mb-10 shadow-xl border-white/80">
        <div className="aspect-video w-full bg-gray-900 rounded-[2rem] overflow-hidden relative flex items-center justify-center group cursor-pointer">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626785776985-6e0687d00fbe?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
          
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/30 transition-all group-hover:scale-105 border border-white/20 z-10">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white/80 text-sm z-10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
            <span>{content.video.title}</span>
            <span>{content.video.duration}</span>
          </div>
        </div>
      </div>

      {/* Course Content Text */}
      <div className="space-y-12">
        {content.sections.map((section: Section, index: number) => (
          <section key={section.id} className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                {index + 1}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
            </div>
            
            <div className="liquid-glass rounded-3xl p-8 text-gray-700 leading-relaxed font-light text-lg space-y-6">
              {section.content?.map((text: string, pIdx: number) => (
                <p key={pIdx}>{text}</p>
              ))}

              {section.cards && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {section.cards.map((card: Card, cIdx: number) => (
                    <div key={cIdx} className="liquid-glass rounded-3xl p-6">
                      <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">{card.number}</span>
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-light leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              
              {section.imagePlaceholder && (
                <div className="my-8 aspect-video rounded-2xl bg-gray-100 border border-gray-200 overflow-hidden relative flex items-center justify-center">
                  <span className="text-gray-400 font-medium px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl">
                    {section.imagePlaceholder}
                  </span>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <div className="mt-16 flex justify-between border-t border-gray-200 pt-8">
        <Link href="/courses/adobe-incopy-2026" className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
          بازگشت به سرفصل‌ها
        </Link>
        {level === "beginner" && (
          <Link href="/courses/adobe-incopy-2026/intermediate" className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            رفتن به سطح متوسط
          </Link>
        )}
        {level === "intermediate" && (
          <Link href="/courses/adobe-incopy-2026/advanced" className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            رفتن به سطح حرفه‌ای
          </Link>
        )}
      </div>
    </div>
  );
}
