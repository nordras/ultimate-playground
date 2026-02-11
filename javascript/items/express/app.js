const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const durationMs = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} ${durationMs}ms`);
  });
  next();
});

app.use("/public", express.static(path.join(__dirname, "public")));

const apiRouter = express.Router();
apiRouter.get("/ping", (req, res) => {
  res.send("pong");
});
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/greeting", (req, res) => {
  const name = req.query.name || "mundo";
  res.send(`Hello, ${name}`);
});

app.get("/users/:id", (req, res) => {
  res.json({ id: req.params.id });
});

app.post("/echo", (req, res) => {
  res.json(req.body);
});

app.get("/status", (req, res) => {
  res.status(200).json({ status: "up" });
});

let nextTaskId = 1;
const tasks = [];

function parsePagination(query) {
  const page = Math.max(parseInt(query.page || "1", 10), 1);
  const limit = Math.max(parseInt(query.limit || "10", 10), 1);
  return { page, limit };
}

app.get("/tasks", (req, res) => {
  const { page, limit } = parsePagination(req.query);
  const start = (page - 1) * limit;
  const items = tasks.slice(start, start + limit);
  res.json({ page, limit, total: tasks.length, items });
});

app.post("/tasks", (req, res, next) => {
  try {
    const { title } = req.body || {};
    if (!title || typeof title !== "string") {
      return res.status(400).json({ error: "title is required" });
    }
    const task = { id: nextTaskId++, title, done: false };
    tasks.push(task);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
});

app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return res.status(404).json({ error: "task not found" });
  }
  const { title, done } = req.body || {};
  if (typeof title === "string") {
    task.title = title;
  }
  if (typeof done === "boolean") {
    task.done = done;
  }
  res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "task not found" });
  }
  const [removed] = tasks.splice(index, 1);
  res.json(removed);
});

app.use((req, res) => {
  res.status(404).json({ error: "not found" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "internal error" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
