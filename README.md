<div align="center">
   <h1>:game_die: TTRPG TRACKER :game_die:</h1>
   <h3><a href="https://ttrpgtracker.herokuapp.com/">https://ttrpgtracker.herokuapp.com/</a></h3> 
   <a href="http://steviecodes.com" target="_blank">
      <img src="https://img.shields.io/badge/-Portfolio_-darkgreen?style=for-the-badge&logo=medium"/>
   </a>
   <a href="https://www.linkedin.com/in/stevie-militello/" target="_blank">
      <img src="https://img.shields.io/badge/-Linkedin-blue?style=for-the-badge&``logo=Linkedin&logoColor=white">
   </a> 
   <a href="mailto:steviemilitello@gmail.com" target="_blank">
      <img src="https://img.shields.io/badge/-Email-c14438?style=for-the-badge&logo=Gmail&``logoColor=white">
   </a>
</div>

<h1>:books: Description</h1>

<p>TTRPG Tracker is an app to keep track of your tabletop RPG book collection. As a user you can view books, add books to your collection, remove books from your collection, add new books to your collection, edit and delete books in your collection, sort the books, and add and delete comments on a book's page.</p>

<h1> :atom_symbol: Getting Started </h1>

<h3> :calling: Install Instructions </h3>
<details open>
<summary>Installation</summary>
<p></p>
<ul>
    <li>Fork and Clone this Repo</li>
    <li>Install the necessary dependencies by copying the code below (or see dependencies to install individually): <br /><code>npm i @popperjs/core bcryptjs connect-mongo dotenv express express-session liquid-express-views method-override mongoose morgan serve-favicon</code></li>
    <li>run <code>npm seed</code> to seed the database from <code>seed.js</code></li>
    <li>run <code>npm start</code> and go to <code>localhost:3000</code> in your browser to view</li>
</ul>
</details>
<p></p>
<details>
<summary>Dependencies</summary>
<p></p>
<ul>
    <li><a href="https://www.npmjs.com/package/@popperjs/core">@Popper JS/Core</a> <code>npm i @popperjs/core</code></li>
    <li><a href="https://www.npmjs.com/package/bcrypt">Bcrypt</a> <code>npm i bcrypt</code></li>
    <li><a href="https://www.npmjs.com/package/connect-mongo">Connect-Mongo</a> <code>npm i connect-mongo</code></li>
    <li><a href="https://www.npmjs.com/package/dotenv">Dotenv</a> <code>npm i dotenv</code></li>
    <li><a href="https://www.npmjs.com/package/express">Express</a> <code>npm i express</code></li>
    <li><a href="https://www.npmjs.com/package/express-session">Express-Session</a> <code>npm i express-session</code></li>
    <li><a href="https://www.npmjs.com/package/liquid-express-views">Liquid-Express-Views</a> <code>npm i liquid-express-views</code></li>
    <li><a href="https://www.npmjs.com/package/method-override">Method-Override</a> <code>npm i method-override</code></li>
    <li><a href="https://www.npmjs.com/package/mongoose">Mongoose</a> <code>npm i mongoose</code></li>
    <li><a href="https://www.npmjs.com/package/morgan">Morgan</a> <code>npm i morgan</code></li>
    <li><a href="https://www.npmjs.com/package/serve-favicon">Serve-Favicon</a> <code>npm i serve-favicon</code></li>
</ul>
</details>
<p></p>

<h3> :calling: How To Use </h3>

<details>
<summary>How to Add a Game to My Games</summary>
<p></p>
<ol>
   <li>Click the + button on the All Games Page on the game you wish to add</li>
   <li>Go to My Games and you will see the game in your personal collection</li>
</ol>
</details>
<p></p>

<details>
<summary>How to Add a New Game</summary>
<p></p>
<ol>
   <li>Click Add New Game in the Navbar</li>
   <li>Fill in the fields on the New Game page</li>
   <li>Click the Add New Game button at the bottom of the page</li>
   <li>Go to My Games and you will see the game in your personal collection</li>
   <li>*The game will appear for only you (if you are the one who added it) on your My Games page</li>
</ol>
</details>
<p></p>

<details>
<summary>How to Edit a Game</summary>
<p></p>
<ol>
   <li>Go to My Games and click the View button on the game you wish to edit</li>
   <li>Click the Edit Button in the bottom left corner under the image</li>
   <li>Fill in the fields on the Edit Page</li>
   <li>Click the Edit Game Button at the bottom of the page</li>
   <li>The updated version of the game will appear on your My Games Page</li>
</ol>
</details>
<p></p>

<details>
<summary>How to Delete a Game</summary>
<p></p>
<ol>
   <li>Go to My Games and click the View button on the game you wish to delete</li>
   <li>Click the Delete Button in the bottom left corner under the image</li>
   <li>The game will be deleted from your My Games Page</li>
   <li>If you added the game via Add New Game, the version only exists on your My Games page and will be deleted</li>
   <li>If you wish to add a new game you created again, use the Add New Game in the navbar</li>
   <li>Otherwise, click the + button if the game already exists in the app to add it back to your collection</li>
</ol>
</details>
<p></p>

<details>
<summary>How to Sort</summary>
<p></p>
<ol>
   <li>In the Navbar, click System, Genres or Game Type to sort by the categories</li>
   <li>A dropdown will appear, allowing you to select sub-categories, which will bring you to the sorted page once clicked</li>
</ol>
</details>
<p></p>

