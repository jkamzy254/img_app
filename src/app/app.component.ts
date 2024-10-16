import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormsService } from './forms.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'img_app';
  model!: File;
  imglink: string = '';

  constructor(private formsService: FormsService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  onFileChange(e: any){
    this.model = e.target.files[0];
  }

  onSubmit(){
    const updateImg = {
      next: (x: any) => {
        console.log("Pic added");
      },
      error: (e: any) => {
        console.log(e)
      }
    };
    // console.log(this.model);
    this.formsService.uploadImg(this.model).subscribe((res: any)=> {
      this.imglink = res.imglink;
      // console.log(res);
    })
  }
}
