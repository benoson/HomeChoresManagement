const express = require('express');
let choresLogic = require("../logic/choresLogic");

// creating a new Router object
const router = express.Router();


// ------------------------------ Handling The Chores's Related Requests ------------------------------ //

router.get('/', async (request, response, next) => {
    try {
        // Attempting to get all the chores
        const allChores = await choresLogic.getAllChores();

        // Sending the response as JSON to the client
        response.json(allChores);
    }

    catch (error) {
        // Handling the error with the Error Handler
        return next(error);
    }
});

router.post('/', async (request, response, next) => {

    const newChore = request.body;

    try {
        // Attempting to add a new chore
        const addedChore = await choresLogic.addNewChore(newChore);

        // Sending the response as JSON to the client
        response.json(addedChore);
    }

    catch (error) {
        // Handling the error with the Error Handler
        return next(error);
    }
});


module.exports = router;