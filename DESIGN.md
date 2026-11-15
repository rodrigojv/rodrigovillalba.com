# Design

## Mundo
La estación de trabajo de Swan vista de frente: monitor y teclado beige (plástico de Apple II Plus) sobre una pared verde institucional. El fósforo verde existe solo dentro de la pantalla. Lo que se lee largo (About, Blog, posts) va en papel continuo con perforaciones y franjas verdes, no en la pantalla.

## Color
- Pared `#26302a` (verde carbón con grano fino y viñeta), plástico `#d9d0b7`, tecla `#ebe4cf`, tecla oscura `#34322d`, tecla EXECUTE `#b5412a`.
- Pantalla `#020603`, fósforo `#63ff7d` con resplandor `rgb(87 255 117 / 0.45)`, fósforo atenuado `#48b85a` (valores tomados del pen de referencia).
- Papel `#f6f2e4`, franja `#e6efdc`, tinta `#1d1b17`, tinta atenuada `#55503f`. Foco `#e0541f`.

## Tipografía
- VT323: pantalla y metadatos de máquina.
- Barlow Condensed 600/700: legendas de teclas, nombre, títulos.
- Literata: cuerpo de lectura, 18px a 20px, medida 68ch.
- Código en la pila monoespaciada del sistema, sobre bloque tipo pantalla.

## Componentes
- Teclas: la navegación. Teclas oscuras son destinos y enlaces externos, la clara es la página actual (en verde atenuado).
- Home: tres preguntas en la pantalla, cada respuesta es un link. EXECUTE repite la carga; es el único control sin destino.
- Rótulo con el nombre a la derecha del monitor; en móvil pasa arriba.
- Páginas de lectura: riel de teclas a la izquierda, papel a la derecha. En móvil el riel pasa a una fila de teclas sobre el papel.

## Movimiento
Las líneas de la pantalla aparecen en secuencia una vez al cargar. El cursor parpadea. Las teclas se hunden al pulsarlas. Todo se apaga con `prefers-reduced-motion`.

## Límites
Sin marcas ni logotipos de Apple ni de Dharma. Sin sonido ni "system failure". El reloj de 108 minutos solo aparece tras el easter egg y no provoca nada al llegar a cero.
