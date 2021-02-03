const familyMembersDao = require('../dao/familyMembersDao');
const ServerError = require('../errors/server-error');
const ErrorType = require("../errors/error-type");


// -------------- Server's Server Logic Functions -------------- //

const getAllFamilyMembers = async () => {

    // Retrieving all the vacations from the DAO preset
    const allFamilyMembers = await familyMembersDao.getAllFamilyMembers();
    return allFamilyMembers;
}


module.exports = {
    getAllFamilyMembers,
};