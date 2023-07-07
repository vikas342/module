import { QuestionBase } from "./Question";



export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';
}
