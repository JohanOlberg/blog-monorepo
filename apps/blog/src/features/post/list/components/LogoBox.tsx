// src/components/brand/Logo.tsx
import styles from "./LogoBox.module.css";

import boxDark from "../../../../assets/logos/lockup-dark.webp"
import boxLight from "../../../../assets/logos/lockup-light.webp"
import boxTerminal from "../../../../assets/logos/lockup-terminal.webp"
import boxBraces from "../../../../assets/logos/neon-braces-square.webp"
import boxGlitch from "../../../../assets/logos/lockup-glitch.webp"

import standardDark from "../../../../assets/logos/wordmark-stack-dark.webp"
import standardTerminal from "../../../../assets/logos/wordmark-stack-terminal.webp"
import standardLight from "../../../../assets/logos/wordmark-stack-light.webp"
import standardSpecial from "../../../../assets/logos/wordmark-stack-special.webp"
import standardGlitch from "../../../../assets/logos/wordmark-stack-glitch.webp"

import extendPixel from "../../../../assets/logos/wordmark-stack-pixel.webp"
import extendDark from "../../../../assets/logos/wordmark-stack-glitch-dark.webp"
import extendLight from "../../../../assets/logos/wordmark-stack-light.webp"
import extendSpecial from "../../../../assets/logos/wordmark-stack-special.webp"
import { useState } from "react";

//import heroBanner from "../../../../assets/logos/archtype-hero-banner.webp"
//import favicon from "../../../../assets/logos/archtype-favicon-32-light.webp"


export type LogoSize = "box" | "standard" | "extends";
export type LogoTheme = "dark" | "light" | "terminal" | "special" | "glitch";

const LOGO_SOURCES: Record<LogoSize, Record<LogoTheme, string>> = {
  box: { dark: boxDark, light: boxLight, terminal: boxTerminal, special:boxBraces, glitch:boxGlitch },
  standard: { dark: standardDark, light: standardLight, terminal: standardTerminal, special:standardSpecial, glitch:standardGlitch  },
  extends: { dark: extendDark, light: extendLight, terminal: standardTerminal, special:extendSpecial, glitch:extendPixel  },
};

function choiceThemes (){
const themes = ["dark" , "light" , "terminal" , "special" , "glitch"] as const;
  return  themes[Math.floor(Math.random() * themes.length)];
}
type LogoProps = {
  size:LogoSize
}

export function LogoBox({ size = "standard"}: LogoProps) {

 //const theme = choiceThemes() || "light"
const [theme] = useState(choiceThemes);
  
  return (
    <div className={styles.wrapper}>
      <img
      src={LOGO_SOURCES[size][theme]}
      alt="ArchType"
      className={styles.logo}
      loading="lazy"
      draggable={false}
    />
    </div>
  );
}