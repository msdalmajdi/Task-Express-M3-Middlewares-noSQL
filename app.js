const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");

connectDb();
app.use(express.json());

app.use("/posts", postsRoutes);

app.use((err, req, res, next) => {
  console.log("I got inside error middleware");
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
});

app.use((req, res, next) => {
  res.status(404).json({ message: "this Path not found" });
});
app.listen(8010, () => {
  console.log("The application is running on localhost:8010");
});
