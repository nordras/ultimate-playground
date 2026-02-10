# Express - Basic Exercises

Express fundamentals by creating small routes, middlewares, and simple handlers.

## Prerequisites

- Node.js installed
- npm or fio

## Exercises

- [ ] 1. Create an Express server that responds "OK" to `GET /`.
- [ ] 2. Create a `GET /greeting` route that receives `name` via query string and responds "Hello, <name>".
- [ ] 3. Create a `GET /users/:id` route that returns a JSON with the received `id`.
- [ ] 4. Create a `POST /echo` route that returns exactly the JSON received in the body.
- [ ] 5. Create a simple logging middleware (method + url + time) and apply it globally.
- [ ] 6. Create a `GET /status` route that returns `{ "status": "up" }` with HTTP 200.
- [ ] 7. Configure a statistics file service in `/public` and serve an `index.html` file.
- [ ] 8. Create an `api` router based on `/api` and a `GET /api/ping` route returning "pong".
- [ ] 9. Implement basic in-memory CRUD for `tasks` with routes:
- `GET /tasks`
- `POST /tasks`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`

- [ ] 10. Handle route not found errors with 404 middleware.
- [ ] 11. Create a global error middleware that returns `{ "error": "message" }`.

- [ ] 12. Use environment variables to set the server port.

## Extra Challenges

- [ ] Validate input in `POST /tasks` (e.g., `title` required).

- [ ] Add pagination to `GET /tasks` (`page`, `limit`).

- [ ] Implement simple tests with `supertest`.