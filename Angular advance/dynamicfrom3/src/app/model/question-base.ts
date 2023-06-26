export class QuestionBase<T>{
    value:T|undefined;
    key:string;
    label:string;
    required:boolean;
    order:number;
    controlType:string;
    type:string;
    checkboxs?:{key:string,value:string,checked:false}[];
    options:{key:string, value: string}[];    

    constructor(options:{ value?:T,
        key?:string,
        label?:string,
        required?:boolean,
        order?:number,
        controlType?:string,
        checkboxs?:{key:string,value:string,checked:false}[];
        type?:string,
      
        options?:{key:string, value: string}[];}={})
    {
        {
            this.value=options.value;
            this.key=options.key||'';
            this.label=options.label||'';
            this.required=!!options.required;
            this.order=options.order === undefined ? 1 : options.order;
            this.controlType=options.controlType||'';
           this.checkboxs=options.checkboxs||[];
            this.type=options.type||'';
            this.options =options.options||[];
       }
    }
}