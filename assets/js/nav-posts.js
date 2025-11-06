document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("../posts/posts.json");
    const posts = await response.json();

    const currentPath = window.location.pathname;
    const currentFile = currentPath.split("/").pop();

    const currentIndex = posts.findIndex(post => post.file === currentFile);

    if (currentIndex === -1) return; 

    const prevLink = document.querySelector(".previous-post-link");
    const nextLink = document.querySelector(".next-post-link");

    if (currentIndex > 0) {
      const prevPost = posts[currentIndex - 1];
      prevLink.href = prevPost.file;
      prevLink.textContent = `← ${prevPost.title}`;
    } else {
      prevLink.style.display = "none";
    }

    if (currentIndex < posts.length - 1) {
      const nextPost = posts[currentIndex + 1];
      nextLink.href = nextPost.file;
      nextLink.textContent = `${nextPost.title} →`;
    } else {
      nextLink.style.display = "none";
    }

  } catch (error) {
    console.error("Error al cargar la navegación de posts:", error);
  }
});
