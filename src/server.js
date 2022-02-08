import http from "http";
import SocketIo from "socket.io";
import express from "express";
import path from "path";

const __dirname = path.resolve();
const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");
app.use("/public", express.static(__dirname + "/src/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const httpServer = http.createServer(app);
const io = SocketIO(httpServer);

const handleListen = () => console.log("서버켜짐");
app.listen(3000, handleListen);
