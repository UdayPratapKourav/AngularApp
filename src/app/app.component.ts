import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl="assets/bridgelabz_logo.avif";
  url="https://www.bridgelabz.com/"
  ngOnInit():void{
    this.title="Hello form Bridgelabz";
  }
  onClick($event: MouseEvent){
    console.log("Clicked",$event);
    window.open(this.url,"_blank");
    
  }
}
