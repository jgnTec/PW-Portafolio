<?php
   $nombre = "Jesús García"
?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Plantilla PHP</title>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.jade.min.css">
</head>
<body>
   <main class="container">
      <article>
         <p>Hola, me llamo <?= $nombre ?></p>
      </article>
   </main>
</body>
</html>