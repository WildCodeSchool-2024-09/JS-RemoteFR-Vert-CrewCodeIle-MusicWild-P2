// Load environment variables from .env file
import "dotenv/config";

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
import "../database/checkConnection";

// Import the Express application from ./app
import app from "./app";
/*app.get("/", async (req, res) => {
  const data = [
    {
      id: 113,
      name: "Dance",
      picture: "https://api.deezer.com/genre/113/image",
      type: "genre",
      preview:
        "https://cdnt-preview.dzcdn.net/api/1/1/a/f/5/0/af5b351b100513b1c167e5ed96b7ece3.mp3?hdnea=exp=1731538405~acl=/api/1/1/a/f/5/0/af5b351b100513b1c167e5ed96b7ece3.mp3*~data=user_id=0,application_id=42~hmac=0ab0b09e3b4cd6e9e6a5adcac946e3a48659612a9fcda507f48b7202b75fe18c",
    },
    {
      id: 108,
      name: "A Whiter Shade of Pale (Original Single Version)",
      picture: "https://api.deezer.com/album/77251762/image",
      type: "rock",
      preview:
        "https://cdnt-preview.dzcdn.net/api/1/1/2/7/a/0/27a14827ff1e82c5e40e8b6a934a8637.mp3?hdnea=exp=1731531859~acl=/api/1/1/2/7/a/0/27a14827ff1e82c5e40e8b6a934a8637.mp3*~data=user_id=0,application_id=42~hmac=d71f54c9bdd434276cdef4823eb18dc7b95f68181d286dd624c6aabad7e36133",
    },
    {
      id: 44,
      name: "My new test",
      picture: "https://api.deezer.com/album/520679/image",
      type: "pop",
      preview:
        "https://cdnt-preview.dzcdn.net/api/1/1/8/c/3/0/8c33bfff45cd23e48531506b74cb0463.mp3?hdnea=exp=1731530541~acl=/api/1/1/8/c/3/0/8c33bfff45cd23e48531506b74cb0463.mp3*~data=user_id=0,application_id=42~hmac=0b3634ac3ab85d6d589d896b30dab31f833a9173439ed288a4980d2910413ff4",
    },
    {
      id: 11,
      name: "The Rolling Stones",
      picture:
        "https://e-cdns-images.dzcdn.net/images/artist/2ceac184bc846327f60c5b0d4247cc7a/56x56-000000-80-0-0.jpg",
      tracklist: "https://api.deezer.com/artist/11/top?limit=50",
    },
  ];
  res.json(data);
});*/

app.get("/", async (req, res) => {
  const data = require("../database/data/artist-album.json");
  res.json(data);
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
