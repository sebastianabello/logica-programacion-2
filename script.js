function convertirTemperatura() {
    // Obtener la temperatura en grados Celsius desde el input
    const celsiusInput = document.getElementById("celsius");
    const celsius = parseFloat(celsiusInput.value);

    // Verificar si la entrada es un número
    if (isNaN(celsius)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    // Realizar las conversiones
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    // Mostrar los resultados en el DOM
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `
        <p>Temperatura en grados Fahrenheit: ${fahrenheit.toFixed(2)}°F</p>
        <p>Temperatura en Kelvin: ${kelvin.toFixed(2)}K</p>
    `;
}
