import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {ActivateModelMetaDataEvent} from "./events/activateModelMetaDataEvent";
import {MetaModel} from "./metadata/metaModel";

@inject(EventAggregator)
export class FormTemplate
{
    private ea : EventAggregator;

    constructor(eventAggregator)
    {
        this.ea = eventAggregator;
        this.ea.subscribe(ActivateModelMetaDataEvent, this.activateModelMetaData);
    }


    activateModelMetaData(modelMetaData : MetaModel)
    {
        console.log("Event: activateModelMetaData: " + modelMetaData.name);
    }


}