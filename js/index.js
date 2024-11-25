// Seleccionar todos los <li> que contienen un <a>
document.querySelectorAll('ul > li:has(a), ol > li:has(a)').forEach(li => {
   // Crear el elemento <i> con la clase del ícono
   const icon = document.createElement('i');
   icon.className = 'ph ph-arrow-square-out';
   icon.style.marginRight = '8px';

   // Insertar el ícono al principio del contenido del <li>
   li.prepend(icon);
});
