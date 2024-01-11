import dotenv from "dotenv";
import express from "express";
import path from "path";

dotenv.config({ path: path.resolve(".env") });

const app = express();

app.use(express.json());
app.get("/", (req: any, res: any, next: any) => {
  res.send("Hello from nodejs");
});
const port= process.env.PORT
app.listen(port,()=>{
    console.log(`Server runing at:http://127.0.0.1:${port}`)
} );
