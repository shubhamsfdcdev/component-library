import { LightningElement, api } from 'lwc';

export default class PtcCallingChildMethod extends LightningElement {

    sliderValue=5;
    handleSlider(event){
        this.sliderValue = event.target.value;
    }

    @api resetSlider(){
        this.sliderValue = 25;
    }
}