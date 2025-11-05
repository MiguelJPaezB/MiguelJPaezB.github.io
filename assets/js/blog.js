document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('posts-container');

    try {
        // Cargar los datos del archivo JSON
        const response = await fetch('posts/posts.json');
        const posts = await response.json();

        // Limpiar el contenedor (por si hay algo previo)
        container.innerHTML = '';

        // Generar una tarjeta para cada post
        posts.forEach(post => {
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
        console.error('Error cargando los posts:', error);
        container.innerHTML = '<p>Error al cargar las publicaciones.</p>';
    }
});
