import type { ReactNode } from "react";
import "./DecorativeBox.css";

type DecorativeTone =
  | "violet"
  | "magenta"
  | "olive"
  | "lavender";

  type DecorativeVariant =
  | "a"
  | "b"
  | "c"
  | "d";

type DecorativeBoxProps = {
  children?: ReactNode;
  className?: string;
  tone?: DecorativeTone;
  showDots?: boolean;
  showShapes?: boolean;
  decorativeVariant?:DecorativeVariant;
};

export function DecorativeBox({
  children,
  className = "",
  tone = "violet",
  showDots = true,
  showShapes = true,
  decorativeVariant = "b",
}: DecorativeBoxProps) {
  return (
    <section
      className={`
        decorative-box
        decorative-box--${tone}
        decorative-box--${decorativeVariant}
        ${className}
      `}
    >
      {showShapes && (
        <>
          <span className="decorative-box__shape decorative-box__shape--one" />
          <span className="decorative-box__shape decorative-box__shape--two" />
        </>
      )}

      {showDots && (
        <span className="decorative-box__dots" />
      )}

      <div className="decorative-box__content">
        {children}
      </div>
    </section>
  );
}