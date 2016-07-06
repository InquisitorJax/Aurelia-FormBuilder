import {MetaProperty} from "./metaProperty";

export class MetaModel
{
    public properties:Array<MetaProperty>;

    constructor(public name : string)
    {
        this.properties = new Array<MetaProperty>();
    }

}
