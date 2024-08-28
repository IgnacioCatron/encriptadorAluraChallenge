function encriptarTexto() {
  // Obtener el texto ingresado por el usuario desde el elemento con id "textoBase"
  let ingreso = document.getElementById("textoBase").value;
  
  // Definir las llaves de encriptación
  const llaves = {
      'e': 'enter',
      'i': 'imes',
      'a': 'ai',
      'o': 'ober',
      'u': 'ufat'
  };

  // Inicializar la variable para almacenar el texto encriptado
  let textoEncriptado = '';

  // Recorrer cada carácter del texto ingresado
  for (let i = 0; i < ingreso.length; i++) {
      const caracter = ingreso[i];
      // Si el carácter está en las llaves, agregar su valor correspondiente
      // Si no, agregar el carácter original
      textoEncriptado += llaves[caracter] || caracter;
  }

  // Mostrar el texto encriptado en el elemento con id "cajaTextoEncriptado"
  document.getElementById("cajaTextoEncriptado").value = textoEncriptado;
  document.getElementById("mensaje").style.display="none";
  document.getElementById("cajaTextoEncriptado").style.display="block";
}

function desencriptarTexto() {
  // Obtener el texto encriptado del elemento con id "textoBase"
  let textoEncriptado = document.getElementById("textoBase").value;

  // Definir las llaves inversas de desencriptación
  const llavesInversas = {
      'enter': 'e',
      'imes': 'i',
      'ai': 'a',
      'ober': 'o',
      'ufat': 'u'
  };

  // Inicializar la variable para almacenar el texto desencriptado
  let textoDesencriptado = textoEncriptado;

  // Reemplazar cada patrón de encriptación con su letra original
  for (const [key, value] of Object.entries(llavesInversas)) {
      // Crear una expresión regular para buscar todas las ocurrencias del patrón
      const regex = new RegExp(key, 'g');
      // Reemplazar el patrón con la letra original
      textoDesencriptado = textoDesencriptado.replace(regex, value);
  }

  // Mostrar el texto desencriptado en el elemento con id "cajaTextoEncriptado"
  document.getElementById("cajaTextoEncriptado").value = textoDesencriptado;
}

function copiarTexto() {
  // Obtener el elemento del área de texto con id "cajaTextoEncriptado"
  const textoEncriptado = document.getElementById("cajaTextoEncriptado");

  // Seleccionar el texto
  textoEncriptado.select();
  textoEncriptado.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Copiar el texto al portapapeles
  document.execCommand("copy");

  // Alertar al usuario que el texto ha sido copiado
  alert("Texto copiado: " + textoEncriptado.value);
}