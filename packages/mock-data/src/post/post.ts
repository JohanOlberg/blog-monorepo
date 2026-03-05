import type{ Post } from "@blog/domain";

export const posts: Post[] = [
  {
    title: "Introduction to React.js: What it is and How to Get Started?",
    id: "1",
    status: "published",
    description: "A quick guide to getting started with React.js and understanding its core concepts.",
    content: {
      text: "React is a JavaScript library for building user interfaces. In this post, we'll explore the basics of how to get started with React.js and its key features."
    },
    author: "Johan",
    date: "2026-03-01"
  },
  {
    title: "How to Create a Component in React?",
    id: "2",
    status: "draft",
    description: "Learn how to create functional and class components in React and their differences.",
    content: {
      text: "Creating components in React is a fundamental part of working with this library. We'll show how to create both functional and class components in React."
    },
    author: "Johan",
    date: "2026-03-02"
  },
  {
    title: "Managing State in React with useState Hook",
    id: "3",
    status: "published",
    description: "Understanding and using the `useState` hook in React to manage component state.",
    content: {
      text: "The `useState` hook is one of the most important tools in React for managing state. Let's dive into how to use it in your projects."
    },
    author: "Johan",
    date: "2026-03-03"
  }
];


