const express = require('express');
const app = express();

app.get("/api", (req, res) => {
   res.json({ "users": ["user1", "user2", "user3"] });
});

// O server está rodando na porta 5000, e o client na 5173 (poderia ser 3000)
app.listen(5000, () => { console.log("Server started on port 5000") });