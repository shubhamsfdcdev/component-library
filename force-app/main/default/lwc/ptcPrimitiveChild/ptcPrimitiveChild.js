import { LightningElement, api } from 'lwc';

export default class PtcPrimitiveChild extends LightningElement {

    @api receivedNumberValue;
    @api receivedTextValue;
    @api receivedBooleanValue;
}