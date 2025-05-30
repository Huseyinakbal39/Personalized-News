import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const categories = [
  "general", "business", "entertainment",
  "health", "science", "sports", "technology"
];


function CategorySelect({user}) {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  try {
    const userStr = localStorage.getItem("user");
    const user = userStr && userStr !== "undefined" ? JSON.parse(userStr) : null;
    if (user?.interests) {
      setSelected(user.interests);
    }
  } catch (err) {
    console.error("user parse hatası:", err);
  }
}, []);

  /* useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.interests) {
      setSelected(user.interests);
    }
  }, []); */

  const handleChange = (cat) => {
    setSelected((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat]
    );
  };

  const saveInterests = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        "http://localhost:5000/api/auth/interests",
        { interests: selected },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const user = JSON.parse(localStorage.getItem("user"));
      user.interests = res.data.interests;
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (err) {
        console.error("Kayıt hatası:", err);
        const message = err.response?.data?.error || "Sunucuya ulaşılamadı.";
        alert("Kayıt hatası: " + message);
}
  };

  return (
    <div className="container">
      <h2>İlgi Alanlarını Seç</h2>
      <div>
        {categories.map((cat) => (
          <label key={cat} style={{ display: "block", margin: "10px 0" }}>
            <input
              type="checkbox"
              value={cat}
              checked={selected.includes(cat)}
              onChange={() => handleChange(cat)}
            />{" "}
            {cat.toUpperCase()}
          </label>
        ))}
      </div>
      <button onClick={saveInterests}>Kaydet</button>
    </div>
  );
}

export default CategorySelect;







