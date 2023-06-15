import { Questionmodel } from "./Questionmodel";


export class TextboxQuestion extends Questionmodel<string> {
  override controlType = 'textbox';
}
