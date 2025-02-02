import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const dataBase = new pg.Pool({
  connectionString: process.env.DB_CONN,
});

app.get("/", (req, res) => res.json("hello?"));
app.get("/cymruposts", async (req, res) => {
  const result = await dataBase.query("SELECT * FROM cymruposts");
  const posts = result.rows;
  res.json(posts);
});

app.delete("/cymruposts/:id", async (req, res) => {
  console.log(req.params.id);
  const deleted = await dataBase.query("DELETE FROM cymruposts WHERE id = $1", [
    req.params.id,
  ]);
  res.send(req.params.id);
});
app.put("/cymruposts/:id", async (req, res) => {
  console.log(req.params.id, req.body);
  const update = await dataBase.query(
    "UPDATE cymruposts SET place = $1, postcode = $2, comment = $3, photo = $4 WHERE id = $5",
    [req.body.place, req.body.postcode, req.body.comment, req.body.photo]
  );
  res.json({ params: req.params.id, body: req.body });
});

app.post("/cymruposts", async (req, res) => {
  const body = req.body;
  console.log(body);

  const placeFromClient = req.body.place;
  const postcodeFromClient = req.body.postcode;
  const commentFromClient = req.body.comment;
  const photoFromClient = req.body.photo;

  const newData = await dataBase.query(
    "INSERT INTO cymruposts (place, postcode, comment, photo) VALUES ($1, $2, $3, $4)",
    [placeFromClient, postcodeFromClient, commentFromClient, photoFromClient]
  );
  res.json(newData);
});

app.listen("3098", () => {
  console.log(`App is running on http://localhost:3098`);
});
