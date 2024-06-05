const express = require("express");
const session = require("express-session");
const path = require("path");
const routes = require("./routes/index")
const history = require('connect-history-api-fallback');

const cors = require("cors");
const morgan = require("morgan");

const app = express();

const bodyParser = require('body-parser');

app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["POST", "PUT", "GET", "DELETE"],
      credentials: true,
    })
  );
  
  app.use(express.static(path.join(__dirname, "./public")));
  // app.use(function (req, res) {
  //   res.setHeader('Content-Type', 'text/plain')
  //   res.write('you posted:\n')
  //   res.end(JSON.stringify(req.body, null, 2))
  // })

  app.use(morgan(":method :url :status :user-agent - :response-time ms"));
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );
  // app.use(bodyParser.json());
  app.use(express.json());


  app.use(
    session({
        secret: "aha",
        resave: false,
        saveUninitialized: true
    })
  );

  app.use("/", routes);
  app.use(history());
  
  app.listen(process.env.PORT || 3000);