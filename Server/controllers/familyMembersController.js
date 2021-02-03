const express = require('express');
let familyMembersLogic = require("../logic/familyMembersLogic");

// creating a new Router object
const router = express.Router();


// ------------------------------ Handling The Family Members's Related Requests ------------------------------ //

router.get('/', async (request, response, next) => {
    try {
        // Attempting to get all the servers
        const allFamilyMembers = await familyMembersLogic.getAllFamilyMembers();

        // Sending the response as JSON to the client
        response.json(allFamilyMembers);
    }

    catch (error) {
        // Handling the error with the Error Handler
        return next(error);
    }
});



module.exports = router;