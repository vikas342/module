import { QuestionBase } from "./Question";


export class DropdownQuestion extends QuestionBase<string>{
    override controlType="dropdown";
}
