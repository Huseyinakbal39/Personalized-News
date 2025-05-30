#  Kişiselleştirilebilir Haber Uygulaması

Bu proje, React ve Node.js kullanılarak geliştirilen kişiselleştirilebilir bir haber beslemesi uygulamasıdır. Kullanıcılar kayıt olup giriş yaptıktan sonra kendi ilgi alanlarını seçerek, sadece o kategorilerden haberleri görebilirler. Giriş yapılmadığında rastgele kategorilerden haberler gösterilir.

## Kullanılan başlıca paketler
-Express
-Mongoose
-Cors
-Dotenv
-Jsonwebtoken
-bcrypt
-Axios
-MongoDB
"scripts": {
  "dev": "concurrently \"npm run server\" \"npm run client\"",
  "server": "cd server && npm start",
  "client": "cd client && npm start"
}
Çalışma komudu = npm run dev

`.env` dosyası oluştur:

```env
PORT=5000
DB_URI=mongodb+srv://huseyinakbal:1907Ha2002@cluster0.ebktwyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=c1a53a4472d5bb772869e550dc1b2b4650d9e2af5d5e48b825561a08147aba51
NEWS_API_KEY=f31d34e7531a4e43991c1c9b3d0581c8
```

Sunucuyu başlat:

```bash
npm start
```

### 3. Frontend Kurulumu

```bash
cd frontend
npm install
npm start
```

Uygulama tarayıcıda şu adreste çalışacaktır:
```
http://localhost:3000
```

## Özellikler

-  Kullanıcı kayıt & giriş sistemi (JWT ile)
-  İlgi alanlarına göre kişiselleştirme
-  HaberAPI ile dinamik veri çekme
-  Çıkış yapıldığında kullanıcı verisi sıfırlanır
-  Ziyaretçilere rastgele kategorilerden haber gösterilir
-  Responsive ve basit kullanıcı arayüzü
-  Kategoriler seçilerek güncellenebilir

##  Proje Yapısı

```
haber-uygulamasi/
├── client/
│   ├── models/
│   ├── routes/
│   └── server.js
├── server/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── index.js
│   └── public/
├── README.md
└── .gitignore
```

## Kullanılan Teknolojiler

- **React**
- **Node.js / Express**
- **MongoDB + Mongoose**
- **JWT Auth**
- **Axios**
- **React Router DOM**
- **Haber API** ([NewsAPI.org](https://newsapi.org/))