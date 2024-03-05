import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("I am still trying!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
