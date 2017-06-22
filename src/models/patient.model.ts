export class PatientModel {
    public id?: number;
    public name: string;
    public date_of_birth: string;

    constructor(){
        this.name = "Annie";
        this.date_of_birth = "2017/12/12";
    }
}
