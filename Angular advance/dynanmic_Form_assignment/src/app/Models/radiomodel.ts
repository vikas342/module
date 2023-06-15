import { Questionmodel } from "./Questionmodel";


export class RadioQuestion extends Questionmodel<string> {
  override controlType = 'textbox';
}
