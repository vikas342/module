import { Questionmodel } from "./Questionmodel";


export class TextareaQuestion extends Questionmodel<string>{
    override controlType="textarea";
}
