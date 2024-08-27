function encriptar() { // encriptador de texto
    const textoInput = document.getElementById("texto").value;
    if (!/^[a-z]*$/.test(textoInput)) { // Valida que solo haya minúsculas
        alert("No ingreses mayusculas ni caracteres especiales");
        return;
    }
    let textoEncriptado = textoInput
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    mostrarResultado(textoEncriptado);
}

function desencriptar() { // Desencriptador de texto
    const textoInput = document.getElementById("texto").value;
    if (!/^[a-z]*$/.test(textoInput)) { // Valida que solo haya minúsculas
        alert("No ingreses mayusculas ni caracteres especiales");
        return;
    }
    let textoDesencriptado = textoInput
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) { // muestra el resultado en pantalla y oculta la imagen
    let resultadoDiv = document.getElementById("resultado"); // Crear un elemento de resultado si no existe
    if (!resultadoDiv) {
        resultadoDiv = document.createElement("div");
        resultadoDiv.id = "resultado";
        resultadoDiv.className = "modulo__resultado";
        document.querySelector(".modulo__encriptador").appendChild(resultadoDiv);
    }
    
    // muestra el texto en el div de resultado
    resultadoDiv.innerHTML = ` 
        <textarea id="textoResultado" class="modulo__texto">${texto}</textarea>
        <button onclick="copiarTexto()">Copiar</button>
    `;

    // Ocultar contenido inicial del modulo
    document.querySelector(".modulo__muñeco").style.display = "none";
}


function copiarTexto() { // copia el texto al portapapeles
    let textoResultado = document.getElementById("textoResultado");
    textoResultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}


document.getElementById("texto").addEventListener("input", function () { // muestra la imagen cuando se limpia el texto
    if (this.value === "") {
        document.querySelector(".modulo__muñeco").style.display = "block";
        const resultadoDiv = document.getElementById("resultado");
        if (resultadoDiv) {
            resultadoDiv.innerHTML = "";
        }
    }
});
