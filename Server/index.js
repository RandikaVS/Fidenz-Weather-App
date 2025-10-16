// const dotenv = require("dotenv");
// const colors = require("colors");
// const express = require('express');
// const cors = require("cors");
// const path = require("path");
// dotenv.config();

// const weatherRouter = require('./routes/weather');

// const { errorHandler, notFound } = require("./middleware/errorMiddleware");


// const app = express();
// const PORT = process.env.PORT || 8080;


// app.use(cors());
// app.use(express.json());

// app.use('/api/weather', weatherRouter);

// // Serve frontend

// app.use(express.static(path.join(process.cwd(), "public")));

// app.get(/.*/, (req, res) => {
//   res.sendFile(path.join(process.cwd(), "public", "index.html"));
// });


// app.listen(
//   PORT, 
//   () => {
//     console.log(`Server running on PORT ${PORT}...`.yellow.bold);
//     console.log("Success".green.bold);
//   }
// );


// app.use(errorHandler);
// app.use(notFound);


const dotenv = require("dotenv");
const colors = require("colors");
const express = require('express');
const cors = require("cors");
const path = require("path");
dotenv.config();

const weatherRouter = require('./routes/weather');
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// ✅ 1️⃣ Register backend routes first
app.use('/api/weather', weatherRouter);

// ✅ 2️⃣ Error handling for APIs (optional but recommended)
app.use(errorHandler);
app.use(notFound);

// ✅ 3️⃣ Serve frontend *after* APIs
app.use(express.static(path.join(process.cwd(), "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

// ✅ 4️⃣ Start the server
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}...`.yellow.bold);
});
