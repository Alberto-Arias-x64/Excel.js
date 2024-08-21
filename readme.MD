# Proyecto: Hoja de Cálculo en JavaScript

Este proyecto es una implementación de una hoja de cálculo simple utilizando JavaScript. Permite realizar operaciones básicas y evaluar expresiones dentro de las celdas, similar a cómo funcionan las fórmulas en Excel.

## Características

- **Filas y columnas**: Se puede interactuar con una tabla de 30 filas y 10 columnas.
- **Fórmulas**: Las celdas pueden contener expresiones que comienzan con `=` y serán evaluadas automáticamente (por ejemplo, `=1+2` mostrará `3`).
- **Selección**: Permite seleccionar filas y columnas completas.
- **Edición en celdas**: Se puede hacer clic en una celda para editar su contenido.
- **Borrado**: Puedes borrar el contenido de una fila o columna seleccionada usando la tecla `Backspace`.
- **Copia al portapapeles**: Puedes copiar el contenido de una fila o columna seleccionada al portapapeles.

## Cómo usarlo

1. Descarga o clona el repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Interactúa con la tabla: haz clic en una celda para editarla o selecciona filas/columnas haciendo clic en los encabezados.

## DEMO
https://alberto-arias-x64.github.io/Excel.js/

## Ejemplos de uso

- **Insertar texto**: Haz clic en cualquier celda e introduce texto o números.
- **Insertar fórmulas**: Las fórmulas deben comenzar con el carácter `=`. Ejemplo: `=1+2` o `=A1+B2` (siendo `A1` la celda en la primera columna y primera fila).
- **Seleccionar una columna**: Haz clic en el encabezado de una columna para seleccionarla. Se aplicará una clase CSS que resalta la selección.
- **Seleccionar una fila**: Haz clic en el número de la fila para seleccionarla.

## Tecnologias
- **HTML**: Para la estructura de la página.
- **CSS**: Para los estilos básicos de la tabla.
- **JavaScript**: Para la lógica interactiva y las operaciones dentro de la tabla.

## Contribuciones
Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes hacerlo mediante la creación de issues o pull requests en el repositorio.

## Licencia
Este proyecto está bajo la [Licencia MIT](https://mit-license.org).