import { Component, OnInit } from '@angular/core';
import { posts } from 'src/app/model/posts.mode';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  userdata: any;

  userposts:posts[]=[];
  constructor(private dataserv: DataService) {}

  ngOnInit(): void {
    this.userdata = this.dataserv.getloggedin_userdetails();


    this.userposts=this.dataserv.userspost;
  }
}
