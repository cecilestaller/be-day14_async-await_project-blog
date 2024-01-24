// Module importieren
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const dotenv = require("dotenv");
const { blogRouter } = require("./src/routes")

dotenv.config();

// ------ Server erstellen:
const app = express();

// ------ Middlewares schreiben
// 1) Cors:
app.use(cors());
// 2) Logs:
// ---> log middleware mit npm package MORGAN:

app.use(logger("dev"));

// 3) Body parser (wandelt einkpmmende req's mit jsonObj im body in normales JavaScriptObj um):
app.use(express.json());

// 4) download (res.sendFile()) ermöglichen --> schaut ob's die Datei vom req im uploads folder gibt und returnt sie
app.use(express.static("./data/uploads"));


// ------ CRUD- Endpoints jetzt in blogRouter

app.use("/api/blogs", blogRouter);


// ------ Endpoint NOT FOUND Handler (FALLBACK middleware):
app.use((_, res) => {
    res
        .status(404)
        .json({ success: false, error: "Route not found" });
});

// ------ LISTENER aktivieren, damit Server überhaupt zuhört
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
});
