import { config } from "dotenv";
config();

import express from "express";

async function main() {
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

main().catch(console.error);