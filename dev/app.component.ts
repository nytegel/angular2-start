import {Component} from 'angular2/core';


@Component ({
    selector: 'my-app',
    template: `
        <h1>Hello World {{name}} </h1>
        This is the start of an <span [class.red]="changeColor.value === 'yes'" > awesome project </span>
        <br>
        <input type="text" #changeColor (keyup)=0 />
    `,
    styleUrls: ['../src/css/styles.css']
})

export class AppComponent  {
    name = "Nigel";
}