function realizarLOGIN() {
    const form = document.getElementById("LOGINREALIZAR");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = form.username.value;
        const password = form.password.value;
        if ((username === "higor.ruy" && password === "houston@67!01051317") || (username === "producao.inove" && password === "123456") || (username === "jhenyfer.cordeiro" && password === "123456")) {
            alert('SUCESSO NO LOGIN. PRESSIONE OK PARA CONTINUAR!');
            window.location.href = "private/home.html";
        } else {
            alert('FRACASSO NO LOGIN. PRESSIONE OK PARA TENTAR NOVAMENTE!');
            window.location.href = "index.html";
        }
    });
}
const button = document.getElementById("BOTAOLOGIN");
button.addEventListener("click", realizarLogin);