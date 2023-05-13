import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/LWCApex.getAccounts';
import getAccountsWithParams from '@salesforce/apex/LWCApex.getAccountsWithParams';

export default class ApexImperative extends LightningElement {
    
    //Apex Imperative
    accounts
    clickHandler(){
        getAccounts()
        .then((result)=>{
            this.accounts = result
        }).catch(error=>{
            console.error(error)
        })
    }

    //Apex Imperative with Parameters
    accountList

    get typeOptions(){
        return[
            {label:"Customer - channel", value:"Customer - channel"},
            {label:"Customer - Direct", value:"Customer - Direct"}
        ]
    }

    changeHandler(event){
        this.selectedType = event.target.value;
        getAccountsWithParams({type : this.selectedType})
        .then((result)=>{
            this.accountList = result
        }).catch(error=>{
            console.error(error)
        })
    }
}