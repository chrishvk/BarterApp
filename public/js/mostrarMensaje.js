export function mostrarMsj(mensaje, tipo = 'success') {
    Toastify({
        text: mensaje,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: tipo === 'success' ? 'green' : 'red',
        },
        onClick: function(){} // Callback after click
    }).showToast();

}