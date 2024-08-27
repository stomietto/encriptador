let texto = document.getElementById("texto").value;
let specialCharacters = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/g;
let upperCase = (character !== character.toLowerCase())/g;
let empty=""/g;

function encriptar (){
    if(texto.match(specialCharacters)||texto.match(upperCase)){
        alert("No se pueden ingresar Mayusculas, espacios o caracteres especiales");
    }
    else if (/[a-z]/.test(texto)){

    }
}





/*
function encriptar (){
    if (/[A-Z]|\d|[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(texto)) {
        alert("Sólo se permiten ingresar letras minúsculas y sin acentos. Inténtelo nuevamente.");    
        chequeo = false;
	}
	else if (/[a-z]/.test(texto)) {
		chequeo = true;
	}
	//Por si el usuario no escribe nada, sólo hace espacios o saltos de línea y presiona encriptar
	else {
		alert("Es necesario ingresar un mensaje para encriptar/desencriptar.");
		chequeo = false;
		limpiar();
	}
}





/*let texto = document.getElementById("modulo__texto").value;
let specialCharacters = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/g;

function check (){
    if(texto.match(specialCharacters)||texto.match(upperCase)){
        alert("Sólo se permiten ingresar letras minúsculas y sin caracteres especiales ni espacios vacios. Inténtelo nuevamente.");   
 
}
}




/*let texto = document.getElementById("texto").value;
let specialCharacters = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/g;
let upperCase = (character == character.toLowerCase())/g;
let empty=""/g;

function check (){
    if(texto.match(specialCharacters)||texto.match(upperCase)){
        alert("Sólo se permiten ingresar letras minúsculas y sin caracteres especiales ni espacios vacios. Inténtelo nuevamente.");   
        check = false; 
}
else{
    check = true;
}
}

    /*function encriptar (){
        if(texto.match(specialCharacters)||texto.match(upperCase)){
            alert("Sólo se permiten ingresar letras minúsculas y sin caracteres especiales ni espacios vacios. Inténtelo nuevamente.");    
    }
	else{
	
	}
    }   


    /*
function encriptar (){
    if (/[A-Z]|\d|[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(texto)) {
        alert("Sólo se permiten ingresar letras minúsculas y sin acentos. Inténtelo nuevamente.");    
        chequeo = false;
	}
	else if (/[a-z]/.test(texto)) {
		chequeo = true;
	}
	//Por si el usuario no escribe nada, sólo hace espacios o saltos de línea y presiona encriptar
	else {
		alert("Es necesario ingresar un mensaje para encriptar/desencriptar.");
		chequeo = false;
		limpiar();
	}
}


/*function encriptar() {
	var texto = document.getElementById("texto1").value;
	chequearTexto();
	if (chequeo == true) {
		let texto1 = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
		document.getElementById("texto2").value = texto1;
		document.getElementById("texto1").value = "";
		document.getElementById("label2").textContent = "Mensaje encriptado:";
	}
}

function desencriptar () {
	var texto = document.getElementById("texto1").value;
	chequearTexto();
	if (chequeo == true) {
		let texto1 = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
		document.getElementById("texto2").value = texto1;
		document.getElementById("texto1").value = "";
		document.getElementById("label2").textContent = "Mensaje desencriptado:";
	}
}

function copiar () {
	var mensaje = document.getElementById("texto2");
	if (mensaje.value == "") {
		alert("No hay mensaje para copiar.");
	}
	else {
		mensaje.select();
		navigator.clipboard.writeText(mensaje.value);
		alert("Mensaje copiado.");
	}
	
}

function limpiar() {
	document.getElementById("texto1").value = "";
	document.getElementById("texto2").value = "";
	document.getElementById("label2").textContent = "Mensaje:";
}



/*function encriptar(){


          
    if(texto.match(upperCase)||texto.match(specialCharacters)){
        alert("No se permiten caracteres especiales ni mayusculas");
        return true; 
    }else if(texto==empty){
       alert("Ingrese un mensaje para encriptar");
        return true;
   }else {
        return false;
    }
}

/*let texto = document.getElementById("texto").value;
    let specialCharacters = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/g;
    let upperCase = (character == character.toLowerCase())/g;
    let empty=""/g;
}*/
