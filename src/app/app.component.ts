import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Standalone component
  imports: [RouterOutlet, FormsModule],  // ✅ Include FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // ✅ Fixed styleUrls (plural)
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl = "assets/bridgelabz_logo.avif";
  url = "https://www.bridgelabz.com/";
  userName: string = '';  // ✅ Define userName
  nameError: string ='';

  ngOnInit(): void {
    this.title = "Hello from Bridgelabz";
  }

  onClick($event: MouseEvent) {
    console.log("Clicked", $event);
    window.open(this.url, "_blank");
  }
  onInput(){
      console.log("Change event occurred !",this.userName);
      const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;

      if(nameRegex.test(this.userName)){
        this.nameError="";
        return;
      }else{
        this.nameError="Name is incorrect !";
      }
      
  }
}
