import { QuestionBase } from "./Question";


export class SelectQuestion extends QuestionBase<string> {
  override controlType = 'select';
}