<details>
<summary>How to Add a Comment</summary>
<p></p>
<ol>
   <li>Click the view button on the game you wish to add a comment to</li>
   <li>Once on the game page, type your comment in the Comment form in the lower right of the page</li>
   <li>Click the Add Comment button to add your comment to the page</li>
   <li>Your comment and other user's comments will appear below the form on the page</li>
</ol>
</details>
<p></p>

<details>
<summary>How to Delete a Comment</summary>
<p></p>
<ol>
   <li>Click the view button on the game where you wish to delete a comment</li>
   <li>If you added the comment, you will see an X in the upper right of the comment</li>
   <li>Click the X to delete the comment</li>
   <li>Your comment will be deleted</li>
</ol>
</details>
<p></p>

<h1>:arrow_right: Routes</h1>

<details>
<summary> Comment</summary>

| Verb   | URI Pattern                         | Controller#Action              |
|--------|-------------------------------------|--------------------------------|
| POST   | `/games/:gameId`                    | `games#gameId`                 |
| DELETE | `/games//delete/:gameId/:commId`    | `games#delete#gameId#commId`   |

</details>

<details>
<summary> Games</summary>


| Verb   | URI Pattern                         | Controller#Action              |
|--------|-------------------------------------|--------------------------------|
| GET    | `/`                                 | `games#`                       |
| GET    | `/coyoteandcrow`                    | `games#/coyoteandcrow`          |
| GET    | `/dnd`                              | `games#dnd`                    |
| GET    | `/fitd`                             | `games#fitd`                   |
| GET    | `/forgediniron`                     | `games#forgediniron`           |
| GET    | `/osr`                              | `games#osr`                    |
| GET    | `/pbta`                             | `games#pbta`                   |
| GET    | `/stellarremnants`                  | `games#stellarremnants`        |
| GET    | `/cyberpunk`                        | `games#cyberpunk`              |
| GET    | `/fantasy`                          | `games#fantasy`                |
| GET    | `/darkfantasy`                      | `games#darkfantasy`            |
| GET    | `/scifi`                            | `games#scifi`                  |
| GET    | `/sciencefantasy`                   | `games#sciencefantasy`         |
| GET    | `/steampunk`                        | `games#steampunk`              |
| GET    | `/urbanfantasy`                     | `games#urbanfantasy`           |
| GET    | `/genreagnostic`                    | `games#genreagnostic`          |
| GET    | `/gm`                               | `games#gm`                     |
| GET    | `/gmless`                           | `games#gmless`                 |
| GET    | `/solo`                             | `games#solo`                   |
| GET    | `/mine`                             | `games#mine`                   |
| GET    | `/new`                              | `games#new`                    |
| POST   | `/`                                 | `games#`                       |
| POST   | `/newfave`                          | `games#newfave`                |
| GET    | `/:id/edit`                         | `games#:id#edit`               |
| PUT    | `/:id`                              | `games#:id#`                   |
| GET    | `/:id`                              | `games#:id#`                   |
| DELETE | `/:id`                              | `games#:id#`                   |

</details>

<details>
<summary> Home</summary>

| Verb   | URI Pattern                         | Controller#Action              |
|--------|-------------------------------------|--------------------------------|
| GET    | `/`                                 | `/`                            |

</details>

<details>
<summary> User</summary>

| Verb   | URI Pattern                         | Controller#Action              |
|--------|-------------------------------------|--------------------------------|
| POST   | `/auth/signup`                      | `users#signup`                 |
| POST   | `/auth/login`                       | `users#login`                  |
| DELETE | `/auth/logout`                      | `users#logout`                 |

</details>
<p></p>
<h1>:framed_picture: Screenshots</h1>

<details>
<summary> :bar_chart: ERD</summary><br />

| Description                        | Screenshot                                               |
|----------------------------------- | -------------------------------------------------------- |
| <h3 align="center">ERD</h3>        | <img src="https://i.imgur.com/J7CPtQo.png" width="700"/> |

</details>

<details>
<summary> :art: Wireframes</summary><br />

| Description                        | Screenshot                                               |
|----------------------------------- | -------------------------------------------------------- |
| <h3 align="center">Index Page</h3> | <img src="https://i.imgur.com/xhKYNot.png" width="700"/> |
| <h3 align="center">Show Page</h3>  | <img src="https://i.imgur.com/hrqSA74.png" width="700">  |

</details>

<details open>
<summary> :gear: Functionality</summary><br />

| Description                        | Screenshot                                               |
|----------------------------------- | -------------------------------------------------------- |
| <h3 align="center">Index Page</h3> | <img src="https://i.imgur.com/4nj1cNP.png" width="700"/> |
| <h3 align="center">Show Page</h3>  | <img src="https://i.imgur.com/6JlnZ6C.png" width="700">  |

</details>
<p></p>

</details>
<p></p>
<h1>:bust_in_silhouette: User Story</h1>

<ul>
    <li>As a user they want to be able to be able to add items they own to a collection</li>
    <li>They want be able to see what books they have in their collection</li>
    <li>They want to be able to add new books to their collection</li>
    <li>They want to be able to delete books from their collection</li>
    <li>They want to be able to sort the books by name, genre, system, creator, type etc.</li>
</ul>

<h1>:computer: Technologies Used</h1>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![FontAwesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) 
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![LiquidJS](https://img.shields.io/badge/-Liquidjs-blue?style=for-the-badge&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

<h1>:fast_forward: Next Steps</h1>

<ul>
   <li>Flesh out Welcome Page</li>
    <li>Add more books to database</li>
    <li>Add ability for users to add games for all users to see, not just their collection</li>
    <li>Refactor with separate API and Client</li>
 </ul>



