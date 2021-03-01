function toggleNav() {
  // Get links from navigation
  const links = document.getElementById("nav-links");

  //   Check styles on links
  links.style.top == "-100%"
    ? (links.style.top = "100px")
    : (links.style.top = "-100%");
}
