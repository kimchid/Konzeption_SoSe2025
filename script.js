function redirectToRandomPage() {
  const pages = [
    "seite1.html",
    "seite2.html",
    "seite3.html"
  ];

  const randomPage = pages[Math.floor(Math.random() * pages.length)];
  window.location.href = randomPage;
}

setTimeout(redirectToRandomPage, 1000); // 1 Sekunde warten
