<?php
// Encabezados para manejar solicitudes CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: X-Requested-With");

// Obtener el identificador de la URL
$identificador = isset($_GET['id']) ? $_GET['id'] : '';

// Cargar y decodificar el contenido del archivo JSON
$jsonData = file_get_contents('https://elsosguar.online/P/datos.json');
$capitulos = json_decode($jsonData, true);

if (!empty($identificador)) {
    $capitulosRelacionados = [];

    // Comienzo de la sección y el div que contendrá los capítulos
    echo "<section class='elkdqqz9t'>";
    echo "<header class='optqlzw5d'>";
    echo "<h2 class='yndtulaqi'>Opción 1 (Rapido) ►CliCK◄</h2>";
    echo "</header>";
    echo "<div class='btflpqdcd'>";

   foreach ($capitulos as $capituloID => $link) {
    if (strpos($capituloID, $identificador) !== false) {
        $capitulosRelacionados[$capituloID] = $link;

        // Extraer el número del capítulo del identificador
        // Asumiendo que el formato siempre es 'La-Nina-op-1-Cap-X'
        $partes = explode('-', $capituloID);
        $numeroCapitulo = end($partes); // Obtiene la última parte (X)
        $tituloCapitulo = "Capitulo " . $numeroCapitulo; // Reformatea el título

        // Mostrar los detalles de cada capítulo
        echo "<article class='maqdjlotv' data-titulo='$capituloID' data-link='$link'>";
        echo "<div class='sdxlltkqd'>";
        echo "<figure class='wloutqdqj'></figure>";
        echo "<header class='rqkl3tdnu'>";
        echo "<h3 class='glvqomuld'>$tituloCapitulo</h3>"; // Usa el título reformateado
        echo "</header>";
        echo "</div>";
        echo "</article><br>";
    }
}

    // Cierre del div y de la sección
    echo "</div>";
    echo "</section>";
} else {
    echo "El identificador no se ha especificado en la URL.";
}
?>
