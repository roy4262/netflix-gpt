# 🎬 Netflix GPT

Netflix GPT is a modern, AI-powered movie recommendation web application built using **React**, **Tailwind CSS**, **Firebase**, **TMDB API**, **Gemini AI API**, and **Redux Toolkit**. It allows users to sign in, browse movies, and get intelligent movie suggestions using Gemini AI.

---

## 📌 Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Firebase Setup & Deployment](#firebase-setup--deployment)
- [Environment Variables](#environment-variables)
- [Tech Stack](#tech-stack)
- [Future Enhancements](#future-enhancements)
- [Screenshots](#screenshots)
- [Author](#author)
- [License](#license)

---

## 🚀 Demo

> Live Demo: [Coming Soon!]

---

## ✨ Features

- 🔐 **User Authentication**
  - Firebase Email & Password Sign-In / Sign-Up
  - Auth state stored using Redux
  - Protected routes for signed-in users only

- 📺 **Movie Listings**
  - Fetch real-time "Now Playing" and "Popular" movies from TMDB API
  - Display movie posters, trailers, and detailed info

- 🤖 **AI-Powered Search**
  - GPT-based search bar using Gemini AI API
  - Natural language understanding for personalized movie suggestions

- 🎨 **UI/UX**
  - Fully responsive UI with Tailwind CSS
  - Search bar, header, and multi-language support

- ⚙️ **State Management**
  - Redux Toolkit for handling auth and movie slices
  - Memoization for performance optimization

- 🎞️ **YouTube Trailer Embed**
  - Main container plays muted & autoplay YouTube trailers of featured movies

- 📦 **Reusable Components**
  - MovieCard, MovieList, Header, SearchBar, GPTSearchPage

---

## 🛠️ Installation

1. **Clone the Repo**
   ```bash
   git clone https://github.com/yourusername/netflix-gpt.git
   cd netflix-gpt
