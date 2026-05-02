import { Clock, Film, Flame, TrendingUp, Trophy, Share2, Zap, CalendarDays, Gift, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const mainFeatures = [
  {
    icon: Clock,
    title: 'Celkový čas na TikToku',
    desc: 'Přesný počet minut, hodin i dní strávených scrollováním',
    blurred: '47 832 minut',
  },
  {
    icon: Film,
    title: 'Počet zhlédnutých videí',
    desc: 'Celkové číslo každého videa, které jsi kdy viděl/a',
    blurred: '89 241 videí',
  },
];

const bonusFeatures = [
  { icon: Flame,       title: 'Nejdelší session',    desc: 'Tvůj rekord — nejdelší nepřerušené sezení na TikToku',         blurred: '194 minut' },
  { icon: TrendingUp,  title: 'Denní průměr',         desc: 'Kolik minut denně v průměru věnuješ TikToku',                  blurred: '62 minut' },
  { icon: CalendarDays,title: 'Videí za týden',        desc: 'Průměrný počet videí, která zhlédneš za jeden týden',          blurred: '847 videí' },
  { icon: Trophy,      title: 'Osobní rekordy',       desc: 'Nejlepší den i týden — s přesným datem a číslem',              blurred: '312 videí za den' },
  { icon: Share2,      title: 'Sdílecí obrázek',      desc: 'Stáhni si vizuál se svými čísly a pošli ho kamarádům',        blurred: 'Vlastní design' },
];

const reviews = [
  { name: 'Tereza M.', text: 'Šílený, 67 dní na TikToku za rok?! Děkuju za otevření očí 😭😢', stars: 5, avatar: 'TM' },
  { name: 'Jakub K.', text: 'Super appka, konečně vím kolik času tím trávím. Doporučuju všem!', stars: 5, avatar: 'JK' },
  { name: 'Aneta V.', text: 'Zhlédla jsem 140 tisíc videí… nejtěžší pravda, co jsem viděla.', stars: 5, avatar: 'AV' },
  { name: 'Martin P.', text: 'Jednoduchy, rychly, fr funguje. Za pár sekund jsem měl výsledky.', stars: 5, avatar: 'MP' },
  { name: 'Klára S.', text: 'Posílám to všem kamarádkám, ať se taky leknou 😂', stars: 4, avatar: 'KS' },
];

interface ConversionSectionProps {
  onScrollToUpload: () => void;
}

const FeatureRow = ({ f }: { f: typeof mainFeatures[0] }) => {
  const Icon = f.icon;
  return (
    <div className="flex items-center gap-4 rounded-2xl card-glow px-4 py-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20">
        <Icon className="h-4 w-4 text-purple-400" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground">{f.title}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
      </div>
      <span className="text-xs font-display font-bold text-foreground number-blur shrink-0">
        {f.blurred}
      </span>
    </div>
  );
};

const ConversionSection = ({ onScrollToUpload }: ConversionSectionProps) => {
  return (
    <section className="mt-20 space-y-16">

      {/* Headline */}
      <div className="text-center space-y-3">
        <div className="flex justify-center">
          <span className="tag-label">Co zjistíš</span>
        </div>
        <h2 className="text-2xl font-display font-bold text-foreground tracking-tight">
          Tvoje TikTok data,<br />konečně přehledně
        </h2>
        <p className="text-sm text-muted-foreground">
          Nahraj export a uvidíš čísla, která tě překvapí
        </p>
      </div>

      {/* Main features */}
      <div className="space-y-3">
        {mainFeatures.map((f) => (
          <FeatureRow key={f.title} f={f} />
        ))}
      </div>

      {/* Bonus */}
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Gift className="h-3.5 w-3.5 text-purple-400" />
          <p className="text-[11px] font-display font-bold text-purple-400 uppercase tracking-[0.15em]">
            + navíc zdarma
          </p>
        </div>
        <div className="space-y-3">
          {bonusFeatures.map((f) => (
            <FeatureRow key={f.title} f={f} />
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="space-y-5">
        <div className="flex items-center justify-center gap-2">
          <p className="text-[11px] font-display font-semibold text-muted-foreground uppercase tracking-[0.15em]">
            Co říkají ostatní
          </p>
          <div className="flex items-center gap-0.5 ml-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-purple-400 text-purple-400" />
            ))}
          </div>
        </div>
        <Carousel opts={{ align: 'start', loop: true }} className="w-full">
          <CarouselContent className="-ml-3">
            {reviews.map((r, i) => (
              <CarouselItem key={i} className="pl-3 basis-[85%]">
                <div className="rounded-2xl card-glow p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 text-xs font-bold">
                      {r.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground">{r.name}</p>
                      <div className="flex gap-0.5 mt-0.5">
                        {[...Array(r.stars)].map((_, j) => (
                          <Star key={j} className="h-3 w-3 fill-purple-400 text-purple-400" />
                        ))}
                        {[...Array(5 - r.stars)].map((_, j) => (
                          <Star key={j} className="h-3 w-3 text-muted-foreground/30" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Speed badge */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2">
          <Zap className="h-3.5 w-3.5 text-purple-400" />
          <span className="text-xs font-medium text-foreground/80">Výsledky do 10 sekund</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Stačí nahrát soubor. Bez registrace, bez čekání.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <button
          onClick={onScrollToUpload}
          className="inline-flex items-center gap-2 rounded-full gradient-button px-8 py-3.5 text-sm font-display font-bold text-white hover:opacity-90 transition shadow-lg shadow-purple-500/20"
        >
          Zjistit svůj čas →
        </button>
      </div>
    </section>
  );
};

export default ConversionSection;
