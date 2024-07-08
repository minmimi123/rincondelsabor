document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dni = document.getElementById('dni').value;
    const correo = document.getElementById('correo').value;

    const dniRegex = /^\d{8}$/;
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre && apellido && dniRegex.test(dni) && correoRegex.test(correo)) {
        alert('Datos ingresados con éxito');
    } else {
        alert('Datos Incorrectos, por favor revise los datos ingresados');
    }
});