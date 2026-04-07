/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
    "../../packages/content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "hsl(var(--canvas) / <alpha-value>)",
        foreground: {
          DEFAULT: "hsl(var(--foreground) / <alpha-value>)",
          muted: "hsl(var(--foreground-muted) / <alpha-value>)",
          subtle: "hsl(var(--foreground-subtle) / <alpha-value>)",
          faint: "hsl(var(--foreground-faint) / <alpha-value>)",
        },
        border: "hsl(var(--border) / <alpha-value>)",
        "border-strong": "hsl(var(--border-strong) / <alpha-value>)",
        surface: {
          raised: "hsl(var(--surface-raised) / <alpha-value>)",
          muted: "hsl(var(--surface-muted) / <alpha-value>)",
          subtle: "hsl(var(--surface-subtle) / <alpha-value>)",
        },
        brand: {
          DEFAULT: "hsl(var(--brand) / <alpha-value>)",
          foreground: "hsl(var(--brand-foreground) / <alpha-value>)",
          muted: "hsl(var(--brand-muted) / <alpha-value>)",
          subtle: "hsl(var(--brand-subtle) / <alpha-value>)",
          strong: "hsl(var(--brand-strong) / <alpha-value>)",
          50: "#EAF2FF",
          300: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          muted: "hsl(var(--accent-muted) / <alpha-value>)",
        },
        ring: "hsl(var(--ring) / <alpha-value>)",
        link: {
          DEFAULT: "hsl(var(--link) / <alpha-value>)",
          hover: "hsl(var(--link-hover) / <alpha-value>)",
        },
        info: {
          DEFAULT: "hsl(var(--info) / <alpha-value>)",
          muted: "hsl(var(--info-muted) / <alpha-value>)",
          border: "hsl(var(--info-border) / <alpha-value>)",
        },
        success: {
          DEFAULT: "hsl(var(--success) / <alpha-value>)",
          muted: "hsl(var(--success-muted) / <alpha-value>)",
          border: "hsl(var(--success-border) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "hsl(var(--warning) / <alpha-value>)",
          muted: "hsl(var(--warning-muted) / <alpha-value>)",
          border: "hsl(var(--warning-border) / <alpha-value>)",
        },
        danger: {
          DEFAULT: "hsl(var(--danger) / <alpha-value>)",
          muted: "hsl(var(--danger-muted) / <alpha-value>)",
        },
        /** Bold Tech + Guidance (ExpatCopilot moving hub) */
        copilot: {
          primary: "#2563EB",
          "primary-strong": "#1D4ED8",
          "bg-dark": "#0F172A",
          "surface-dark": "#1E293B",
          "bg-light": "#F8FAFC",
          "bg-soft": "#EEF4FF",
          surface: "#FFFFFF",
          accent: "#06B6D4",
          "accent-warm": "#F97316",
          "text-primary": "#0F172A",
          "text-secondary": "#475569",
          "text-muted": "#64748B",
          "text-inverse": "#FFFFFF",
          success: "#10B981",
        },
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        card: "var(--radius-card)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 14px rgba(15, 23, 42, 0.06)",
        "card-hover":
          "0 2px 4px rgba(15, 23, 42, 0.05), 0 10px 28px rgba(15, 23, 42, 0.09)",
        popover: "0 8px 28px rgba(15, 23, 42, 0.1), 0 2px 8px rgba(15, 23, 42, 0.04)",
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)",
        inset: "inset 0 1px 2px rgba(15, 23, 42, 0.05)",
        /** ExpatOS — product elevation */
        "expatos-sm": "var(--shadow-expatos-sm)",
        "expatos-md": "var(--shadow-expatos-md)",
        "expatos-lg": "var(--shadow-expatos-lg)",
        "expatos-xl": "var(--shadow-expatos-xl)",
        "expatos-hover":
          "0 12px 32px rgba(15, 23, 42, 0.11), 0 4px 10px rgba(15, 23, 42, 0.06)",
        "expatos-glow-cyan": "var(--shadow-expatos-glow-cyan)",
      },
      spacing: {
        "section-y": "var(--section-y)",
        "section-y-lg": "var(--section-y-lg)",
        "section-y-compact": "var(--section-y-compact)",
        "card-pad": "var(--card-pad)",
        "card-pad-md": "var(--card-pad-md)",
        "gap-stack": "var(--gap-stack)",
        "gap-grid": "var(--gap-grid)",
      },
      transitionDuration: {
        DEFAULT: "150ms",
      },
      ringOffsetColor: {
        canvas: "hsl(var(--canvas) / <alpha-value>)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
