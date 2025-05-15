function redirectToRandomPage() {
  const pages = [
    "seite1/index.html",
    "seite2/index.html",
    "seite3/index.html"
  ];

  const randomPage = pages[Math.floor(Math.random() * pages.length)];
  window.location.href = randomPage;
}

setTimeout(redirectToRandomPage, 1000); // 1 Sekunde warten
