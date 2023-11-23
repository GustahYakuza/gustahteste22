document.addEventListener('DOMContentLoaded', function () {
    const glide = new Glide('.glide', {
        type: 'carousel',
        autoplay: 3000, // Configuração para auto avanço a cada 3 segundos
    });

    glide.mount();
});
