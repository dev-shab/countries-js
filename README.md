# 🌍 Country Explorer

A responsive and fast React app built with TypeScript, Tailwind CSS, and DaisyUI to explore countries using a custom backend powered by the [REST Countries API](https://restcountries.com).

## ✨ Features

- 🔍 Search countries by **name** or **capital**
- 🌐 Filter by **region** and **timezone**
- 🗺️ View detailed country info (flag, population, currency)
- 📦 Clean UI with **Tailwind CSS + DaisyUI**
- 🕒 Shows **local time** for each country
- ⚙️ Built with **TypeScript** for type safety

## 🚀 Tech Stack

| Frontend           | Styling                | State Management   |
| ------------------ | ---------------------- | ------------------ |
| React + TypeScript | Tailwind CSS + DaisyUI | useState/useEffect |

## 📦 Backend Installation and run

```bash
git clone https://github.com/dev-shab/countries-server.git
cd countries-server
npm install
npm run dev
```

## 📦 Installation

```bash
git clone https://github.com/dev-shab/countries-js.git
cd countries-js
npm install
```

Make sure your backend (Node.js + Express) is running at `http://localhost:3000`.

## 🧪 Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```

├── src/
│ ├── components/ # Reusable UI components (Card, Search, Filters)
│ ├── pages/ # Home, Country Detail
│ ├── types/ # TypeScript types
│ └── utils/ # Utility functions (optional)
├── public/ # Static assets
├── tailwind.config.ts # Tailwind + DaisyUI config
├── tsconfig.json # TypeScript config
├── README.md

```

## 🌐 API Reference

The frontend talks to a custom Express backend that proxies the [REST Countries API](https://restcountries.com/v3.1/all). Example endpoints:

```
- `GET /countries` — Fetch all countries
- `GET /countries/:code` — Get country details by code
- `GET /countries/search?name=India&region=Asia` — Search by name, region, capital, timezone
```
