const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const DB_FILE = "database.json";

// GET DATA
app.get("/get-user", (req, res) => {
    if (!fs.existsSync(DB_FILE)) return res.json(null);
    const data = JSON.parse(fs.readFileSync(DB_FILE));
    res.json(data);
});

// SAVE DATA
app.post("/save-user", (req, res) => {
    fs.writeFileSync(DB_FILE, JSON.stringify(req.body, null, 2));
    res.json({ message: "Saved!" });
});

// DELETE DATA
app.delete("/reset", (req, res) => {
    if (fs.existsSync(DB_FILE)) fs.unlinkSync(DB_FILE);
    res.json({ message: "Deleted!" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
    app.get("/", (req, res) => {

    if (!fs.existsSync("database.json")) {
        return res.send("<h2>No Data Found</h2>");
    }

    const data = JSON.parse(fs.readFileSync("database.json"));

    const html = `
        <h2 style="text-align:center;">User Data Table</h2>
        <table border="1" style="margin:auto; border-collapse:collapse; text-align:center;">
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Disease</th>
            </tr>
            <tr>
                <td>${data.name}</td>
                <td>${data.phone}</td>
                <td>${data.age}</td>
                <td>${data.disease}</td>
            </tr>
        </table>
    `;

    res.send(html);
});
});
