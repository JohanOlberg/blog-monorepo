import { patternFirstLineComposition } from "../model/pattnersResult";

import bentoStyles from "../styles/ResultsBento.module.css";
import styles from "./NotFoundResults.module.css";

type NotFoundResultsProps = {
  category: string | null;
  search: string | null;
  quantity: number;
};

const patternClasses: Record<string, string> = {
  "pattern-a": styles.patternA,
  "pattern-b": styles.patternB,
  "pattern-c": styles.patternC,
  "pattern-d": styles.patternD,
  "pattern-e": styles.patternE,
  "pattern-f": styles.patternF,
  "pattern-g": styles.patternG,
  "pattern-h": styles.patternH,
};

const areaClasses: Record<string, string> = {
  "box-1": styles.box1,
  "box-2": styles.box2,
  "box-3": styles.box3,
  "box-4": styles.box4,
};

function findPatternByAreas(areas: string[]) {
  const [patternKey, patternItems] =
    Object.entries(patternFirstLineComposition).find(
      ([, patternItems]) =>
        patternItems.length === areas.length &&
        patternItems.every(
          (patternItem, index) =>
            patternItem.area === areas[index]
        )
    ) ?? [];

  return {
    patternKey,
    patternItems,
  };
}

function generateFirstLine() {
  const columnSpans: number[] = [];
  let remainingColumns = 4;

  for (let i = 0; i < 4; i++) {
    if (remainingColumns === 0) {
      break;
    }

    const columnSpan =
      Math.floor(Math.random() * remainingColumns) + 1;

    columnSpans.push(columnSpan);
    remainingColumns -= columnSpan;
  }

  const messageWords = "meu teste de array".split(" ");

  const textSegments: string[] = [];
  let currentWordIndex = 0;

  for (let i = 0; i < columnSpans.length; i++) {
    textSegments.push(
      messageWords
        .slice(
          currentWordIndex,
          currentWordIndex + columnSpans[i]
        )
        .join(" ")
    );

    currentWordIndex += columnSpans[i];
  }

  const areaSequence: string[] = [];
  let currentAreaIndex = 1;

  for (let i = 0; i < columnSpans.length; i++) {
    for (let j = 0; j < columnSpans[i]; j++) {
      areaSequence.push(`box-${currentAreaIndex}`);
    }

    currentAreaIndex++;
  }

  const selectedPattern = findPatternByAreas(areaSequence);

  return {
    textSegments,
    patternKey: selectedPattern.patternKey,
    patternItems: selectedPattern.patternItems,
  };
}

export function NotFoundResults({
  category,
  search,
  quantity,
}: NotFoundResultsProps) {
  const firstLine = generateFirstLine();

  const uniquePatternItems =
    firstLine.patternItems?.filter(
      (patternItem, index, patternItems) =>
        patternItems.findIndex(
          item => item.area === patternItem.area
        ) === index
    ) ?? [];

  const selectedPatternClass = firstLine.patternKey
    ? patternClasses[firstLine.patternKey]
    : "";

  return (
    <section
      className={bentoStyles["results-bento"]}
      data-category={category ?? undefined}
      data-search={search ?? undefined}
      data-quantity={quantity}
    >
      <div
        className={`${styles.searchBentoMessage} ${selectedPatternClass}`}
      >
        {uniquePatternItems.map((patternItem, index) => (
          <div
            key={patternItem.area}
            className={`${bentoStyles.box} ${
              areaClasses[patternItem.area]
            }`}
          >
            <p
              className={`${bentoStyles["results-bento__text"]} ${bentoStyles["results-bento__text--large"]}`}
            >
              {firstLine.textSegments[index]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}