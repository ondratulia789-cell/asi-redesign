import { useEffect, useState, useMemo, useRef } from "react";

const FIRST_NAMES = [
  "kubas", "anet", "mar***", "terez", "ada**", "lucka", "dav**", "sarah",
  "honza", "pet***", "tom**", "nikky", "fil**", "barun", "maty", "ell**",
  "simon", "kar**", "vojta", "zuza", "dany", "mon**", "jakub", "veru",
  "patas", "kiki", "luky", "hany", "ond**", "domca", "misa", "ivca",
];

const SUFFIXES = [
  "***_vibe", ".***_priv", "***_07", ".***", "_***", "._***", "***x",
  "_***9", "***_cz", "04***", "22***", "***_edit",
];

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genNick() {
  return FIRST_NAMES[rand(0, FIRST_NAMES.length - 1)] + SUFFIXES[rand(0, SUFFIXES.length - 1)];
}

type Entry = { id: number; parts: { text: string; isHighlight?: boolean }[] };

function generateEntries(seed: number): Entry[] {
  const entries: Entry[] = [];
  let id = seed * 1000;

  for (let i = 0; i < 50; i++) {
    const type = i % 2; // removed fake "slots remaining" type
    if (type === 0) {
      const vids = rand(600, 2300);
      const nick = genNick();
      entries.push({
        id: id++,
        parts: [
          { text: "🔥 " },
          { text: nick },
          { text: " projel " },
          { text: `${vids}`, isHighlight: true },
          { text: " videí za 24h" },
        ],
      });
    } else {
      const h = rand(3, 6);
      const m = rand(5, 59);
      const nick = genNick();
      entries.push({
        id: id++,
        parts: [
          { text: "✅ " },
          { text: nick },
          { text: " — rekord: " },
          { text: `${h}h ${m}min`, isHighlight: true },
          { text: " za den" },
        ],
      });
    }
  }
  return entries;
}

const TickerContent = ({ entries }: { entries: Entry[] }) => (
  <>
    {entries.map((e, i) => (
      <span key={`${e.id}-${i}`} className="inline-flex items-center gap-0.5 px-3 py-1.5 text-[11px] shrink-0">
        {e.parts.map((p, j) =>
          p.isHighlight ? (
            <span key={j} className="font-display font-extrabold text-purple-300">{p.text}</span>
          ) : (
            <span key={j} className="text-muted-foreground">{p.text}</span>
          )
        )}
        <span className="text-foreground/20 ml-3 mr-1">·</span>
      </span>
    ))}
  </>
);

const LiveTicker = () => {
  const [generation, setGeneration] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const posRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => setGeneration((g) => g + 1), 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const entries = useMemo(() => generateEntries(generation), [generation]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const startAnimation = () => {
      const halfWidth = el.scrollWidth / 2;
      if (halfWidth === 0) { requestAnimationFrame(startAnimation); return; }

      const speed = 55;
      let lastTime = performance.now();
      posRef.current = 0;

      const tick = (now: number) => {
        const dt = (now - lastTime) / 1000;
        lastTime = now;
        posRef.current += speed * dt;
        if (posRef.current >= halfWidth) posRef.current -= halfWidth;
        el.style.transform = `translateX(-${posRef.current}px)`;
        animRef.current = requestAnimationFrame(tick);
      };

      animRef.current = requestAnimationFrame(tick);
    };

    requestAnimationFrame(startAnimation);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [entries]);

  return (
    <div className="sticky top-0 z-50 w-full overflow-hidden border-b border-purple-500/10 bg-background/80 backdrop-blur-md">
      <div ref={scrollRef} className="flex whitespace-nowrap will-change-transform">
        <TickerContent entries={entries} />
        <TickerContent entries={entries} />
      </div>
    </div>
  );
};

export default LiveTicker;
