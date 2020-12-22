<p align="center">
  <img src="img/default.jpg?raw=true">
</p>

# Papercraft Font JS

Papercraft Font JS é um mini projeto em javascript que converte uma cadeia de caracteres definida para a fonte baseada em Papercraft criada por [jxnblk](https://github.com/jxnblk/papercraft).<br/>
Você também pode colorir as letras, ajustar o tamanho da fonte, definir o espaçamento entre as letras.<br/>
O código foi escrito em Javascript puro, sem necessidade de Frameworks ou Bibliotecas adicionais.

## Exemplo

[Clique aqui para acessar a página de exemplo do projeto.](https://victorjean9.github.io/papercraft-font-js/)

## Instalação

Adicione os arquivos `papercraft-font.js` e `papercraft-font.css` no seu projeto e faça as importações necessárias.

Exemplo de importação:
```html
// Importação do aquivo CSS: papercraft-font.css
<link rel="stylesheet" href="css/papercraft-font.css" />

// Importação do aquivo Javascript: papercraft-font.js
<script src="js/papercraft-font.js"></script>
```

Não é necessária a importação nenhuma bibliteca adicional, como o JQuery por exemplo. O código foi escrito em Javascript puro.

## Uso

### Básico

Primeiramente você deve criar uma nova instância da classe `PapercraftFont` passando o ID de um determinado elemento como parâmetro.<br/>
O elemento pode ser qualquer tag `<div>`, `<span>`, `<p>` e etc.

Por exemplo, abaixo temos uma tag `<div>`com o ID "papercraft-pool":
```html
<div id="papercraft-pool"></div>
```

Deve-se passar esse ID como parâmetro da instância a ser criada:
```js
var papercraftFont = new PapercraftFont("papercraft-pool");
```

Para converter uma cadeia de caracteres para a fonte Papercraft basta chamar a função `text` passando o texto a ser convertido como parâmetro.
```js
papercraftFont.text("insira aqui um texto")
```

### Colorindo as letras

Você pode colorir as letras definindo uma cor primária e uma cor secundária.<br/>
A cor primária é responsável pela parte frontal da letra, e a cor secundária pela parte de trás.

Há duas formas de definir as cores: 

A primeira é passando como parâmetro no momento da criação da instância:
```js
var papercraftFont = new PapercraftFont(elementID, corPrimaria, corSecundaria);
```

A segunda forma é passando cada cor através das funções `setPrimaryColor` e `setSecondaryColor`:
```js
papercraftFont.setPrimaryColor("#33A951");
papercraftFont.setSecondaryColor("#43D068");
```

<p align="center">
  <img src="img/green.jpg?raw=true">
</p>
 
#### Tema Escuro

A fonte também possui um tema escuro. Basta chamar a função `dark`:
```js
papercraftFont.dark();
```

<p align="center">
  <img src="img/dark.jpg?raw=true">
</p>

### Definindo um tamanho para a fonte

Para definir um tamanho para a fonte basta chamar a função `setFontSize` passando o tamanho como parâmetro.<br/>
O tamanho pode ser em px, em, % ou qualquer outro valor aceitável em CSS.

```js
papercraftFont.setFontSize("2.5em");
```

### Definindo o espaçamento

Para definir o espaçamento basta chamar a função `setSpacing` passando o valor do espaçamento como parâmetro.<br/>
O tamanho pode ser em px, em, % ou qualquer outro valor aceitável em CSS.

```js
papercraftFont.setSpacing("1em");
```

## Créditos

Código escrito por [Victor Jean](https://github.com/victorjean9).<br/>
Esse projeto foi criado com base no código CSS da fonte Papercraft criado por [jxnblk](https://github.com/jxnblk/papercraft).

## Licença

[MIT License](http://opensource.org/licenses/MIT)


