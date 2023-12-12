
# Portfólio José Carlos Rodrigues Filho


[Portifolio Mobile](img/mobile-portifolio.png)

[Portifolio Desktop](img/desktop-portifolio.png)

## Menu

- [Projeto Portfólio](#projeto-portfolio)
  - [Menu](#menu)
    - [Apresentação](#apresentação)
    - [Objetivo](#objetivo)
    - [Deploy](#deploy)
    - [Techs utilizadas](#techs-utilizadas)
    - [O que aprendeu](#o-que-aprendeu)
      - [JS](#js)
    - [CSS](#css)
    - [Status](#status)



### Apresentação

- Portfólio profissional com links das redes socias e publicação dos principais projetos, ainda conta com uma seção sobre mim e currículum.

### Objetivo

Aplicar a linguagem de marcação de texto HTML5 e utilizar o cascating sheet style, mais conhecido como folhas de estilos em cascatas (CSS3). Utilizar a terminologia BEM(Block Element Modifier), utilizar as propriedades dos estilos CSS3, utilizar as tags semânticas HTML5. saiba mais em: [O que aprendeu](#O-que-aprendeu)

### Deploy

- Link : <a href="https://josecarlos-portifolio.vercel.app/" target="_blank">Portfólio José Carlos</a>

### Techs utilizadas

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">

### O que aprendeu

### HTML5

 - **HTML (HyperText Markup Language)** não é uma linguagem de programação, é uma linguagem de marcação utilizada para dizer ao seu navegador como estruturar a página web que você visita. A página pode ser tanto complicada como simples quanto o desenvolvedor web desejar que seja. HTML consiste em uma série de elementos que você usa para anexar, envolver ou marcar diferentes partes do conteúdo para que apareça ou aja de uma certa maneira. O fechamento das tags pode transformar uma parte do conteúdo dentro do elemento em um link para direcionar à uma outra página web, colocar as palavras em itálico, e assim por diante. 
 Referência: [MDN](https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Getting_started)

  - O **BEM** é uma metodologia CSS que significa Bloco, Elemento e Modificador. É uma convenção de nomenclatura que ajuda os desenvolvedores a criar código CSS reutilizável e fácil de manter. A metodologia BEM é baseada na ideia de dividir a interface do usuário em blocos independentes, que podem ser reutilizados em todo o site. Cada bloco consiste em um ou mais elementos, que são as partes do bloco que executam uma função específica. Os modificadores são usados para modificar a aparência ou o comportamento dos blocos e elementos.
  Referência: [CSS-TRICKS](https://css-tricks.com/bem-101/)

  - O BEM é amplamente utilizado na comunidade de desenvolvimento web e tem muitas vantagens, incluindo melhor manutenção de código, melhor escalabilidade e colaboração mais fácil entre desenvolvedores. Também é compatível com outras tecnologias front-end, como Sass.
  Referência: [GETBEM](https://getbem.com/)

### CSS

- Variáveis: Variáveis CSS são entidades definidas por desenvolvedores, contendo valores específicos para serem reutilizados ao longo do documento. São configuradas usando esta notação (ex: --cor-principal: black; ) e são acessadas usando a funcão var() (ex: color: var(--cor-principal); )

- Websites complexos tem uma quantidade muito grande de CSS, com uma quantidade de repetição de valores muito frequente. Por exemplo, a mesma cor pode ser usada em centenas de lugares diferentes, requerindo uma pesquisa global e substituição caso esta cor necessite ser trocada. Variáveis CSS permite um valor ser guardado em um lugar, então ser referenciado em muitos outros lugares. Um benefício adicional é a semântica dos identificadores. Por exemplo --cor-principal-texto é mais facil de ser entendido do que #00ff00, especialmente se esta cor também é usada em outro contexto.

- Variáveis CSS estão sujeitas ao efeito cascata do css e herdam seus valores de seus pais. [fonte](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_custom_properties#valores_de_fallback_da_propriedade_customizada)


#### JS

- **classList.contains()** é um método JavaScript que verifica se a lista de classes de um elemento contém uma classe específica. Ele retorna true se a classe estiver presente e false caso contrário.
##### Exemplo:
```
<!DOCTYPE html>
<html>
<body>

<div id="myDiv" class="myClass"></div>

<script>
var div = document.getElementById("myDiv");
if (div.classList.contains("myClass")) {
  console.log("The class is present.");
} else {
  console.log("The class is not present.");
}
</script>

</body>
</html>
```

- Referência: [stackoverflow](https://stackoverflow.com/questions/27566132/how-exactly-does-element-classlist-contains-work-in-javascript).


- **classList.remove()** é um método JavaScript que remove uma classe específica da lista de classes de um elemento. Retorna undefined.
  

##### Exemplo
```
<!DOCTYPE html>
<html>
<body>

<div id="myDiv" class="myClass"></div>

<script>
var div = document.getElementById("myDiv");
div.classList.remove("myClass");
</script>

</body>
</html>
```

- Referência: [stackoverflow](https://stackoverflow.com/questions/15040297/clear-element-classlist)


- **classList.add()** é um método JavaScript que adiciona uma ou mais classes à lista de classes de um elemento. Retorna undefined.
  
##### Exemplo
```
<!DOCTYPE html>
<html>
<body>

<div id="myDiv"></div>

<script>
var div = document.getElementById("myDiv");
div.classList.add("myClass");
</script>

</body>
</html>
```

- Referência: [stackoverflow](https://stackoverflow.com/questions/15040297/clear-element-classlist)


- Element.classList : é uma propriedade somente leitura que retorna uma coleção DOMTokenList (en-US) ativa dos atributos de classe do elemento. Referência: [MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList)


### Status

- Concluido: [![Vercel Status](https://api.netlify.com/api/v1/badges/5433c841-e738-419e-912f-d93faeac3678/deploy-status)](https://josecarlos-portifolio.vercel.app/)