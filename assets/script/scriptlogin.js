function realizarLOGIN() {
    const form = document.getElementById("LOGINREALIZAR");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = form.username.value;
        const password = form.password.value;
        const motivo = form.motivo.value;
        let redirectUrl = "";

        if ((username === "higor.ruy" && password === "123456") || (username === "producao.inove" && password === "123456") || (username === "luiz.esquivel" && password === "123456") || (username === "jhenyfer.cordeiro" && password === "123456") || (username === "vendas.inove" && password === "123456") || (username === "back.office" && password === "123456")) {
            alert('SUCESSO NO LOGIN. \n !ATENÇÃO! MUDANÇAS NO TIPO VENDA - deverão seguir pelo Legado! \n PRESSIONE OK PARA CONTINUAR!');

            if (motivo === "1") {
                redirectUrl = "private/home1.html";
            } else if (motivo === "2") {
                redirectUrl = "private/home2.html";
            }

            window.location.href = redirectUrl;
        } else {
            alert('FRACASSO NO LOGIN. PRESSIONE OK PARA TENTAR NOVAMENTE!');
            window.location.href = "index.html";
        }
    });
}
const button = document.getElementById("BOTAOLOGIN");
button.addEventListener("click", realizarLogin);