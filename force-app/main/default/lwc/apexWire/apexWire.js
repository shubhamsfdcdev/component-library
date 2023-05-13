import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/LWCApex.getAccounts';

export default class ApexWire extends LightningElement {

    //Wire as Property
    @wire(getAccounts)
    accounts

    //Wire as Function
    accountsList
    @wire(getAccounts)
    accountsHandler({data, error}){
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
}