import express, { Router } from "express";
import {
    getTodo,
    postTodo,
    putTodo,
    deleteTodo
} from "../controllers/todos"

const router = Router();

router.use(express.json());

router.get("/todos", getTodo);
router.post("/todos", postTodo);
router.put("/todos", putTodo);
router.delete("/todos", deleteTodo); 

export { router };