import { LightningElement } from 'lwc';

export default class CtpChild extends LightningElement {

    handleLastChildBubble(){
        console.log('Bubble child >> handleLastChildBubble');
    }
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