# Fullstack Afiliados Challenge

> This is a challenge by [Coodesh](https://coodesh.com/)

Fullstack Afiliados is an web app to create transactions for a producers and affiliates by an .txt file with the informations of every transaction. There is an example file in this project that you can use to create new transactions;.

## Setup

To bring the project up first install Docker, then run:

```
docker-compose up
```

Once the system is up just go to http://localhost:3000

Create an accoun, sign in and test the app.

There is an sales.txt, so you can use it to create new transactions. Try to edit this file to see the reports of api.

If you change your Dockerfile, install new packages, or anything else out of the /src, must rebuild the project, run:

```
docker-compose up --build
```

## Technologies

### Frontend

- React.js
- Typescript
- Styled components
- Toastify
- react-app-rewired
- react-infinite-scroll-component
- react-modal

### Backend

- Node.js
- Typeorm
- Postgres
- Jsonwebtoken
- bcryptjs
- multer

---

⌨️ with ❤️ by [Romullo Leal](https://github.com/romulloleal) 😊
