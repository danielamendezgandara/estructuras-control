// Función que valida el nombre 
function validarNombre(nombre){
  const simboloRegex = /[!@#$%^&*(),.?":{}|<>]/; 
  const numeroRegex  = /[0-9]/;

  if (nombre.trim() === ""){
    throw new Error("El nombre está en blanco.");
  }else if(simboloRegex.test(nombre)){
    throw new Error("El nombre no puede contener caracteres especiales.");
  }else if(numeroRegex.test(nombre)){
    throw new Error("El nombre no puede contener números.");
  } else if(!(nombre[0] === nombre[0].toUpperCase())){
    throw new Error("La primera letra del nombre no es mayúscula.");
  }
   return "✅ Nombre válido.";

}
// Constantes con distintos casos
const nombreEnBlanco = "";
const nombreConSimbolo = "Maria##";
const nombreConNumero  = "Carlos345";
const nombreConMinuscula = "paula";
const nombreValido = "Carmen";

// Pruebas (try/catch)
console.log("==== Pruebas de validación de nombre ==== \n");
// 1. Prueba nombre en blanco
try { console.log(`Nombre: ${nombreEnBlanco}`);console.log(validarNombre(nombreEnBlanco)); } catch (e) { console.error("❌", e.message); } // Nombre en blanco
// 2. Prueba nombre con caracteres especiales
try { console.log(`Nombre: ${nombreConSimbolo}`); console.log(validarNombre(nombreConSimbolo)); } catch (e) { console.error("❌", e.message); } // Nombre con caracteres especiales
// 3. Prueba nombre con números
try { console.log(`Nombre: ${nombreConNumero}`); console.log(validarNombre(nombreConNumero)); } catch (e) { console.error("❌", e.message); } // Nombre con números
// 4. Prueba nombre con letra minúscula al principio
try { console.log(`Nombre: ${nombreConMinuscula}`); console.log(validarNombre(nombreConMinuscula)); } catch (e) { console.error("❌", e.message); } // Nombre en blanco
// 5. Prueba con nombre válido
try { console.log(`Nombre: ${nombreValido}`); console.log(validarNombre(nombreValido)); } catch (e) { console.error("❌", e.message); } // Nombre válido

// Función  que valida el  email
function validarEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) throw new Error("El email no es válido.");
    return "✅ Email válido."
}

// Pruebas (try/catch)
const emailValido = "daniela@example.com" ;
const emailInvalido = "daniela@.com";

console.log("\n==== Pruebas de validación de email ==== \n");
try { console.log(`Email: ${emailValido} `); console.log(validarEmail(emailValido)); } catch (e) { console.error("❌", e.message); } // Válido
try { console.log(`Email: ${emailInvalido}`); console.log(validarEmail(emailInvalido)); } catch (e) { console.error("❌", e.message); } // No válido

// Función para validar la edad 
function validarEdad(edad){
  if (typeof edad !== "number") {
    throw new TypeError("La edad debe ser un número.");
  }
  if (edad < 0) {
    throw new RangeError("La edad no puede ser negativa.");
  }
  if (edad <18 || edad > 99) {
    throw new RangeError("La edad fuera del rango de 18 a 99 años.");
  }
   return "✅ Edad válida.";
}

// Pruebas (try/catch)
console.log("\n==== Pruebas de validación de edad ==== \n");
// Edad mayor a 99
try {
  validarEdad(120);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Error de tipo:", error.message);
  } else if (error instanceof RangeError) {
    console.log("Error de rango:", error.message);
  }
}
// Edad negativa
try {
  validarEdad(-10);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Error de tipo:", error.message);
  } else if (error instanceof RangeError) {
    console.log("Error de rango:", error.message);
  }
}
// Edad dentro del rango
try {
  validarEdad(20);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Error de tipo:", error.message);
  } else if (error instanceof RangeError) {
    console.log("Error de rango:", error.message);
  }
}

