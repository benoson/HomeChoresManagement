const choresDao = require('../dao/choresDao');
const ServerError = require('../errors/server-error');
const ErrorType = require("../errors/error-type");


// -------------- Server's Server Logic Functions -------------- //

const getAllChores = async () => {
    // Retrieving all the vacations from the DAO preset
    const allChores = await choresDao.getAllChores();
    return allChores;
}

const addNewChore = async (newChore) => {

    newChore.creationDate = new Date();

    if (newChore.description.trim() === "") {
        throw new ServerError(ErrorType.INVALID_DESCRIPTION);
    }
    
    else if (newChore.assignedFamilyMember.trim() === "") {
        throw new ServerError(ErrorType.INVALID_FAMILY_MEMBER);
    }

    const addedChore = await choresDao.addNewChore(newChore);
    return addedChore;
}


module.exports = {
    getAllChores,
    addNewChore
};