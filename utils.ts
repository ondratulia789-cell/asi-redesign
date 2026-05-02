@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Serif+Display:ital@0;1&display=swap');

@layer base {
  :root {
    --background: 222 28% 6%;
    --foreground: 220 20% 96%;

    --card: 222 24% 9%;
    --card-foreground: 220 20% 96%;

    --popover: 222 24% 9%;
    --popover-foreground: 220 20% 96%;

    --primary: 250 100% 70%;
    --primary-foreground: 0 0% 100%;

    --secondary: 222 20% 14%;
    --secondary-foreground: 220 20% 96%;

    --muted: 222 20% 12%;
    --muted-foreground: 220 15% 50%;

    --accent: 250 40% 18%;
    --accent-foreground: 220 20% 96%;

    --destructive: 0 72% 55%;
    --destructive-foreground: 0 0% 98%;

    --border: 222 20% 14%;
    --input: 222 20% 14%;
    --ring: 250 100% 70%;

    --radius: 1rem;

    /* Brand gradients */
    --gradient-hero: linear-gradient(135deg, #7c3aed 0%, #a855f7 40%, #ec4899 100%);
    --gradient-text: linear-gradient(135deg, #e2d9f3 0%, #c084fc 50%, #f472b6 100%);
    --gradient-card: linear-gradient(160deg, hsl(222 24% 10%) 0%, hsl(222 28% 7%) 100%);
    --gradient-glow: radial-gradient(ellipse 60% 40% at 50% 0%, hsl(250 80% 60% / 0.12), transparent 70%);
    --gradient-button: linear-gradient(135deg, #7c3aed, #a855f7, #ec4899);

    --shadow-glow: 0 0 40px hsl(250 80% 60% / 0.15), 0 2px 0 hsl(250 100% 80% / 0.06) inset;
    --shadow-card: 0 1px 0 hsl(250 100% 80% / 0.05) inset, 0 16px 48px hsl(222 28% 2% / 0.8);
  }
}

@layer base {
  * { @apply border-border; }

  body {
    @apply bg-background text-foreground antialiased;
    font-family: 'Outfit', sans-serif;
    background-image:
      radial-gradient(ellipse 100% 60% at 50% -5%, hsl(250 80% 60% / 0.08), transparent 60%),
      radial-gradient(ellipse 60% 40% at 80% 80%, hsl(330 80% 60% / 0.04), transparent 50%);
    background-attachment: fixed;
  }

  @media (max-width: 767px) {
    html, body, * { scrollbar-width: none; -ms-overflow-style: none; }
    ::-webkit-scrollbar { display: none; }
  }
}

@layer utilities {
  .font-display {
    font-family: 'Outfit', sans-serif;
  }

  .font-serif {
    font-family: 'DM Serif Display', serif;
  }

  .gradient-text {
    background: var(--gradient-text);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .gradient-button {
    background: var(--gradient-button);
  }

  .glass {
    background: hsl(222 24% 9% / 0.7);
    backdrop-filter: blur(12px);
    border: 1px solid hsl(250 40% 60% / 0.1);
  }

  .card-glow {
    border: 1px solid hsl(250 40% 60% / 0.15);
    background: var(--gradient-card);
    box-shadow: var(--shadow-card);
  }

  .tag-label {
    @apply inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em];
    background: hsl(250 40% 18%);
    border: 1px solid hsl(250 60% 60% / 0.2);
    color: hsl(250 100% 80%);
  }

  .section-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, hsl(250 40% 60% / 0.2), transparent);
  }

  .number-blur {
    filter: blur(7px);
    user-select: none;
    pointer-events: none;
  }

  /* Fade-in animation */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-up {
    animation: fadeUp 0.5s ease forwards;
  }

  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  .shimmer-text {
    background: linear-gradient(90deg, #c084fc, #f472b6, #c084fc);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s linear infinite;
  }
}
