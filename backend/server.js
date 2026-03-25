import express from 'express';
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import contactRoute from "./src/routes/contact.route.js";

// __dirname fix for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// .env.local root folder se load karo
dotenv.config({ path: path.join(__dirname, "../.env.local") });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/contact", contactRoute);

app.listen(3000, () => console.log(`Server running on port 3000`));