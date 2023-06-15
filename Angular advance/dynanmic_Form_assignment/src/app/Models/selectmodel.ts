import { Questionmodel } from "./Questionmodel";


export class SelectQuestion extends Questionmodel<string> {
  override controlType = 'select';
}
