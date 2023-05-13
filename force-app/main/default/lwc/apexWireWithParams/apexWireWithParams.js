import { LightningElement, wire } from 'lwc';
import getAccountsWithParams from '@salesforce/apex/LWCApex.getAccountsWithParams';

export default class ApexWireWithParams extends LightningElement {
    
    get typeOptions(){
        return[
            {label:"Customer - channel", value:"Customer - channel"},
            {label:"Customer - Direct", value:"Customer - Direct"}
        ]
    }

    //Wire with Parameter as Property
    selectedType
    @wire(getAccountsWithParams, {type:'$selectedType'})
    accounts

    changeHandler(event){
        this.selectedType = event.target.value;
    }
    
    //Wire with Parameter as Function
    selectedTypeWithParams
    accountsList
    @wire(getAccountsWithParams, {type:'$selectedTypeWithParams'})
    accountsHandler({data,error}){
        if(data){
            this.accountsList = data.map(item=>{
                let newType = item.Type === 'Customer - Channel' ? 'Channel' :
                item.Type === 'Customer - Direct' ? 'Direct':'----'
                return {...item, newType}
            })
        }
        if(error){
            console.error(error)
        }
    }

    changeHandlerWithParams(event){
        this.selectedTypeWithParams = event.target.value;
    }
}