// Función para agregar un valor al campo de texto del display
function appendToDisplay(value) {
    document.getElementById('display').value += value; // Agrega el valor al final de lo que ya está en el display
}

// Función para limpiar el campo de texto del display
function clearDisplay() {
    document.getElementById('display').value = ''; // Borra todo el contenido del display
}

// Función para eliminar el último carácter del campo de texto del display
function deleteLast() {
    document.getElementById('display').value = displayValue.slice(0, -1); // Elimina el último carácter del texto en el display
}

// Función para calcular y mostrar el resultado de la expresión en el display
function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value); // Evalúa la expresión ingresada en el display
        document.getElementById('display').value = result; // Muestra el resultado en el display
    } catch (error) {
        alert('Expresión inválida'); // Muestra una alerta si la expresión no es válida
    }
}