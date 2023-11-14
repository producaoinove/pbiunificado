if (localStorage.getItem('primeiroAcesso') === null) {
    if (window.location.pathname !== '../index.html') {
        window.location.href = '../index.html';
    }
    localStorage.setItem('primeiroAcesso', 'true');
}