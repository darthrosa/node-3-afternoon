require ('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      cors = require('cors'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      app = express();

app.use(cors());
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})
.catch(err => console.log(err));

const port = SERVER_PORT;
app.listen(port, () => console.log(`Server listening on port ${port}.`));

