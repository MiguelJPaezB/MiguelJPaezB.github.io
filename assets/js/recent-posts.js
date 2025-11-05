document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('recent-posts');

    try {
        // Cargar el JSON con todos los posts
        const response = await fetch('posts/posts.json');
        const posts = await response.json();

        // Tomar los 3 últimos (asumiendo que el JSON está ordenado del más antiguo al más nuevo)
        const recentPosts = posts.slice(-3).reverse(); // reverse() para que se muestren del más reciente al más antiguo

        container.innerHTML = '';

        // Crear una tarjeta por cada post
        recentPosts.forEach(post => {
            const card = document.createElement('a');
            card.href = `posts/${post.file}`;
            card.classList.add('card-post');

            card.innerHTML = `
                <img src="posts/banners/${post.banner}" alt="banner" class="banner">
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
