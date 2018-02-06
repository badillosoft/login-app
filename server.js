const http = require("http");
const express = require("express");

const app = express();

// Creamos una lista de usuarios (predefinida)
const users = [{
    email: "batman@liga.com",
    picture: "http://www.legobatman.com/assets/media/global/header/batwink-loop.gif",
    username: "batman",
    password: "robin",
    token: "XXXXXXXXXXXXXXXXXX"
}, {
    email: "superman@liga.com",
    picture: "https://i.pinimg.com/236x/e7/79/b8/e779b84b43b9c0378b3e8d0d1859eb4d--lego-dc-superman.jpg",
    username: "superman",
    password: "kriptonita",
    token: "XXXXXXXXXXXXXXXXXX"
}];

// Usuarios (username, email)
app.get("/api/users", (req, res) => {
    res.send(users.map(({ username, email, picture }) => 
        ({ username, picture })));
});

// Perfil del usuario
app.get("/api/users/:username", (req, res) => {
    // Obtengo el username de los parámetros :username
    const username = req.params.username;
    // Obtengo el token de los queries ?token=XXXX
    const token = req.query.token;

    // Filtro el primer usuario con el `username`
    const user = users.filter(user => user.username === username)[0];

    // Si no se encontró el usuario
    if (!user) {
        res.send({
            error: true,
            message: "User is not exists"
        });
        return;
    }

    // Si el token no es el correcto
    if (user.token !== token) {
        res.send({
            username: user.username,
            picture: user.picture,
        });
        return;
    }

    // Envío los datos del usuario
    res.send(user);
});

app.get("/api/users/:username/login", (req, res) => {
    const username = req.params.username;
    const password = req.query.pw;
    const user = users.filter(user => 
        user.username === username && user.password === password)[0];
    
    if (!user) {
        res.send({
            error: true,
            message: "invalid access"
        });
        return;
    }

    const token = Math.random().toString(16).slice(2);

    user.token = token;

    res.send({
        username,
        token
    });
});

http.createServer(app).listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000/");
});