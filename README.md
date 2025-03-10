# Cubo 3D

Este projeto cria um cubo 3D interativo usando HTML, CSS e JavaScript. O cubo gira de acordo com o movimento do mouse do usuário, proporcionando uma experiência visual interativa.

## Tecnologias Utilizadas

- **HTML**: Estruturação da página e definição das faces do cubo.
- **CSS**: Estilização do cubo e a criação da perspectiva 3D.
- **JavaScript**: Manipulação do evento de movimento do mouse para rotacionar o cubo em tempo real.

## Como Funciona

O código cria uma cena 3D onde um cubo é colocado no centro da tela. O cubo é composto por seis faces (frente, trás, esquerda, direita, cima e baixo), e cada face é rotacionada utilizando transformações CSS para criar o efeito 3D.
Quando o usuário move o mouse pela tela, o evento `mousemove` é capturado e as coordenadas do mouse são usadas para calcular a rotação do cubo ao redor dos eixos X e Y.

## Como Usar

1. **Abra o arquivo em um navegador**: Basta salvar o código HTML fornecido em um arquivo `.html` e abri-lo em qualquer navegador moderno (Chrome, Firefox, etc.).
2. **Interaja com o cubo**: Mova o mouse pela tela para rotacionar o cubo em todas as direções. O cubo girará conforme o movimento do mouse.

## Estrutura do Código

- **HTML**:
  - A estrutura principal está dentro de uma `<div class="scene">`, que define o ambiente 3D.
  - O cubo é uma `<div class="cube">`, com 6 faces (`.front`, `.back`, `.left`, `.right`, `.top`, `.bottom`), representando as faces do cubo.
  
- **CSS**:
  - A propriedade `perspective` é usada para criar a sensação de profundidade na cena 3D.
  - Cada face do cubo é posicionada usando a propriedade `transform`, aplicando rotações e translações para posicioná-las corretamente em relação ao centro.
  
- **JavaScript**:
  - Um event listener é adicionado ao evento `mousemove` para capturar a posição do mouse e ajustar a rotação do cubo com base nas coordenadas do cursor.

## Exemplo de Implementação

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cubo 3D Interativo</title>
    <style> </style>
</head>
<body>
    <div class="scene">
        <div class="cube" id="cube">
            <div class="face front">A</div>
            <div class="face back">B</div>
            <div class="face left">C</div>
            <div class="face right">D</div>
            <div class="face top">E</div>
            <div class="face bottom">F</div>
        </div>
    </div>
    <script> </script>
</body>
</html>
```

## Melhorias Possíveis

- **Efeitos adicionais**: Adicionar animações ou efeitos de iluminação para tornar o cubo ainda mais interativo.
- **Responsividade**: Ajustar a escala do cubo dependendo do tamanho da tela ou dispositivo para uma melhor experiência de usuário.
- **Controles adicionais**: Adicionar controles para permitir ao usuário girar o cubo de outras formas, como botões de rotação ou teclas de atalho.

## Licença

Este projeto é de código aberto. Sinta-se à vontade para modificar e personalizar conforme necessário.
