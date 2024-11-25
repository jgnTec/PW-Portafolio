<?php
   $titulo = "Gestor de usuarios";
   $items = [
      [
         "nombre" => "Jesús García",
         "edad" => 22,
         "correo" => "jgn1022@gmail.com"
      ],
      [
         "nombre" => "Juan Carlos",
         "edad" => 23,
         "correo" => "juan.carlos@gmail.com"
      ],
      [
         "nombre" => "Pedro",
         "edad" => 24,
         "correo" => "pedro@gmail.com"
      ]
   ];
   include_once "header.php";
?>
<article>
   <h2>Lista de usuarios</h2>
   <a href="formulario.php" role="button">Nuevo usuario</a>
   <?php if(isset($_GET) && $_GET['ok']==1): ?>
      <article>
         ✅ Nuevo usuario guardado con éxito 
      </article>
   <?php endif; ?>
   <div class="overflow-auto">
      <table class="table">
         <thead>
            <tr>
               <th>Nombre</th>
               <th>Edad</th>
               <th>Correo electrónico</th>
               <th>
                  <i class="ph ph-gear-six"></i>
               </th>
            </tr>
         </thead>
         <tbody>
            <?php foreach ($items as $item): ?>
               <tr>
                  <td><?= $item['nombre'] ?></td>
                  <td><?= $item['edad'] ?></td>
                  <td><?= $item['correo'] ?></td>
                  <td>Opciones aquí</td>
               </tr>
            <?php endforeach; ?>
         </tbody>
      </table>
   </div>
</article>
<?php
   include_once "footer.php";
?>