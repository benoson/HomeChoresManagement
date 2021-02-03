export default class ChoreUtils {
    public constructor() { }


    static validateChoreDescription = (description: any): boolean | Error => {
        if (typeof description === "string") {
            if (description.trim() !== "") {
                return true;
            }
        }
        throw Error("Invalid Description");
    }

    static validateChoreFamilyMember = (familyMember: any): boolean | Error => {
        if (typeof familyMember === "string") {
            if (familyMember.trim() !== "") {
                return true;
            }
        }

        throw Error("Invalid Family Member");
    }
}