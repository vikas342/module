import { InputGenric } from "./question.model";



export class select extends InputGenric<string>{

    override controlType= 'select';
}