import app from "./app";
import "./datatbase";


app.listen(app.get("port"));

console.log("Server on port", app.get("port"));
