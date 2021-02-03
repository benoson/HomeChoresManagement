let connection = require("./connection-wrapper");
let ErrorType = require("../errors/error-type");
let ServerError = require("../errors/server-error");


const getAllChores = async () => {
    // Creating the SQL query using Aliases, to get better variables names
    const SQL = `SELECT
                    Chore_ID as ID,
                    Chore_Description as description,
                    DATE_FORMAT(Chore_Creation_Date, '%d/%m/%Y') as creationDate,
                    (SELECT Family_Member_Name FROM family_members WHERE Family_Member_ID = chores.Assigned_Family_Member) as assignedFamilyMember
                FROM
                    chores`;

    try {
        // Sending the SQL query to the 'connection wrapper' preset
        const allChores = await connection.execute(SQL);

        // In case the procedure went well, and we got back data from the DB
        return allChores;
    }

    catch (error) {
        // Technical Error
        throw new ServerError(ErrorType.GENERAL_ERROR, SQL, error);
    }
}

const addNewChore = async (newChore) => {
    // Creating the SQL query using Aliases, to get better variables names
    const SQL = `INSERT INTO chores
                    (Chore_Description, Chore_Creation_Date, Assigned_Family_Member)
                VALUES (?, ?, (SELECT Family_Member_ID FROM family_members WHERE Family_Member_Name = ?))`;

    const parameters = [newChore.description, newChore.creationDate, newChore.assignedFamilyMember];

    try {
        // Sending the SQL query to the 'connection wrapper' preset
        await connection.executeWithParameters(SQL, parameters);

        const addedChoreSQL = `SELECT
                                    Chore_ID as ID,
                                    Chore_Description as description,
                                    DATE_FORMAT(Chore_Creation_Date, '%d/%m/%Y') as creationDate,
                                    (SELECT Family_Member_Name FROM family_members WHERE Family_Member_ID = chores.Assigned_Family_Member) as assignedFamilyMember
                                FROM
                                    chores
                                WHERE
                                    Chore_ID = (SELECT MAX(Chore_ID) FROM chores)`;


        // In case the procedure went well, and we got back data from the DB
        const addedChore = await connection.execute(addedChoreSQL);
        console.log(addedChore[0]);
        return addedChore[0];
    }

    catch (error) {
        // Technical Error
        console.log(error);
        throw new ServerError(ErrorType.GENERAL_ERROR, SQL, error);
    }
}


module.exports = {
    getAllChores,
    addNewChore
};