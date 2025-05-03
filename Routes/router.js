const express = require('express');
const myRouter = express.Router();
const mwForEmail = require('../Middleware/emailChecker');
const mwForNumber = require('../Middleware/numberChecker');
const emailsController = require('../Controllers/emailsController');
const numbersController = require('../Controllers/numbersController');



// Routes for Email according to request type :-
// For Post req :
myRouter.post('/email',mwForEmail.mwEmailCheckFunc,emailsController.emailSender);

// For Get req:
myRouter.get('/getEmails',emailsController.allEmails);


// Routes for Number according to request type :-
// For Post req :
myRouter.post('/number',mwForNumber.mwNumCheckFunc,numbersController.numberSender);

// For Get req:
myRouter.get('/getNumbers',numbersController.allNumbers); 



myRouter.get('/', (req, res) => {
    res.send('Welcome to the backend');
});



module.exports = myRouter;