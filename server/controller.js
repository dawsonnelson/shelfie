module.exports = {

    // get_inventory: ( req, res, next) => {
    //     let dbInstance = req.app.get('db');

    //     dbInstance.get_inventory() 
    //         .then( inventory => res.status(200).send ( inventory ) )
    //         .catch( err => {
    //             res.status(500).send({errorMessage: "Something bad with getInv"});
    //             console.log(err)
    //         });
    // },

    get_inventory:  function(req, res) {
        req.app.get('db').get_inventory();
        console.log('somehting')
    },

    post_inventory: function(req, res) {

    }
}