<?php
   include_once "header.php";
?>

<?php if(isset($_GET) && $_GET['error']): ?>
   <article>
      <?php
      switch ($_GET['error']) {
         case 1:
            echo "⨉ Todos los campos son requeridos";
         break;
         case 2:
            echo "⨉ La edad debe ser número y mayor de 18";
         break;
         case 3:
            echo "⨉ El correo electrónico no es válido";
         break;
      }
      ?>
   </article>
<?php endif; ?>

<form action="procesa.php" method="post">
   <fieldset>
      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre" required>
   </fieldset>
   <fieldset>
      <label for="edad">Edad</label>
      <input type="number" id="edad" name="edad" min="1">
   </fieldset>
   <fieldset>
      <label for="correo">Correo electrónico</label>
      <input type="text" id="correo" name="correo" required>
   </fieldset>
   <fieldset>
      <button type="submit">
         <i class="ph ph-paper-plane-right"></i>
         Enviar
      </button>
   </fieldset>
</form>

<?php
   include_once "footer.php";
?>