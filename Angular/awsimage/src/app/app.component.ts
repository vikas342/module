import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImageurlService } from './imageurl.service';
import { Url } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'awsimage';
  imageform!:FormGroup
  msg:string=""
  imgFile!:File;
  url='';

  constructor(private fb:FormBuilder,private api:ImageurlService,private hc:HttpClient){}
  ngOnInit() {
  this.imageform=this.fb.group({
    ImageUrl:['']
 })
 }
 newuser(){

   console.log(this.imageform.value);

  const data={
    url:this.url
  }
  console.log(data);

  this.hc.post<string>("https://localhost:7146/api/Values/register",data).subscribe(
    {
      next:(res:string)=>{
console.log(res);

      },
      error:(err)=>{
        console.log(err);

      }
    })

 }

//  newuser(){
  // const form = new FormData();
  // form.append('file',this.imgFile as File)
//   this.api.postimage(form).subscribe({
//     next:(resp:any)=>{



//         console.log(resp);
//         let regData:User=this.registerForm.value;
//         let imgUrl:string=resp.url
//         regData.ProfilePhoto=imgUrl;
//         console.log(regData);
//         this.reg.registerUser(this.registerForm.value).subscribe({
//           next:(resp:any)=>{
//             console.log(resp);
//             this.msg=resp.message
//             this.registerForm.reset()
//             this.imgFile=null
//     },
//     error:(resp:any)=>{
//       alert(resp.message);
//     }
//   });
//     },
//   });
// }

 fileadd(event:any){
  //console.log(event.target.files);

  this.imgFile = event.target.files[0];
  // console.log(this.imgFile);
  const form = new FormData();
  form.append('file',this.imgFile as File)
 // console.log(form);

  this.hc.post<Url>("https://localhost:7146/api/Values/ImageUrl",form).subscribe((res) => {
    this.url=res.url;
    console.log(this.url);

})
// this.imageform.controls['ProfilePhoto'].setValue();
}
}
