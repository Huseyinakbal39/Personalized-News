import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  const { category } = req.query;
  const apiKey = process.env.NEWS_API_KEY;

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines`, {
        params: {
          country: "us",
          category: category || "general",
          apiKey
        }
      }
    );

    res.json(response.data.articles);
  } catch (err) {
    console.error("Haber API hatası:", err.message);
    res.status(500).json({ error: "Haberleri alırken bir hata oluştu." });
  }
});

export default router;
