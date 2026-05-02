import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Instructions = () => {
  const [tutorialOpen, setTutorialOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) setHeight(contentRef.current.scrollHeight);
  }, [tutorialOpen]);

  const steps = [
    "Otevři TikTok → Profil → Menu (☰) → Nastavení a soukromí",
    "Účet → Stáhnout tvá data → Požádat o data",
    "Vyber formát JSON a počkej (většinou pár minut, max 1 den)",
    "Stáhni soubor a nahraj ho sem ⬆️",
  ];

  return (
    <div className="space-y-5">
      <div className="flex justify-center">
        <span className="tag-label">Návod</span>
      </div>
      <h3 className="text-center text-2xl font-display font-bold text-foreground tracking-tight">
        Jak získat svá TikTok data
      </h3>

      <div className="space-y-2 pt-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-xl card-glow px-4 py-3.5"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-purple-500/10 border border-purple-500/20 text-[11px] font-bold text-purple-400 mt-0.5">
              {index + 1}
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setTutorialOpen(!tutorialOpen)}
        className="flex items-center justify-between w-full rounded-xl card-glow hover:border-purple-500/20 px-4 py-3.5 transition-all"
      >
        <span className="text-sm font-medium text-foreground">🎬 Video tutorial</span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${tutorialOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        style={{ height: tutorialOpen ? height : 0 }}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
      >
        <div ref={contentRef}>
          <div className="rounded-2xl overflow-hidden border border-purple-500/15">
            <video
              src="/videos/tutorial.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
