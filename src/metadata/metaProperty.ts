import {MetaPropertyType} from "./metaPropertyType";
/**
 * Created by malcolmj on 7/4/2016.
 */

export class MetaProperty
{
    constructor(public name : string, public type : MetaPropertyType)
    {
    }

    /* NOTE: these should be separated out into property rules */
    public isReadOnly : boolean;
    public isRequired : boolean;
}