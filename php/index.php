<?php
   echo "Hola mundo 🗺️";
?>

<?= "Me llamo Jesús" ?>

<?php
   //variables
   $nombre = "Jesús";
   $fecha_nacimiento = "2004-10-22";
   $altura = 1.71;
   $estado_civil = "soltero";

   //constantes
   define("PI", 3.14159265358979323846);
?>

<h1><?= $nombre ?></h1>

<h3><?= $fecha_nacimiento->format("d-m-y h:i:s"); ?></h3>