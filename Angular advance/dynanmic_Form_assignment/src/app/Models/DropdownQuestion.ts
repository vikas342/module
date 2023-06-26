import { Questionmodel } from "./Questionmodel";

export class DropdownQuestion extends Questionmodel<string>{
    override controlType="dropdown";
}
