import { LightningElement } from 'lwc';

export default class CtpChild extends LightningElement {

    closeModal(){
        const myEvent = new CustomEvent('close', {
            bubbles : true,
            detail : {
                status : "Success",
                msg : "Modal Closed!!"
            } 
        });
        console.log('Bubble child >> close modal');
        this.dispatchEvent(myEvent);
    }
}