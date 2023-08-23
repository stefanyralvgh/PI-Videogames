const { Router } = require('express');
const videogamesRoutes = require('./videogamesRoutes');
const genresRoutes = require('./genresRoutes');


const router = Router();

router.use('/genres', genresRoutes );
router.use('/videogames', videogamesRoutes );


module.exports = router;
