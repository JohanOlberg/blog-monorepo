import { useState } from "react";
import type { CSSProperties } from "react";
import bgImg from "../../../../assets/notFound/bgImg.webp"

import {  pattnersAreas,type LayoutType} from "../model/pattnersResult";

import bentoStyles from "../styles/ResultsBento.module.css";
import styles from "./FewResultsBento.module.css";

type FewResultsProps = {
  imageSrc?: string;
  imageAlt?: string;
  joke?: string;
  description?: string;
  actionLabel?: string;
};

const availableLayouts = Object.keys(
  pattnersAreas
) as LayoutType[];

function getRandomLayout(): LayoutType {
  const randomIndex = Math.floor(
    Math.random() * availableLayouts.length
  );

  return availableLayouts[randomIndex];
}

export function FewResults({
  imageSrc,
  imageAlt = "",
  joke = "Looks like the internet is having a quiet day.",
  description = "Try changing your search or explore something else.",
  actionLabel = "Try again",
}: FewResultsProps) {
  const [layout] = useState<LayoutType>(getRandomLayout);

  const gridTemplateAreas = pattnersAreas[layout];

  const gridStyle = {
    "--few-results-template": gridTemplateAreas,
  } as CSSProperties;

  return (
    <div className={bentoStyles["results-bento"]}>
      <div
        className={styles.fewResultsGrid}
        style={gridStyle}
      >
        <div
          className={`${bentoStyles.box} ${styles.imageArea}`}
        >
          {imageSrc && (
            <div className={bentoStyles["results-bento__image"]} style={{
                backgroundImage: `url(${bgImg})`,

              }}>
              <img
                src={imageSrc}
                alt={imageAlt}
              />
            </div>
          )}
        </div>

        <div
          className={`${bentoStyles.box} ${styles.jokeArea}`}
        >
          <p
            className={`${bentoStyles["results-bento__text"]} ${bentoStyles["results-bento__text--large"]}`}
          >
            {joke}
          </p>
        </div>

        <div
          className={`${bentoStyles.box} ${styles.descriptionArea}`}
        >
          <p className={bentoStyles["results-bento__text"]}>
            {description}
          </p>
        </div>

        <div
          className={`${bentoStyles.box} ${styles.actionArea}`}
        >
          <button
            type="button"
            className={styles.actionButton}
          >
            {actionLabel}
          </button>
        </div>
      </div>
    </div>
  );
}