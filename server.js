import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(express.json());

var todos = [];

app.get("/todos", (req, res) => {
    res.status(200).json({ todos });
});

app.post("/todos", (req, res) => {
    const { body } = req;

    const todo = body;

    todo.concluded = false;
    todo.id = uuidv4();
    todo.date = new Date();

    todos.push(todo);

    res.status(201).send(todo);
});

app.put("/todos", (req, res) => {
    const { id } = req.headers;

    let { title, description, concluded } = req.query;

    concluded === "true" ? concluded = true : concluded = false; 

    const todo = todos.find(todo => todo.id === id);

    todo.title = title ? title : todo.title;
    todo.description = description ? description : todo.description;
    todo.concluded = concluded ? concluded : todo.concluded;

    res.status(202).send(todo);
});

app.delete("/todos", (req, res) => {
    const { id } = req.headers;

    const i = todos.indexOf(todo => todo.id === id);

    todos.splice(i, 1);

    res.status(202).send();
});

app.listen(3333, () => console.log("Server is running in http://localhost:3333"));