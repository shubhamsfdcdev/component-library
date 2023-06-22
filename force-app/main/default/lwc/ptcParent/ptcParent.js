import { LightningElement } from 'lwc';

export default class PtcParent extends LightningElement {

    //Parent To Child communication using NON PRIMITIVE Data Type
    carouselObj = [
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description : "First card description."
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description : "Second card description."
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Third Card",
            description : "Third card description."
        }
    ]

    // Parent To Child communication on Action At Parent
    progressBarValue = 0;
    handleInput(event){
        this.progressBarValue = event.target.value;
    }
}