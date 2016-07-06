

import {ModelBase} from "./ModelBase";
import {MetaModel, MetaProperty, MetaPropertyType} from "../metadata/MetaData";

export class WorkOrderFeedback extends ModelBase {

    public feedbackText : string;
    public isComplete : boolean;
    public numberOfTasks : number;

    constructor(public code : string)
    {
        super();
    }

    static StoreKey : string = 'workOrderFeedbackMetaData';

    static loadMetaData() : MetaModel
    {
        let retMetaModel : MetaModel;

        let metaData = window.localStorage.getItem(WorkOrderFeedback.StoreKey);

        if (!metaData)
        {
            retMetaModel = WorkOrderFeedback.generateDefaultMetaData();
            window.localStorage.setItem(WorkOrderFeedback.StoreKey, JSON.stringify(retMetaModel));
        }
        else
        {
            retMetaModel = JSON.parse(window.localStorage.getItem(WorkOrderFeedback.StoreKey));
        }

        return retMetaModel;
    }


    static generateDefaultMetaData() : MetaModel
    {
        let metaModel = new MetaModel('WorkOrderFeedback');

        let codeProperty = new MetaProperty("code", MetaPropertyType.Text);
        codeProperty.isRequired = true;
        metaModel.properties.push(codeProperty);

        let numberOfTasksProperty = new MetaProperty("numberOfTasks", MetaPropertyType.Number);
        numberOfTasksProperty.isReadOnly = true;
        metaModel.properties.push(numberOfTasksProperty);

        let isCompleteProperty = new MetaProperty("isComplete", MetaPropertyType.Boolean);
        metaModel.properties.push(isCompleteProperty);

        let feedbackTextProperty = new MetaProperty("feedbackText", MetaPropertyType.Text);
        metaModel.properties.push(feedbackTextProperty);

        return metaModel;
    }

}
