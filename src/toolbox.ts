import {MetaModel} from "./metadata/metaData";
import {StaffMember, WorkOrderFeedback} from "./models/Models";
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {ActivateModelMetaDataEvent} from "./events/activateModelMetaDataEvent";
import Sortable = require('Sortable');


@inject(EventAggregator)
export class Toolbox
{
    public metaModels : Array<MetaModel>;
    private ea :EventAggregator;
    private _selectedMetaModel : MetaModel;
    toolboxList : any;

    get selectedMetaModel() : MetaModel
    {
        return this._selectedMetaModel;
    }
    set selectedMetaModel(newMetaModel : MetaModel)
    {
        console.log('... setting SelectedMetaModel: ' + newMetaModel.name);
        this._selectedMetaModel = newMetaModel;
        this.ea.publish(new ActivateModelMetaDataEvent(this._selectedMetaModel));
    }


    constructor(eventAggregator)
    {
        this.ea = eventAggregator;
    }

    attached()
    {
        console.log("Toolbox Attached!");
        
        this.loadMetaData();
    }

    loadMetaData()
    {
        this.metaModels = new Array<MetaModel>();
        let staffMemberData = StaffMember.loadMetaData();
        this.metaModels.push(staffMemberData);
        let workOrderFeedbackMetaData = WorkOrderFeedback.loadMetaData();
        this.metaModels.push(workOrderFeedbackMetaData);

        Sortable.create(this.toolboxList, {
            sort: false,
            group: {
                name: "form",
                pull: 'clone',
                put: false
            }
        });

        console.log("Model MetaData Count:" + this.metaModels.length);
    }
    
    
}