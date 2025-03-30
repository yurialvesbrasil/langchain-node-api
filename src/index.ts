import { config } from "dotenv";
config();

import express from "express";
import { HumanMessage } from '@langchain/core/messages';
import { agent } from "./agent";

async function main() {
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.get("/api/chat", async (req, res) => {
    const { message } = req.body;
    if (!message) {
      res.status(400).json({ error: "Message are required" });
    }
    try {
      const agentFinalState = await agent.invoke({
        messages: [new HumanMessage(message)],
      }, {
        configurable: {
          thread_id: "42",
        }
      });
      const content = agentFinalState.messages[agentFinalState.messages.length - 1].content;
      res.json(content);
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