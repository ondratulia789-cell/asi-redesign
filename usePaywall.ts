import { Lock, Clock, Film, Timer, Sparkles } from 'lucide-react';

interface LockedStatsProps {
  averageDaily: number;
}

const LockedStats = ({ averageDaily }: LockedStatsProps) => {
  return (
    <div className="space-y-10 animate-fade-up">

      {/* Hero — daily average (free teaser) */}
      <div className="text-center space-y-3">
        <p className="text-xs font-display text-muted-foreground uppercase tracking-[0.2em] font-semibold">
          Tvůj denní průměr
        </p>
        <div className="flex items-baseline justify-center gap-3">
          <span className="text-8xl font-display font-black gradient-text leading-none">
            {averageDaily.toFixed(0)}
          </span>
          <span className="text-xl text-muted-foreground">min</span>
        </div>
        <p className="text-sm text-muted-foreground">každý den na TikToku</p>
      </div>

      {/* Locked stats grid */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: Clock, label: 'minut celkem', value: '18 432' },
          { icon: Film, label: 'videí', value: '6 891' },
          { icon: Timer, label: 'sessions', value: '241' },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="card-glow rounded-2xl p-4 text-center space-y-2">
              <Icon className="w-4 h-4 mx-auto text-purple-400/60" />
              <p className="text-lg font-display font-bold number-blur text-foreground">{item.value}</p>
              <p className="text-[10px] text-muted-foreground leading-tight">{item.label}</p>
            </div>
          );
        })}
      </div>

      {/* Paywall card */}
      <div className="card-glow rounded-2xl p-6 space-y-5 text-center">
        <div className="flex justify-center">
          <div className="h-12 w-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-purple-400" />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-display font-bold text-foreground text-lg">
            Odemkni celý přehled
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Kompletní statistiky, rekordy, měsíční přehledy a sdílecí obrázek — jednou platbou navždy.
          </p>
        </div>

        <a
          href="https://buy.stripe.com/cNi14ndL1c4mgTNgvlebu00"
          target="_self"
          className="group inline-flex items-center gap-2.5 rounded-full gradient-button px-8 py-3.5 text-sm font-display font-bold text-white hover:opacity-90 transition shadow-lg shadow-purple-500/20"
        >
          <Lock className="w-4 h-4" />
          Odemknout statistiky
        </a>

        <p className="text-[11px] text-muted-foreground">
          Jednorázová platba · Žádné předplatné
        </p>
      </div>
    </div>
  );
};

export default LockedStats;
