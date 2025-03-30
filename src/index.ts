import { config } from "dotenv";
config();

import express from "express";
import OpenAI from "openai";

async function main() {
  const app = express();
  app.use(express.json());

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.get("/api/chat", async (req, res) => {
    const { message } = req.body;
    if (!message) {
      res.status(400).json({ error: "Message are required" });
    }
    try {
      const responseOAI = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: message,
          }
        ],
        store: true,
      });
      res.json(responseOAI.choices[0].message);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

main().catch(console.error);