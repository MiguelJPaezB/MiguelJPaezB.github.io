document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('posts-container');

    try {
        const response = await fetch('posts/posts.json');
        const posts = await response.json();

        container.innerHTML = '';

        posts.forEach(post => {
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
        console.error('Error cargando los posts:', error);
        container.innerHTML = '<p>Error al cargar las publicaciones.</p>';
    }
});
