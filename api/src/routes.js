import { Router } from "express";
import movementController from "./controller/movementController.js";
import quizController from "./controller/quizController.js";

const routes = Router();

routes.use('/movements', movementController);
routes.use('/quiz', quizController);

export default routes;