const startBtn = document.getElementById("startBtn");
const questionBox = document.getElementById("questionBox");
const gaBtn = document.getElementById("ga-btn");
const mauBtn = document.getElementById("mau-btn");
const awalText = document.getElementById("awal"); // 👉 ambil elemen h1 awal

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  awalText.classList.add("hidden"); // 👉 sembunyikan teks awal
  questionBox.classList.remove("hidden");
});

mauBtn.addEventListener("click", () => {
  window.location.href = "love-forever.html";
});

gaBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 100));
  gaBtn.style.left = `${x}px`;
  gaBtn.style.top = `${y}px`;
});

// love-loves
const heartsContainer = document.getElementById("hearts-container");
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);

mauBtn.addEventListener("click", () => {
  // 🔥 Efek kembang api cinta
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });

  // Delay 1 detik baru pindah page
  setTimeout(() => {
    window.location.href = "love-forever.html";
  }, 3000);
});
