function redirectToRandomPage() {
  const pages = [
    "Bambusatmung.html",
    "Drachenatem.html",
    "Wellenatmung.html"
  ];

  const randomPage = pages[Math.floor(Math.random() * pages.length)];
  window.location.href = randomPage;
}

setTimeout(redirectToRandomPage, 1000);
