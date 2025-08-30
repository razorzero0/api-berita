// index.js
const express = require("express");
const Parser = require("rss-parser");
const cors = require("cors");

// Impor data feed dari file terpisah
const allFeeds = require("./feeds.js");

// Buat instance Express
const app = express();
app.use(cors());

const parser = new Parser();

// Loop untuk membuat rute secara dinamis
for (const source in allFeeds) {
  for (const category in allFeeds[source]) {
    const route = `/${source}/${category}`;
    const feedUrl = allFeeds[source][category];

    app.get(route, async (req, res) => {
      try {
        const feed = await parser.parseURL(feedUrl);
        res.json(feed.items);
      } catch (error) {
        console.error(`Error fetching feed for ${source}/${category}:`, error);
        res.status(500).json({ error: "Gagal mengambil feed berita." });
      }
    });
  }
}

// Tambahkan rute untuk menampilkan semua rute yang tersedia
app.get("/", (req, res) => {
  const availableRoutes = {};
  for (const source in allFeeds) {
    availableRoutes[source] = Object.keys(allFeeds[source]).map(
      (category) => `/${source}/${category}`
    );
  }
  res.json({
    message:
      "Selamat datang di portal berita unofficial yang menyajikan rangkuman terbaru dari berbagai sumber terpercaya di Indonesia melalui RSS feed resmi, tanpa perubahan isi asli.",
    routes: availableRoutes,
  });
});

// Ekspor handler Express untuk Vercel
module.exports = app;
