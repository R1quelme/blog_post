<h1 align="center">
  blog_post
</h1>
<div align="center">
    <a href="#about">About</a> | <a href="#howtouse">How to use</a> | <a href="#screens">Screens</a> 
</div>
<br>
<a id="about"></a>

## :page_facing_up: About the project blog_post

App para um blog.

* Esse app deverá ter cadastro de posts, pesquisa de posts e visualização de posts.

No cadastro de posts, o usuário poderá informar os seguintes dados: 
* Título do post(obrigatório);
* Texto do post (ilimitado e obrigatório);
* Data do post (obrigatório);
* Autor (obrigatório).

Também deve existir a opção de editar e excluir os posts.

Na pesquisa de posts, o usuário poderá pesquisar pelo título dos posts cadastrados.

Deverá salvar os dados no LocalStorage com AsyncStorage.

Deverá criar ao menos um componente e usar o componente no layout, esse componente precisará receber props usar as props dentro dele.

Deverá usar react-navigation para mudar de telas.

Deverá fazer o request ter uma tela com a listagem vinda desse endpoint. https://jsonplaceholder.typicode.com/posts<br>
Fazer um request passando o id para buscar o detalhe no seguinte endpoint. https://jsonplaceholder.typicode.com/posts/1

<br>  
<a id="howtouse"></a>

## :dart: How to use
Clone the repository

```bash
https://github.com/R1quelme/blog_post
```

```
# Install the dependencies
yarn
# or
npm install

# Start the expo
expo start

# Login google
Put google credentials as in file env.example
```

<br>
<a id="screens"></a>

## :iphone: Screens

<h1 align="center">
<img alt="BlogPost" title="BlogPost" src="https://github.com/R1quelme/blog_post/blob/main/src/assets/telasApp.jpeg" width="500px"/>
</h1>

