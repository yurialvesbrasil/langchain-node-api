import { DynamicTool } from "langchain/tools";

export const tools = [
  new DynamicTool({
    name: "SearchNews",
    description: "Search for the latest news articles",
    func: async (query) => {
      try {
        const API_KEY = process.env.NEWS_API_KEY;
        const response = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${API_KEY}`);
        const data = await response.json();
        const articles = data.articles?.slice(0, 3);
        return JSON.stringify(articles);
      } catch (error) {
        return `Error fetching news: ${error}`;
      }
    },
  }),
  new DynamicTool({
    name: "TellMeJokes",
    description: "Tell me a joke",
    func: async (query) => {
      try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,racist,sexist&type=single");
        const data = await response.json();
        return `${data.setup} - ${data.punchline}`;
      } catch (error) {
        return `Error fetching joke: ${error}`;
      }
    }
  })
]
