// Load environment variables from .env file
import "dotenv/config";

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
import "../database/checkConnection";

// Import the Express application from ./app
import app from "./app";

app.get("/artist", async (req, res) => {
  const dataArtist = require("../database/data/artist.json");
  res.json(dataArtist);
});
app.get("/albums", async (req, res) => {
  const data = require("../database/data/album.json");
  res.json(data);
});
app.get("/artist/:id", async (req, res) => {
  const dataArtist = require("../database/data/artist.json");
  res.json(
    dataArtist.filter((i: { id: number }) => i.id === Number(req.params.id)),
  );
});
app.get("/albums/:id", async (req, res) => {
  const response = await fetch(
    `https://api.deezer.com/album/${req.params.id}/tracks`,
  );
  const data = await response.json();
  res.json(data);
});
app.get("/news", async (req, res) => {
  const data = require("../database/data/news.json");
  res.json(data);
});
app.get("/catalog", async (req, res) => {
  const dataCatalog = require("../database/data/genre.json");
  res.json(dataCatalog);
});
app.get("/catalog/artist/:id", async (req, res) => {
  const dataCatalog = require("../database/data/artist.json");
  res.json(
    dataCatalog.filter(
      (i: { id_genre: number }) => i.id_genre === Number(req.params.id),
    ),
  );
});
app.get("/catalog/artist/albums/:id", async (req, res) => {
  const dataCatalog = require("../database/data/album.json");
  res.json(
    dataCatalog.filter(
      (i: { id_artist: number }) => i.id_artist === Number(req.params.id),
    ),
  );
});
// Get the port from the environment variables
const port = process.env.APP_PORT;

// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
