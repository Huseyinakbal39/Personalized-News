import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Carousel.css";

function Home() {
  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const userJson = localStorage.getItem("user");
    if (userJson) {
      setUser(JSON.parse(userJson));
    } else {
      fetchNews([]); // ziyaretçi için rastgele kategoriler
    }
  }, []);

  useEffect(() => {
    if (user) {
      fetchNews(user.interests);
    }
  }, [user]);

  const fetchNews = async (interests) => {
    try {
      let selectedCategories = [];

      if (interests && interests.length > 0) {
        selectedCategories = interests;
      } else {
        selectedCategories = ["general", "technology", "health", "sports"];
      }

      const randomCategory =
        selectedCategories[Math.floor(Math.random() * selectedCategories.length)];

      const res = await axios.get(`http://localhost:5000/api/news?category=${randomCategory}`);
      setArticles(res.data);
    } catch (err) {
      console.error("Haber çekme hatası:", err.message);
    }
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + articles.length) % articles.length);
  };

  return (
    <div className="carousel-container">
      <h2>Merhaba, {user?.username || "Ziyaretçi"} 👋</h2>

      {articles.length > 0 ? (
        <div className="carousel-wrapper">
          <button className="arrow left" onClick={prevSlide}>←</button>

          <div className="slide-box">
            <div className="slide">
              {articles[current].urlToImage && (
                <img src={articles[current].urlToImage} alt="haber" className="slide-img" />
              )}
              <h2>{articles[current].title}</h2>
              <p>{articles[current].description}</p>
              <a href={articles[current].url} target="_blank" rel="noreferrer">Habere Git</a>
            </div>
          </div>

          <button className="arrow right" onClick={nextSlide}>→</button>
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: "2rem" }}>Yükleniyor ya da haber bulunamadı.</p>
      )}
    </div>
  );
}

export default Home;


