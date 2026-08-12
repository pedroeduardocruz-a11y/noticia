function compartilharNoticia() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: 'Confira esta notícia incrível do Colégio Frederico Guilherme Giese!',
            url: window.location.href,
        }).catch((error) => console.log('Erro ao compartilhar', error));
    } else {
        alert('Link copiado para a área de transferência!');
    }
}