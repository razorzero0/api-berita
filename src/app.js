// index.js
const express = require("express");
const Parser = require("rss-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Impor data feed dari file terpisah
const allFeeds = require("./feeds.js");

app.use(cors());
const parser = new Parser();

// Loop (perulangan) untuk membuat rute secara dinamis
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
        res.status(500).json({ error: "Failed to fetch news feed." });
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

// Jalankan server
app.listen(port, () => {
  console.log(`Serveris running at http://localhost:${port}`);
});
