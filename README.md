# PROJECT 2 #

## TTTRPG Tracker ##

- An app for tracking your tabletop rpg book collection 

## Installation 

1. Fork and clone this repo 
2. install the necessary dependencies - `npm install @popperjs/core bcryptjs connect-mongo dotenv express express-session liquid-express-views method-override mongoose morgan`
3. run `npm seed` to seed the database from seed.js 
4. run `npm start` and go to `localhost:3000` in your browser to view

## Routes

**Comment**

| Verb   | URI Pattern                         | Controller#Action              |
|--------|-------------------------------------|--------------------------------|
| POST   | `/games/:gameId`                    | `games#gameId`                 |
| DELETE | `/games//delete/:gameId/:commId`    | `games#delete#gameId#commId`   |

**Games** 

| Verb   | URI Pattern                         | Controller#Action              |
|--------|-------------------------------------|--------------------------------|
| GET    | `/`                                 | `games#`                       |
| GET    | `/coyoteandcrow`                    | `games#/oyoteandcrow`          |
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
| PUT    | `/:id/`                             | `games#:id#`                   |
| GET    | `/:id`                              | `games#:id#`                   |
| DELETE | `/:id`                              | `games#:id#`                   |

**Home**

| Verb   | URI Pattern                         | Controller#Action              |
|--------|-------------------------------------|--------------------------------|
| GET    | `/`                                 | `/`                            |

**User**

| Verb   | URI Pattern                         | Controller#Action              |
|--------|-------------------------------------|--------------------------------|
| POST   | `/auth/signup`                      | `users#signup`                 |
| POST   | `/auth/login`                       | `users#login`                  |
| DELETE | `/auth/logout/`                     | `users#logout`                 |

## Pitch

**Example Image 1**

![a picture of an example of the app](public/images/example1.png)

**Example Image 2**

![a picture of another example of the app](public/images/example2.png)

**Entity-Relationship Diagram** 

![a picture of the entity-relationship diagram](public/images/erd.png)

### REQUIREMENTS

- Models: User, Game Library, Comments
- Seeded Data
- RESTful routes: utilize routes for examples of user story below such as showing all the books, showing the users library, adding and deleting books to their library etc. 
- ODM / MongoDB - utilize ODM to create a database of game information

### USER STORY 

- As a user they want to be able to be able to add items they own to a library
- They want be able to see what books they have in their library 
- They want to be able to add new books to their library 
- They want to be able to delete books from their collection
- They want to be able to sort the books by name, genre, system, creator, type etc. 

### IMPLEMENTATION 

- A database where information about the games are stored
- A page that shows a list of available games to add
- A page that shows information about the individual game 
- A page for users to add a game if they game does not exist 
- A page to edit the information about their copy of the game 
- A page that shows the user's library of games
- A sidebar or top menu bar to show the various options 
- A way to sort games

### TECHNOLOGIES 

- HTML, CSS, CSS Bootstrap, JavaScript, Liquid JS, Express, MongoDB