// Función que valida la contraseña para que sea segura 
function validarPassword(password) {
  const simboloRegex = /[!@#$%^&*(),.?":{}|<>]/; // clase de símbolos
  const mayusRegex   = /[A-Z]/;
  const minusRegex   = /[a-z]/;
  const numeroRegex  = /[0-9]/;

  let totalLetraMayuscula = 0;
  let totalLetraMinuscula = 0;
  let totalNumeros = 0;
  let totalSimbolos = 0;

  if (password.length < 10) {
    throw new Error("La contraseña es menor de 10 caracteres");
  }

  // Recorremos y clasificamos con regex por carácter
  for(let char of password) {
    if (mayusRegex.test(char)) {
      totalLetraMayuscula++;
    } else if (minusRegex.test(char)) {
      totalLetraMinuscula++;
    } else if (numeroRegex.test(char)) {
      totalNumeros++;
    } else if (simboloRegex.test(char)) {
      totalSimbolos++;
    } else {
      // Otros caracteres (espacios, etc.) no suman
    }
  }

  const tieneMayuscula = totalLetraMayuscula > 0;
  const tieneMinuscula = totalLetraMinuscula > 0;
  const tieneNumero    = totalNumeros > 0;
  const tieneSimbolo   = totalSimbolos > 0; // ahora sí contamos símbolos reales

  // Debug opcional
  // console.log({ totalLetraMayuscula, totalLetraMinuscula, totalNumeros, totalSimbolos });

  if (!tieneMayuscula) throw new Error("La contraseña debe contener al menos una letra mayúscula.");
  if (!tieneMinuscula) throw new Error("La contraseña debe contener al menos una letra minúscula.");
  if (!tieneNumero)    throw new Error("La contraseña debe contener al menos un número.");
  if (!tieneSimbolo)   throw new Error("La contraseña debe contener al menos un símbolo.");

  return "✅ Contraseña segura.";
}

// Pruebas ( try/catch)
const passwordValida = "Hola123M90!";
const passwordInvalida ="HolammPoyu0"; 
console.log("\n==== Pruebas de validación de contraseña ====\n");
try { console.log(`Password: ${passwordInvalida}`); console.log(validarPassword(passwordInvalida)); } catch (e) { console.error("❌", e.message); } // Falta símbolo
try { console.log(`Password: ${passwordValida}`); console.log(validarPassword(passwordValida));} catch (e) { console.error("❌", e.message); } // OK

// Función que valida los siguientes campos de un formulario :
// nombre, email,edad y contraseña segura.
function validarFormulario(campos){
    let todoValido = true; // bandera general
    // Se arma el objeto formulario desde el array
    let formulario = {
        "Nombre" : campos[0],
        "Email"  : campos[1],
        "Edad"   : campos[2],
        "Contraseña" : campos[3]
    }
    console.log("\nFormulario ingresado:\n");
    for (const [clave, valor] of Object.entries(formulario)) {
        console.log(`${clave}: ${valor}`);
    }
    // Validaciones 
    try { console.log(validarNombre(campos[0])); } catch (e) { console.error("❌", e.message); todoValido = false; } 
    try { console.log(validarEmail(campos[1])); } catch (e) { console.error("❌", e.message);  todoValido = false;} 
    try { console.log(validarEdad(campos[2])); } catch (e) { console.error("❌", e.message);   todoValido = false; } 
    try { console.log(validarPassword(campos[3])); } catch (e) { console.error("❌", e.message); todoValido = false; } 

    console.log("\n📄 Resultado final:");
    if (todoValido) {
        console.log("✅ Formulario válido.");
    } else {
    console.log("❌ Formulario inválido,corregir campos inválidos.");
    }
} 

//  === Ejemplos de prueba ===
let formularioInvalido = ["Daniela8","danimendez@.com",35,"jul34ER056"]
validarFormulario(formularioInvalido);
let formularioValido = ["Daniela","danimendez@hotmail.com",35,"jul34ER056%&"]
validarFormulario(formularioValido);
