# CouchPotatoes
![Logo](client/assets/images/logo.PNG)

CouchPotatoes is a social network platform for couch enthusiasts. Users can share their favorite couches, connect with fellow couch lovers, and engage with posts through likes and comments.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Mongo](https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white)
![ReactJS](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![API Layer](https://img.shields.io/badge/API%20Layer-FF6C37?style=for-the-badge&logo=apilayer&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (login, signup)
- Create, read, update, and delete posts
- Like and comment on posts
- Upload images for posts
- View user profiles
- Responsive design

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/couchpotatoes.git
    cd couchpotatoes
    ```

2. Install dependencies for both client and server:

    ```sh
    npm install
    ```

3. Set up environment variables:

    Create a [.env](http://_vscodecontentref_/0) file in the root directory and add the following variables:

    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET_KEY=your_jwt_secret_key
    PORT=5001
    ```

4. Start the development server:

    ```sh
    npm run render-start    
    ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to access the client.
- The server will be running on `http://localhost:5001`.

# CouchPotatoes

CouchPotatoes is a social network platform for couch enthusiasts. Users can share their favorite couches, connect with fellow couch lovers, and engage with posts through likes and comments.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Mongo](https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white)
![ReactJS](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![API Layer](https://img.shields.io/badge/API%20Layer-FF6C37?style=for-the-badge&logo=apilayer&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (login, signup)
- Create, read, update, and delete posts
- Like and comment on posts
- Upload images for posts
- View user profiles
- Responsive design

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/couchpotatoes.git
    cd couchpotatoes
    ```

2. Install dependencies for both client and server:

    ```sh
    npm install
    ```

3. Set up environment variables:

    Create a [.env](http://_vscodecontentref_/0) file in the root directory and add the following variables:

    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET_KEY=your_jwt_secret_key
    PORT=5001
    ```

4. Start the development server:

    ```sh
    npm run render-start    
    ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to access the client.
- The server will be running on `http://localhost:5001`.

## Project Structure

### Root Directory

- [.env](http://_vscodecontentref_/1): Environment variables.
- [.github](http://_vscodecontentref_/2): GitHub workflows.
  - [main.yml](http://_vscodecontentref_/3): GitHub Actions configuration.
- [.gitignore](http://_vscodecontentref_/4): Git ignore file.
- [LICENSE](http://_vscodecontentref_/5): License file.
- [README.md](http://_vscodecontentref_/6): Project documentation.
- [package.json](http://_vscodecontentref_/7): Project metadata and scripts.

### Client Directory

- [.gitignore](http://_vscodecontentref_/8): Git ignore file for client.
- [index.html](http://_vscodecontentref_/9): Main HTML file.
- [package.json](http://_vscodecontentref_/10): Client-specific dependencies and scripts.
- [vite.config.js](http://_vscodecontentref_/11): Vite configuration.
- [README.md](http://_vscodecontentref_/12): Client-specific documentation.
- [App.css](http://_vscodecontentref_/13): Global styles for the app.
- [App.jsx](http://_vscodecontentref_/14): Main React component.
- [index.css](http://_vscodecontentref_/15): Global styles.
- [main.jsx](http://_vscodecontentref_/16): Entry point for the React application.
- `assets/`: Static assets.
  - `images/`: Image assets.
  - `styles/`: CSS styles.
- `components/`: React components.
  - [Card.jsx](http://_vscodecontentref_/17): Card component.
  - [Footer.jsx](http://_vscodecontentref_/18): Footer component.
  - [Header.jsx](http://_vscodecontentref_/19): Header component.
  - [Login.jsx](http://_vscodecontentref_/20): Login component.
  - [NavBar.jsx](http://_vscodecontentref_/21): Navigation bar component.
  - [SofaDetail.jsx](http://_vscodecontentref_/22): Sofa detail component.
- `pages/`: React pages.
  - [Home.jsx](http://_vscodecontentref_/23): Home page.
  - [Profile.jsx](http://_vscodecontentref_/24): Profile page.
  - [Upload.jsx](http://_vscodecontentref_/25): Upload page.

### Server Directory

- [.gitignore](http://_vscodecontentref_/26): Git ignore file for server.
- [package.json](http://_vscodecontentref_/27): Server-specific dependencies and scripts.
- [tsconfig.json](http://_vscodecontentref_/28): TypeScript configuration.
- [server.js](http://_vscodecontentref_/29): Main server file.
- [server.ts](http://_vscodecontentref_/30): TypeScript server file.
- `config/`: Configuration files.
  - [connection.js](http://_vscodecontentref_/31): MongoDB connection configuration.
  - [connection.ts](http://_vscodecontentref_/32): TypeScript MongoDB connection configuration.
- `controllers/`: Express controllers.
  - [couchController.js](http://_vscodecontentref_/33): Couch controller.
  - [couchController.ts](http://_vscodecontentref_/34): TypeScript couch controller.
  - [postController.js](http://_vscodecontentref_/35): Post controller.
  - [postController.ts](http://_vscodecontentref_/36): TypeScript post controller.
  - `userController.js`: User controller.
  - `userController.ts`: TypeScript user controller.
- `models/`: Mongoose models.
  - [User.js](http://_vscodecontentref_/37): User model.
  - `User.ts`: TypeScript user model.
  - [couch.js](http://_vscodecontentref_/38): Couch model.
  - [couch.ts](http://_vscodecontentref_/39): TypeScript couch model.
  - [post.js](http://_vscodecontentref_/40): Post model.
  - [post.ts](http://_vscodecontentref_/41): TypeScript post model.
  - [Repost.js](http://_vscodecontentref_/42): Repost model.
  - [index.js](http://_vscodecontentref_/43): Model index file.
  - [index.ts](http://_vscodecontentref_/44): TypeScript model index file.
- `routes/`: Express routes.
  - [index.js](http://_vscodecontentref_/45): Main route file.
  - [index.ts](http://_vscodecontentref_/46): TypeScript main route file.
  - `api/`: API routes.
    - [imageUploadAPI.js](http://_vscodecontentref_/47): Image upload API route.
    - [imageUploadAPI.ts](http://_vscodecontentref_/48): TypeScript image upload API route.
    - [userRoutes.js](http://_vscodecontentref_/49): User routes.
    - [userRoutes.ts](http://_vscodecontentref_/50): TypeScript user routes.
    - [likes.js](http://_vscodecontentref_/51): Likes routes.
    - [reposts.js](http://_vscodecontentref_/52): Reposts routes.
  - [couchRoutes.js](http://_vscodecontentref_/53): Couch routes.
  - [couchRoutes.ts](http://_vscodecontentref_/54): TypeScript couch routes.
  - [postRoutes.js](http://_vscodecontentref_/55): Post routes.
  - [postRoutes.ts](http://_vscodecontentref_/56): TypeScript post routes.
- `schemas/`: GraphQL schemas.
  - [index.js](http://_vscodecontentref_/57): Schema index file.
  - [index.ts](http://_vscodecontentref_/58): TypeScript schema index file.
  - [resolvers.js](http://_vscodecontentref_/59): GraphQL resolvers.
  - [resolvers.ts](http://_vscodecontentref_/60): TypeScript GraphQL resolvers.
  - [typeDefs.js](http://_vscodecontentref_/61): GraphQL type definitions.
  - [typeDefs.ts](http://_vscodecontentref_/62): TypeScript GraphQL type definitions.
- `services/`: Service files.
  - [auth.js](http://_vscodecontentref_/63): Authentication service.
  - [auth.ts](http://_vscodecontentref_/64): TypeScript authentication service.

## API Endpoints

### User Endpoints

- `POST /api/users`: Create a new user.
- `POST /api/users/login`: Login a user.
- `GET /api/users/me`: Get the authenticated user's profile.
- `GET /api/users`: Get all users.
- `GET /api/users/:userId`: Get a user by ID.
- `PUT /api/users/:userId`: Update a user by ID.
- `DELETE /api/users/:userId`: Delete a user by ID.

### Post Endpoints

- `GET /api/posts/recent`: Get all posts.
- `POST /api/posts`: Create a new post.
- `POST /api/posts/comment`: Add a comment to a post.
- `POST /api/posts/like`: Like a post.
- `DELETE /api/posts/:postId`: Delete a post.

### Couch Endpoints

- `GET /api/couches`: Get all couches.
- `POST /api/couches`: Create a new couch.

### Image Upload Endpoint

- `POST /api/upload`: Upload an image.

## Environment Variables

Create a [.env](http://_vscodecontentref_/65) file in the root directory and add the following variables:

MONGO_URI=your_mongodb_uri
JWT_SECRET_KEY=your_jwt_secret_key
PORT=5001

## Questions and Links

For any questions please reach out by email, and feel free to check our GitHub:

- [GitHub](https://github.com/Pravus696/couchpotatoes.git)
- [Render](https://couchpotatoes.onrender.com)
- [Slideshow](https://docs.google.com/presentation/d/1G_5hgDvhyG9BTgKpUtKq3aJlBTOT_-mEQB2GVSpptro/edit?usp=sharing)

## License 
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

