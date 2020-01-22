module.exports = {
    create: (req, res) => {
        const {name, descritpion, price, image_url} = req.body;
        const dbInstance = req.app.get('db');

        dbInstance.create_product([name, descritpion, price, image_url]).then((product) => {
            res.status(200).send(product)
        })
        .catch(err => res.status(500).send(err));
    },
  
    getOne: (req, res) => {
        const {id} = req.params;
        const dbInstance = req.app.get('db');

        dbInstance.read_product(id).then((product) => {
            res.status(200).send(product)
        })
        .catch(err => res.status(500).send(err));
    },
  
    getAll: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products().then((product) => {
            res.status(200).send(product)
        })
        .catch(err => res.status(500).send(err));
    },
  
    update: (req, res) => {
        const {id} = req.params;
        const {descritpion} = req.query;
        const dbInstance = req.app.get('db');

        dbInstance.update_product([id, descritpion]).then((product) => {
            res.status(200).send(product)
        })
        .catch(err => res.status(500).send(err));
    },

  
    delete: (req, res) => {
        const {id} = req.params;
        const dbInstance = req.app.get('db');
    
        dbInstance.delete_product(id).then((product) => {
            res.status(200).send(product)
        })
        .catch(err => res.status(500).send(err));
    }
  };