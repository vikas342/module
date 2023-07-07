import { QuestionBase } from "./Question";


export class TextareaQuestion extends QuestionBase<string>{
    override controlType="textarea";
}
