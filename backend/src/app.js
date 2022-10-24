import express from "express";
import morgan from "morgan";
import cors from "cors";
import LinkRoutes from "./routes/link.routes";
import UsersRoutes from "./routes/user.routes";

const app = express();

// settings
app.set("port", process.env.PORT || 4000);

// middlewares
const corsOptions = {}; // <-- "origin: http://..etc"
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
  res.json({ message: "yeah, here goes the app" });
});

app.use("/api/links", LinkRoutes);
app.use("/api/users", UsersRoutes);

export default app;
