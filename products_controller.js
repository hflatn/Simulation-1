module.exports = {
    create: ( req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
         const num = Number(params.id)
    
        dbInstance.add_bin([params.id, params.shelve, req.body.name, req.body.value])
            .then( () => res.status(200).send() )
            .catch( (err) => { (console.log(err, "create error"))
            res.status(500).send()} )
            console.log([params.shelve, params.id, req.body])
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
         const num = Number(params.id)
    
        dbInstance.update_bin([num, params.shelve, req.body.name, req.body.value])
            .then( () => res.status(200).send() )
            .catch( (err) => { (console.log(err, "update error"))
            res.status(500).send()} )
            console.log([params.id, req.body])
    },

    delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.delete_bin([params.id, params.shelve])
        .then( () => res.status(200).send() )
        .catch( (err) => { (console.log(err, "delete error"))
            res.status(500).send()} )
            console.log([])
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
