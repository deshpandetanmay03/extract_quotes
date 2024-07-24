import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-geist-sans)", ...fontFamily.sans],
            },
        },
        colors: {
            "base": "#faf4ed",
            "surface": "#fffaf3",
            "overlay": "#f2e9e1",
            "muted": "#9893a5",
            "subtle": "#797593",
            "text": "#575279",
            "love": "#b4637a",
            "gold": "#ea9d34",
            "rose": "#d7827e",
            "pine": "#286983",
            "foam": "#56949f",
            "iris": "#907aa9",
            "highlight-low": "#f4ede8",
            "highlight-med": "#dfdad9",
            "highlight-high": "#cecacd",
        },
    },
    plugins: [],
} satisfies Config;
