    (function() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Verificar si el User-Agent contiene la cadena específica
        if (!/CustomApp\/1\.0/i.test(userAgent)) {
            // Si no contiene la cadena, redirige a Google
            window.location.href = "https://www.google.com";
        }
    })();

