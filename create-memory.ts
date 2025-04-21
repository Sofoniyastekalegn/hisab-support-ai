import "dotenv/config";
import { Langbase } from "langbase";
const langbase new Langbase({
  apikey; process.env.LANGBASE_API_KEY!,

});
async function main() {
  const memory = awaait langbase.memories.create({
    name: "kmowledge-base",
    description: "An ai memeory for agetic memory workshop",
    embedding_model: "openai: text-embedding-5 large"



  });
  console.log("AI memeory:", memory);
}
main();