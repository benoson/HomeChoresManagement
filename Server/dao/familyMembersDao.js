let connection = require("./connection-wrapper");
let ErrorType = require("../errors/error-type");
let ServerError = require("../errors/server-error");


const getAllFamilyMembers = async () => {

    // Creating the SQL query using Aliases, to get better variables names

    const SQL = `SELECT
                    Family_Member_ID as ID,
                    Family_Member_Name as name,
                    Family_Member_Nickname as nickname,
                    Family_Member_Description as description
                FROM
                    family_members`;

    try {
        // Sending the SQL query to the 'connection wrapper' preset
        const allFamilyMembers = await connection.execute(SQL);

        // In case the procedure went well, and we got back data from the DB
        return allFamilyMembers;
    }

    catch (error) {
        // Technical Error
        throw new ServerError(ErrorType.GENERAL_ERROR, SQL, error);
    }
}


module.exports = {
    getAllFamilyMembers
};