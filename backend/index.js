const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose
  .connect("mongodb+srv://2022cs188:sQfJX8TGYa8nRf2s@mydb.wxxy3.mongodb.net/myblogs")
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(err));

app.use('/api/', require('./routes/routers'))
app.get("/home", (req, res) =>{
  res.send("Home Page")
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
