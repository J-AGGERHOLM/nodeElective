## About

This website is my personal documentation hub for the Node.js elective. It collects my weekly notes and course examples in one place, so I can quickly look up concepts, patterns, and code snippets while working on assignments and projects.

## How it works

### Backend (Node + Express)

The server is a small Express app that serves the frontend as static files. That means the browser can request the HTML/CSS/JS assets directly, while the server stays clean and focused on routing and hosting.

### Frontend (Bootstrap + components)

The interface uses a vertical navigation menu and a Bootstrap accordion. Each accordion section represents a topic from the elective.

## Notes rendered from Markdown

The actual notes are written as .md files and displayed directly on the page. The site uses a Markdown web component (zero-md) to fetch each Markdown file and render it as styled HTML inside the accordion body. This keeps the content modular: I can update a topic by editing a single .md file without touching the HTML layout.

## What you’ll find here

Course notes are organized chronologically. Each class is represented bu an accordian.

You'll find short examples and reminders of patterns used in class (endpoints, parameters, JSON parsing, iteration methods).

Aditionally i've documented the gotchas and safety notes, from class, like why you shouldn’t blindly inject HTML and why sanitizing matters when using dynamic content.

## Why I built it this way

I was inspired by how Github displays readme files on a repository landing page.
I wanted something lightweight, easy to maintain, and close to how documentation is handled in real dev workflows: Markdown for content, a simple server for hosting, and a clean UI to navigate it quickly.
