import { LightningElement } from 'lwc';

export default class CtpParent extends LightningElement {
    flag=false;
    statusFromChild;
    messageFromChild;

    handleLastParentBubble(){
        console.log('Bubble parent >> handleLastParentBubble');
    }

    showModal(){
        this.flag=true;
    }
    handleCloseFromChild(event){
        console.log('Bubble parent >> handleCloseFromChild modal');
        this.statusFromChild=event.detail.status;
        this.messageFromChild=event.detail.msg; 
        this.flag=false;
    }
}