let isBuka = false;

function bukaAmplop() {
  const container = document.getElementById("amplop-container");
  const pesan = document.getElementById("pesan");
  const lanjutan = document.getElementById("pesan-lanjutan");

  const text = "Lu tuh orang yang paling spesial di hidup gue. Setiap detik bareng lu tuh bikin gue happy dan ngerasa lengkap. Gue gak tau kenapa bisa suka sama lu, Tapi gue cuma pengen habisin sisa waktu bareng lu.";
  const extra = "By : 7arzz";

  container.classList.toggle("buka");
  isBuka = !isBuka;

  if (isBuka) {
    // Buka: reset isi & mulai ngetik
    pesan.innerHTML = "";
    lanjutan.innerHTML = "";
    lanjutan.style.display = "none";

    let i = 0;
    let typing = setInterval(() => {
      if (i < text.length) {
        pesan.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
        // Setelah selesai ngetik pesan utama, munculkan teks lanjutan
        setTimeout(() => {
          lanjutan.style.display = "block";
          lanjutan.innerHTML = extra;
        }, 300); // jeda sebentar biar smooth
      }
    }, 50);
  } else {
    // Tutup: reset semuanya
    pesan.innerHTML = "";
    lanjutan.innerHTML = "";
    lanjutan.style.display = "none";
  }
}
