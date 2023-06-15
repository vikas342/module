import
{
  DynamicFormModel,
  DynamicCheckboxModel,
  DynamicInputModel,
  DynamicRadioGroupModel

} from "@ng-dynamic-forms/core"


export const My_Form_Model: DynamicFormModel=[

  new DynamicInputModel({

    id:"sampleInput",
    label:"sample Input",
    maxLength:42,
    placeholder:"sample input"
  }),
  new DynamicRadioGroupModel<string>({
    id:"sampleRadio",
    label:"sample Radio",
    options:[
      {
        label:"opt 1",
        value:"opt1"
      },
      {
        label:"opt 2",
        value:"opt2"
      }
    ],
    value:"opt2"

  }),

  new DynamicCheckboxModel({
    id:"samplechechbox",
    label:"check box"
  })
];
