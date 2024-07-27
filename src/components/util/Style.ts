// styles.js
export function getHoverEffectStyles(colors: string[]) {
    const gradient = `linear-gradient(to left, ${colors.join(", ")})`;
    return {
        backgroundImage: gradient,
        backgroundSize: "200% auto",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: "shine 4s linear infinite",
    };
}

export const shine = {
    "@keyframes shine": {
        "0%": { backgroundPosition: "0% center" },
        "100%": { backgroundPosition: "200% center" },
    },
};

export const wave = {
    "@keyframes wave": {
        "0%": { transform: "rotate(0deg)" },
        "10%": { transform: "rotate(14deg)" },
        "20%": { transform: "rotate(-8deg)" },
        "30%": { transform: "rotate(14deg)" },
        "40%": { transform: "rotate(-4deg)" },
        "50%": { transform: "rotate(10deg)" },
        "60%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(0deg)" },
    },
};