import { QuestionBase } from "./Question";


export class CheckboxQuestion extends QuestionBase<string> {
  override controlType = 'checkbox';
}
