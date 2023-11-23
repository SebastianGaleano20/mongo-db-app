import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT ?? 2323;

const serverTCP = net.createServer();

serverTCP.on("connection",(socket)=>{
    socket.on("data",()=>{});
    socket.on("connected",()=>{
        console.log("Client connected", new Date().toLocaleString())
    });
    socket.on("close",()=>{
        console.log("Client disconnected");
    });
    socket.on("error",()=>{
        console.log("Error");
    });
})
serverTCP.listen(port, () => {
  console.log(`Server is up on port ${port} - ${new Date().toLocaleString()}`);
});
