require ('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      cors = require('cors'),
      ctrl = require('./products_controller'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      app = express();

app.use(cors());
app.use(express.json());

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('db connected');
})
.catch(err => console.log(err));

app.post('/api/products', ctrl.create);
app.get('/api/products/:id', ctrl.getOne);
app.get('/api/products', ctrl.getAll);
app.put('/api/products/:id', ctrl.update);
app.delete('/api/products/:id', ctrl.delete);

const port = SERVER_PORT;
app.listen(port, () => console.log(`Server listening on port ${port}.`));
