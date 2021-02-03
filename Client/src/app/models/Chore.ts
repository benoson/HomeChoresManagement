export default class Chore {
    public constructor(
        public description: string,
        public assignedFamilyMember: string,
        public creationDate?: string,
        public ID?: number
    ) { }
}