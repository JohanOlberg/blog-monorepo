export const aboutContent = {
  hero: {
    eyebrow: "ABOUT / ARCHTYPE",
    title: "Structure where it matters.",
    accent: "Freedom where it doesn't.",
  },

  idea: {
    number: "00",
    label: "IDEA",
    title: "Why should every blog look like a blog?",
    paragraphs: [
      "ArchType started as a place to write about software, frontend development and architecture.",
      "Somewhere along the way, it became an experiment in how content can be presented when repetition stops being the default.",
    ],
  },

  manifesto: {
    number: "01",
    label: "MANIFESTO",
    title: "Order without",
    accent: " repetition.",
    paragraphs: [
      "The goal is not to remove structure. Structure makes interfaces understandable.",
      "The experiment is about deciding which rules need to remain — and which rules exist only because we became used to them.",
    ],
  },

  principles: {
    number: "02",
    label: "PRINCIPLES",

    items: [
      {
        number: "01",
        action: "KEEP",
        title: "Order",
        variant: "order",
        items: ["Grid", "Spacing", "Hierarchy", "Navigation"],
      },

      {
        number: "02",
        action: "CHANGE",
        title: "Variation",
        variant: "variation",
        items: ["Size", "Position", "Color", "Composition"],
      },

      {
        number: "03",
        action: "PROTECT",
        title: "Rules",
        variant: "rules",
        text: "Keep the interface understandable and the experience predictable where predictability matters.",
      },

      {
        number: "04",
        action: "EXPLORE",
        title: "Freedom",
        variant: "freedom",
        text: "Break repetition without breaking usability. Let composition change while the system underneath remains consistent.",
      },
    ],
  },

  system: {
    number: "03",
    label: "SYSTEM",

    title:
      "Chaos is more interesting when there is a system underneath it.",

    paragraphs: [
      "ArchType separates content from composition.",
      "Posts remain posts. Navigation remains predictable. The layout is where the system is allowed to experiment.",
    ],

    flow: [
      {
        number: "01",
        label: "CONTENT",
      },
      {
        number: "02",
        label: "RULES",
      },
      {
        number: "03",
        label: "COMPOSITION",
      },
      {
        number: "04",
        label: "LAYOUT",
      },
    ],
  },

  story: [
    {
      number: "04",
      label: "ORIGIN",
      title: "It started as a blog.",
      paragraphs: [
        "ArchType began as a personal space for writing about TypeScript, React, Node.js, CSS and software architecture.",
        "A place to document ideas, lessons and the things I was learning while building.",
      ],
    },

    {
      number: "05",
      label: "EXPERIMENT",
      title: "Then the layout became part of the idea.",
      paragraphs: [
        "Instead of designing one card and repeating it forever, ArchType explores how reusable components can create different compositions.",
        "The content follows a structure. The interface is given more freedom.",
      ],
    },

    {
      number: "06",
      label: "NEXT",
      title: "This is only the beginning.",
      paragraphs: [
        "Today ArchType is a technology blog.",
        "In the future, the ideas behind it may grow into a platform where other people can create, write and give their own content a visual identity.",
      ],
    },
  ],

  dedication: {
    number: "07",
    label: "DEDICATION",
    title: "For my father.",

    paragraphs: [
      "This project was built during a period of change in my life. Some of the strength to keep learning, creating and moving forward comes from what he left with me.",
      "With love, gratitude, and everything that continues through me.",
    ],
  },

  ending: {
    eyebrow: "ARCHTYPE IS STILL AN EXPERIMENT.",

    title: "Designed as a system.",
    accent: "Built to escape repetition.",

    signature: "<t>",
    meta: "ARCHTYPE / 2026",
  },
} as const;