import { InputGenric } from "./question.model";



export class radio extends InputGenric<string>{

    override controlType= 'radio';
}