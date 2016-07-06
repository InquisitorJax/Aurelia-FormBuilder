    
    
import {ModelBase} from "./ModelBase";
import {MetaModel, MetaProperty, MetaPropertyType} from './../metadata/MetaData';

export class StaffMember extends ModelBase
{
    constructor(public email : string)
    {
        super();
    }

    public firstName:string;
    public lastName:string;


    static StoreKey : string = 'staffMemberMetaData';

    static loadMetaData() : MetaModel
    {
        let retMetaModel : MetaModel;

        let metaData = window.localStorage.getItem(StaffMember.StoreKey);

        if (!metaData)
        {
            retMetaModel = StaffMember.generateDefaultMetaData();
            window.localStorage.setItem(StaffMember.StoreKey, JSON.stringify(retMetaModel));
        }
        else
        {
            retMetaModel = JSON.parse(window.localStorage.getItem(StaffMember.StoreKey));
        }

        return retMetaModel;
    }

    static generateDefaultMetaData() : MetaModel
    {
        let metaModel = new MetaModel('StaffMember');
        
        let emailProperty = new MetaProperty("email", MetaPropertyType.Text);
        emailProperty.isRequired = true;
        metaModel.properties.push(emailProperty);

        let firstNameProperty = new MetaProperty("firstName", MetaPropertyType.Text);
        metaModel.properties.push(firstNameProperty);

        let lastNameProperty = new MetaProperty("lastName", MetaPropertyType.Text);
        metaModel.properties.push(lastNameProperty);

        return metaModel;
    }
}