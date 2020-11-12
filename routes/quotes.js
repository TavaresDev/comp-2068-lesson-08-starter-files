const { index, show, create, update, destroy, search } = require('../controllers/quotes');

module.exports = router => {
    //GET loocalhost:4000/quotes
    router.get('/quotes', index);

    //POST loocalhost:4000/quotes
    router.post('/quotes', create);
    
    //POST loocalhost:4000/quotes/update
    router.post('/quotes/update', update);

    //POST loocalhost:4000/quotes/destroy
    router.post('/quotes/destroy', destroy);

    router.get('/quotes/search', search);

    router.get('/quotes/:id', show);




};
