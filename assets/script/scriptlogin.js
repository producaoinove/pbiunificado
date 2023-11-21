function realizarLOGIN() {
    const form = document.getElementById("LOGINREALIZAR");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = form.username.value;
        const password = form.password.value;
        if ((username === "higor.ruy" && password === "123456") || (username === "producao.inove" && password === "123456") || (username === "jhenyfer.cordeiro" && password === "123456") || (username === "vendas.inove" && password === "123456") || (username === "back.office" && password === "123456")) {
            alert('SUCESSO NO LOGIN. \n !ATENÇÃO! MUDANÇAS NO TIPO VENDA - deverão seguir pelo Legado! \n PRESSIONE OK PARA CONTINUAR!');
            window.location.href = "private/home.html";
        } else {
            alert('FRACASSO NO LOGIN. PRESSIONE OK PARA TENTAR NOVAMENTE!');
            window.location.href = "index.html";
        }
    });
}
const button = document.getElementById("BOTAOLOGIN");
button.addEventListener("click", realizarLogin);