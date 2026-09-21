import styles from "./About.module.css";

import heroImage from "../../../assets/logos/archtype-hero-banner.webp";
import { aboutContent } from "./AboutContent";

type SectionNumberProps = {
  number: string;
  label: string;
};

function SectionNumber({
  number,
  label,
}: SectionNumberProps) {
  return (
    <span className={styles.sectionNumber}>
      {number} / {label}
    </span>
  );
}

export function About() {
  const {
    hero,
    idea,
    manifesto,
    principles,
    system,
    story,
    dedication,
    ending,
  } = aboutContent;

  return (
    <main className={styles.about}>
      {/* ================================================== */}
      {/* HERO */}
      {/* IMAGEM + TITLE SÃO A MESMA COMPOSIÇÃO */}
      {/* ================================================== */}

      <section className={styles.hero}>
        <img
          className={styles.heroImage}
          src={heroImage}
          alt="ArchType"
        />

        <div className={styles.heroTitle}>
          <h1>
            {hero.title}

            <span>{hero.accent}</span>
          </h1>
        </div>
      </section>

      {/* ================================================== */}
      {/* BODY */}
      {/* ================================================== */}

      <div className={styles.aboutBody}>
        {/* ================================================== */}
        {/* 00 / IDEA */}
        {/* ================================================== */}

        <section className={styles.intro}>
          <SectionNumber
            number={idea.number}
            label={idea.label}
          />

          <div className={styles.introContent}>
            <h2 className={styles.introLead}>
              {idea.title}
            </h2>

            <div className={styles.introText}>
              {idea.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* 01 / MANIFESTO */}
        {/* ================================================== */}

        <section className={styles.manifesto}>
          <div className={styles.manifestoTitle}>
            <SectionNumber
              number={manifesto.number}
              label={manifesto.label}
            />

            <h2>
              {manifesto.title}

              <span>{manifesto.accent}</span>
            </h2>
          </div>

          <div className={styles.manifestoText}>
            {manifesto.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* ================================================== */}
        {/* 02 / PRINCIPLES */}
        {/* ================================================== */}

        <section className={styles.principlesSection}>
          <SectionNumber
            number={principles.number}
            label={principles.label}
          />

          <div className={styles.principlesGrid}>
            {principles.items.map((principle) => (
              <article
                key={principle.number}
                className={`${styles.systemCard} ${
                  styles[principle.variant]
                }`}
              >
                <span className={styles.cardNumber}>
                  {principle.number}
                </span>

                <div className={styles.cardHeading}>
                  <small>
                    {principle.action}
                  </small>

                  <h3>
                    {principle.title}
                  </h3>
                </div>

                {"items" in principle ? (
                  <ul>
                    {principle.items.map((item) => (
                      <li key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>
                    {principle.text}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ================================================== */}
        {/* 03 / SYSTEM */}
        {/* ================================================== */}

        <section className={styles.architecture}>
          <div className={styles.architectureIntro}>
            <SectionNumber
              number={system.number}
              label={system.label}
            />

            <h2>
              {system.title}
            </h2>

            <div className={styles.architectureText}>
              {system.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className={styles.flow}>
            {system.flow.map((step, index) => (
              <div
                className={styles.flowStep}
                key={step.number}
              >
                <div className={styles.flowCard}>
                  <span>
                    {step.number}
                  </span>

                  <strong>
                    {step.label}
                  </strong>
                </div>

                {index < system.flow.length - 1 && (
                  <span
                    className={styles.arrow}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ================================================== */}
        {/* 04 / 05 / 06 */}
        {/* ================================================== */}

        <section className={styles.story}>
          {story.map((item) => (
            <article key={item.number}>
              <SectionNumber
                number={item.number}
                label={item.label}
              />

              <h3>
                {item.title}
              </h3>

              <div className={styles.storyText}>
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </section>

        {/* ================================================== */}
        {/* 07 / DEDICATION */}
        {/* ================================================== */}

        <section className={styles.dedication}>
          <SectionNumber
            number={dedication.number}
            label={dedication.label}
          />

          <div className={styles.dedicationContent}>
            <h2>
              {dedication.title}
            </h2>

            <div className={styles.dedicationText}>
              {dedication.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* END */}
        {/* ================================================== */}

        <section className={styles.end}>
          <span className={styles.endEyebrow}>
            {ending.eyebrow}
          </span>

          <h2>
            {ending.title}

            <span>
              {ending.accent}
            </span>
          </h2>

          <div className={styles.signature}>
            <span>
              {ending.signature}
            </span>

            <small>
              {ending.meta}
            </small>
          </div>
        </section>
      </div>
    </main>
  );
}