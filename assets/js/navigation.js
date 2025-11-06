document.addEventListener("DOMContentLoaded", () => {
  const menuLink = document.querySelector(".topbar .menu a");

  if (!menuLink) return;

  const currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "" || currentPage === "index.html") {
    menuLink.textContent = "Blog";
    menuLink.href = "blog.html";
  } 
  else {
    menuLink.textContent = "Home";
    menuLink.href = "../index.html";
  }
});
