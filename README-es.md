<p align="center">
  <img src="img/default.jpg?raw=true">
</p>

# Papercraft Font JS

Papercraft Font JS es un mini proyecto de JavaScript que convierte una cadena de caracteres en la fuente basada en Papercraft creada por [jxnblk](https://github.com/jxnblk/papercraft).<br/>
También puede colorear las letras, ajustar el tamaño de la fuente, establecer el espacio entre las letras.<br/>
El código fue escrito en Javascript puro, sin necesidad de marcos o bibliotecas adicionales.

## Ejemplo

[Haga clic aquí para acceder a la página de muestra del proyecto.](https://victorjean9.github.io/papercraft-font-js/)

## Tutorial em outras linguagens:

- [English](https://github.com/victorjean9/papercraft-font-js)
- [Español](https://github.com/victorjean9/papercraft-font-js/blob/main/README-es.md)
- [Português Brasileiro](https://github.com/victorjean9/papercraft-font-js/blob/main/README-ptbr.md)

## Instalación

Agregue los archivos `papercraft-font.js` y `papercraft-font.css` en su proyecto y realice las importaciones necesarias.

Ejemplo de importación:
```html
// Importando el archivo CSS: papercraft-font.css
<link rel="stylesheet" href="css/papercraft-font.css" />

// Importando el archivo Javascript: papercraft-font.js
<script src="js/papercraft-font.js"></script>
```

No es necesario importar ninguna biblioteca adicional, como JQuery, por ejemplo. El código fue escrito en Javascript puro.

## Utilizar

### Básico

Primero, debe crear una nueva instancia de la clase `PapercraftFont` pasando el ID de un elemento en particular como parámetro.<br/>
El elemento puede ser cualquier etiqueta `<div>`, `<span>`, `<p>` y etc.

Por ejemplo, a continuación se muestra una etiqueta `<div>`con el ID "papercraft-pool":
```html
<div id="papercraft-pool"></div>
```

Este ID debe pasarse como parámetro de la instancia que se creará:
```js
var papercraftFont = new PapercraftFont("papercraft-pool");
```

Para convertir una cadena de caracteres a la fuente Papercraft, simplemente llame a la función `text` pasando el texto a convertir como parámetro.
```js
papercraftFont.text("insertar texto aquí")
```

### Colorear las letras

Puede colorear las letras definiendo un color primario y un color secundario.<br/>
El color primario es responsable del anverso de la letra y el color secundario del reverso.

Hay dos formas de definir colores:

El primero es pasar como parámetro al crear la instancia:
```js
var papercraftFont = new PapercraftFont(elementID, colorPrimario, colorSecundario);
```

La segunda forma es pasar cada color a través de las funciones `setPrimaryColor` y `setSecondaryColor`:
```js
papercraftFont.setPrimaryColor("#33A951");
papercraftFont.setSecondaryColor("#43D068");
```

<p align="center">
  <img src="img/green.jpg?raw=true">
</p>
 
#### Tema oscuro

La fuente también tiene un tema oscuro. Simplemente llame a la función `dark`:
```js
papercraftFont.dark();
```

<p align="center">
  <img src="img/dark.jpg?raw=true">
</p>

### Definición de un tamaño de fuente

Para definir un tamaño de fuente, simplemente llame a la función `setFontSize` pasando el tamaño como parámetro.<br/>
El tamaño puede estar en px, em, % o cualquier otro valor aceptable en CSS.

```js
papercraftFont.setFontSize("2.5em");
```

### Definición de espaciado

Para definir el espaciado, simplemente llame a la función `setSpacing` pasando el valor del espaciado como parámetro.<br/>
El tamaño puede estar en px, em, % o cualquier otro valor aceptable en CSS.

```js
papercraftFont.setSpacing("1em");
```

## Créditos

Código escrito por [Victor Jean](https://github.com/victorjean9).<br/>
Este proyecto fue creado en base al código fuente CSS Papercraft creado por [jxnblk](https://github.com/jxnblk/papercraft).

## Licencia

[MIT License](http://opensource.org/licenses/MIT)


