import { Questionmodel } from "./Questionmodel";


export class CheckboxQuestion extends Questionmodel<string> {
  override controlType = 'checkbox';
}
