<p align="center">
  <img src="img/default.jpg?raw=true">
</p>

# Papercraft Font JS

Papercraft Font JS is a javascript mini project that converts a defined string to the Papercraft-based font created by [jxnblk](https://github.com/jxnblk/papercraft).<br/>
You can also color the letters, adjust the font size, set the spacing between the letters.<br/>
The code was written in pure Javascript, with no need for additional Frameworks or Libraries.

## Example

[Click here to access the project's sample page.](https://victorjean9.github.io/papercraft-font-js/)

## This tutorial in other languages:

- [English](https://github.com/victorjean9/papercraft-font-js)
- [Español](https://github.com/victorjean9/papercraft-font-js/blob/main/README-es.md)
- [Português Brasileiro](https://github.com/victorjean9/papercraft-font-js/blob/main/README-ptbr.md)

## Installation

Add the files `papercraft-font.js` and `papercraft-font.css` in your project and make the necessary imports.

Import example:
```html
// Importing the CSS file: papercraft-font.css
<link rel="stylesheet" href="css/papercraft-font.css" />

// Importing the Javascript file: papercraft-font.js
<script src="js/papercraft-font.js"></script>
```

It is not necessary to import any additional library, like JQuery for example. The code was written in pure Javascript.

## Use

### Basic

First, you must create a new instance of the class `PapercraftFont` passing the ID of a particular element as a parameter.<br/>
The element can be any tag `<div>`, `<span>`, `<p>` and etc.

For example, below is a tag `<div>` with the ID "papercraft-pool":
```html
<div id="papercraft-pool"></div>
```

This ID must be passed as a parameter of the instance to be created:
```js
var papercraftFont = new PapercraftFont("papercraft-pool");
```

To convert a character string to the Papercraft font, just call the function `text` passing the text to be converted as a parameter.
```js
papercraftFont.text("insert text here")
```

### Coloring the letters

You can color the letters by defining a primary color and a secondary color.<br/>
The primary color is responsible for the front of the letter, and the secondary color for the back.

There are two ways to define colors:

The first is passing as a parameter when creating the instance:
```js
var papercraftFont = new PapercraftFont(elementID, primaryColor, secondaryColor);
```

The second way is to pass each color through the functions `setPrimaryColor` and `setSecondaryColor`:
```js
papercraftFont.setPrimaryColor("#33A951");
papercraftFont.setSecondaryColor("#43D068");
```

<p align="center">
  <img src="img/green.jpg?raw=true">
</p>
 
#### Dark Theme

The font also has a dark theme. Just call the function `dark`:
```js
papercraftFont.dark();
```

<p align="center">
  <img src="img/dark.jpg?raw=true">
</p>

### Defining a font size

To define a font size, just call the function `setFontSize` passing the size as a parameter.<br/>
The size can be in px, em, % or any other acceptable value in CSS.

```js
papercraftFont.setFontSize("2.5em");
```

### Defining spacing

To define the spacing, just call the function `setSpacing` passing the spacing value as a parameter.<br/>
The size can be in px, em, % or any other acceptable value in CSS.

```js
papercraftFont.setSpacing("1em");
```

## Credits

Code written by [Victor Jean](https://github.com/victorjean9).<br/>
This project was created based on the CSS Papercraft code created by [jxnblk](https://github.com/jxnblk/papercraft).

## License

[MIT License](http://opensource.org/licenses/MIT)


