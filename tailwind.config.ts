import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#034565",
        "primary-container": "#285d7e",
        "on-primary": "#ffffff",
        "on-primary-container": "#a3d5fb",
        "primary-fixed": "#c9e6ff",
        "primary-fixed-dim": "#9bccf2",
        "on-primary-fixed": "#001e2f",
        "on-primary-fixed-variant": "#0f4b6b",

        "secondary": "#825505",
        "secondary-container": "#fec16d",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#784d00",
        "secondary-fixed": "#ffddb5",
        "secondary-fixed-dim": "#f8bb68",
        "on-secondary-fixed": "#2a1800",
        "on-secondary-fixed-variant": "#633f00",

        "tertiary": "#5b3900",
        "tertiary-container": "#775014",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#fbc57e",
        "tertiary-fixed": "#ffddb5",
        "tertiary-fixed-dim": "#f2bd77",
        "on-tertiary-fixed": "#2a1800",
        "on-tertiary-fixed-variant": "#633f02",

        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",

        "surface": "#f9f9fc",
        "surface-dim": "#d9dadd",
        "surface-bright": "#f9f9fc",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f3f3f6",
        "surface-container": "#edeef1",
        "surface-container-high": "#e7e8eb",
        "surface-container-highest": "#e2e2e5",
        "surface-variant": "#e2e2e5",

        "on-surface": "#191c1e",
        "on-surface-variant": "#41474d",
        "inverse-surface": "#2e3133",
        "inverse-on-surface": "#f0f0f4",
        "inverse-primary": "#9bccf2",

        "outline": "#71787e",
        "outline-variant": "#c1c7ce",
        "surface-tint": "#2f6385",

        "background": "#f9f9fc",
        "on-background": "#191c1e",
      },
      fontFamily: {
        headline: ["var(--font-source-serif)", "Georgia", "serif"],
        body: ["var(--font-public-sans)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
        "headline-md": ["var(--font-source-serif)", "serif"],
        "body-md": ["var(--font-public-sans)", "sans-serif"],
        "label-mono": ["var(--font-ibm-plex-mono)", "monospace"],
        "body-lg": ["var(--font-public-sans)", "sans-serif"],
        "caption": ["var(--font-public-sans)", "sans-serif"],
        "display-lg-mobile": ["var(--font-source-serif)", "serif"],
        "display-lg": ["var(--font-source-serif)", "serif"],
        "headline-sm": ["var(--font-source-serif)", "serif"],
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-lg-mobile": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "headline-md": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "headline-sm": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-mono": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "500" }],
        "caption": ["12px", { lineHeight: "16px", fontWeight: "500" }],
      },
      borderRadius: {
        "sm": "0.25rem",
        "DEFAULT": "0.5rem",
        "md": "0.75rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px",
      },
      spacing: {
        "gutter": "20px",
        "unit": "8px",
        "card-padding": "32px",
        "section-gap": "64px",
        "container-margin": "24px",
      },
      boxShadow: {
        "paper": "0 4px 30px rgba(21, 30, 51, 0.05)",
        "paper-hover": "0 8px 40px rgba(21, 30, 51, 0.08)",
        "paper-elevated": "0 12px 48px rgba(21, 30, 51, 0.12)",
      }
    },
  },
  plugins: [],
};

export default config;
