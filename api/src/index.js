import express from "express";
import 'dotenv/config';
import routes from "./routes.js";
import initDatabase from "./config/dbCOnfig";

const app = express();
const PORT = process.env.PORT;

initDatabase();

app.use(express.json());

app.use(express.static('src/public'));

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


