function pelukVirtual() {
  alert("muach,cayang banyak banyakk🤗💓,sebenernya ada hadiah lagii,nanti ku spill waktu ultah adekk,btw pap dong yang banyakk,heheee");
}

// Love animation
const heartsContainer = document.getElementById("hearts-container");
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 250);

