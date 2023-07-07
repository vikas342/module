import { QuestionBase } from "./Question";



export class RadioQuestion extends QuestionBase<string> {
  override controlType = 'radio';
}
