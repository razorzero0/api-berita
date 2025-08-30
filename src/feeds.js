// feeds.js
const feeds = {
  cnn: {
    terbaru: "https://www.cnnindonesia.com/nasional/rss",
    internasional: "https://www.cnnindonesia.com/internasional/rss",
    ekonomi: "https://www.cnnindonesia.com/ekonomi/rss",
    olahraga: "https://www.cnnindonesia.com/olahraga/rss",
    teknologi: "https://www.cnnindonesia.com/teknologi/rss",
    gaya_hidup: "https://www.cnnindonesia.com/gaya-hidup/rss",
  },
  bbc: {
    newest: "http://feeds.bbci.co.uk/news/rss.xml",
    world: "http://feeds.bbci.co.uk/news/world/rss.xml",
    business: "http://feeds.bbci.co.uk/news/business/rss.xml",
    politics: "http://feeds.bbci.co.uk/news/politics/rss.xml",
    technology: "http://feeds.bbci.co.uk/news/technology/rss.xml",
    science: "http://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
    entertainment:
      "http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml",
  },
  antaranews: {
    terbaru: "https://www.antaranews.com/rss/top-news.xml",
    politik: "https://www.antaranews.com/rss/politik.xml",
    ekonomi: "https://www.antaranews.com/rss/ekonomi.xml",
    tekno: "https://www.antaranews.com/rss/tekno.xml",
    gayaHidup: "https://www.antaranews.com/rss/gaya-hidup.xml",
    otomotif: "https://www.antaranews.com/rss/otomotif.xml",
    olahraga: "https://www.antaranews.com/rss/olahraga.xml",
  },
  cnbcindonesia: {
    terbaru: "https://www.cnbcindonesia.com/news/rss",
    market: "https://www.cnbcindonesia.com/market/rss",
    tech: "https://www.cnbcindonesia.com/tech/rss",
    lifestyle: "https://www.cnbcindonesia.com/lifestyle/rss",
    entrepreneur: "https://www.cnbcindonesia.com/entrepreneur/rss",
  },
  tempo: {
    terbaru: "https://rss.tempo.co/nasional",
    bisnis: "https://rss.tempo.co/bisnis",
    dunia: "https://rss.tempo.co/dunia",
    metro: "https://rss.tempo.co/metro",
    seleb: "https://rss.tempo.co/seleb",
    otomotif: "https://rss.tempo.co/otomotif",
  },
  republika: {
    terkini: "http://www.republika.co.id/rss",
    news: "http://www.republika.co.id/rss/news",
    ihram: "http://www.republika.co.id/rss/ihram",
    bola: "http://www.republika.co.id/rss/bola",
  },
  games: {
    gamebrott: "https://www.gamebrott.com/feed",
  },
};

module.exports = feeds;
