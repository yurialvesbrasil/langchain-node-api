import { ChatOpenAI } from "@langchain/openai";
import { MemorySaver } from '@langchain/langgraph';
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { tools } from "./tools";

const agentTools = tools
const agentCheckpointer = new MemorySaver();
const agentModel = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  model: "gpt-4o-mini",
  temperature: 0,
  verbose: false, // Enable verbose logging, how the agent is working
});

export const agent = createReactAgent({
  llm: agentModel,
  tools: agentTools,
  checkpointSaver: agentCheckpointer,
});
