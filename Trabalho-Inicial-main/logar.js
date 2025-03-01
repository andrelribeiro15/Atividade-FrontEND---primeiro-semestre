
        function validarLogin() {
            let usuario = document.getElementById("usuario").value;
            let senha = document.getElementById("senha").value;

            if (usuario === "" || senha === "") {
                alert("Por favor, preencha todos os campos.");
                return false;
            }
            
            if (usuario === "admin" && senha === "1234") {
                window.location.href = "formulario.html";
            } else {
                alert("Usuário ou senha incorretos.");
            }

            return true;
        }
 