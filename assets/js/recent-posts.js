document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('recent-posts');

    try {
        const response = await fetch('posts/posts.json');
        const posts = await response.json();

        const recentPosts = posts.slice(-3).reverse();

        container.innerHTML = '';

        recentPosts.forEach(post => {
            const card = document.createElement('a');
            card.href = `posts/${post.file}`;
            card.classList.add('card-post');

            card.innerHTML = `
                <img src="posts/resources/${post.resources}/${post.banner}" alt="banner" class="banner">
                <h4 class="title-post">${post.title}</h4>
                <span class="short-description-post">${post.description}</span>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error('Error cargando los posts recientes:', error);
        container.innerHTML = '<p>Error al cargar las publicaciones recientes.</p>';
    }
});
