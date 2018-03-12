module.exports = {
    create: ( req, res, next) => {
        const dbInstance = req.app.get('db');
        const { name, price} = req.body

        console.log(req.body);
        

        dbInstance.add_bin([ name, price ])
            .then( () => res.status(200).send() )
            .catch( () => res.status(500).send() )
    },

    // /api/:shelve/:id
    get: ( req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        const num = Number(params.id)

        dbInstance.read_bin([ num , params.shelve ])
            .then( bin => {console.log(bin) 
                res.status(200).send(bin)} )
            .catch((err) => {console.log(err, "database err for specific bin")
                res.status(500).send()}) 
            console.log([ num, params.shelve ], "= params.shelve read specific bin")
            // '/api/bin/:id/shelf:shelve'
    },
    update: ( req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.update_bin( params.id, req.body)
            .then( () => res.status(200).send() )
            .catch( () => res.status(500).send() )
    },

    delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.delete_bin()
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() )
    },

    getall: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.read_bins([ params.shelve ])
            .then( bin => {console.log(bin) 
                res.status(200).send(bin)} )
            .catch((error) => {console.log(error, "database problem for all bins")
                res.status(500).send()}) 
            console.log([params.shelve ], "= params.shelve for all bins")
            // '/api/bin/:id/shelf:shelve'

                
    }
};
