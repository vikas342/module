import { Injectable } from '@angular/core';
import { Post, Profile } from './model';


@Injectable({
  providedIn: 'root',
})
export class CheckService {
  profiles: Profile[] = [
    {
      username: 'alice123',
      fullName: 'Alice Smith',
      bio: 'Software developer based in San Francisco.',
      profile_image: '../../assets/alice.jpg',
      followers: 1000,
      following: 500,
      posts: [
        {
          title: 'Sunset at Golden Gate Bridge',
          imageUrl:
            'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          caption: 'I never get tired of this view. #sanfrancisco #goldenhour',
        },
        {
          title: 'Coffee and code',
          imageUrl:
            'https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          caption:
            'Starting my day with some coding and caffeine. ☕️💻 #programmerlife',
        },
      ],
    },
    {
      username: 'bobsmith',
      fullName: 'Bob Smith',
      bio: 'Photographer and traveler.',
      profile_image: '../../assets/bob.jpg',

      followers: 5000,
      following: 100,
      posts: [
        {
          title: 'Exploring the Grand Canyon',
          imageUrl:
            'https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
          caption:
            "One of the most breathtaking views I've ever seen. #travelphotography #naturelovers",
        },
        {
          title: 'Street art in Berlin',
          imageUrl:
            'https://images.unsplash.com/photo-1538991383142-36c4edeaffde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
          caption:
            'So much creativity and color in this city. #streetart #berlin',
        },
      ],
    },
    {
      username: 'charliecodes',
      fullName: 'Charlie Lee',
      bio: 'Front-end developer and design enthusiast.',
      profile_image: '../../assets/charlie.jpg',

      followers: 2000,
      following: 1000,
      posts: [
        {
          title: 'Designing a new app',
          imageUrl:
            'https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80',
          caption:
            'Sketching out some wireframes for a new project. #designthinking #uiux',
        },
        {
          title: 'Building a responsive website',
          imageUrl:
            'https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          caption:
            'Making sure my site looks good on all devices. #webdevelopment #responsivedesign',
        },
      ],
    },
    {
      username: 'davidfitness',
      fullName: 'David Lee',
      bio: 'Fitness enthusiast and personal trainer.',
      profile_image: '../../assets/david.jpg',

      followers: 10000,
      following: 500,
      posts: [
        {
          title: 'Chest day at the gym',
          imageUrl:
            'https://images.unsplash.com/photo-1453060590797-2d5f419b54cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          caption:
            "Feeling the burn but it's worth it. 💪🏋️‍♂️ #fitnessmotivation #workout",
        },
        {
          title: 'Healthy meal prep',
          imageUrl:
            'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          caption:
            'Fueling my body with nutritious food. #healthylifestyle #mealprep',
        },
      ],
    },
    {
      username: 'eveart',
      fullName: 'Eve Kim',
      bio: 'Visual artist and illustrator.',
      profile_image: '../../assets/eve.jpg',

      followers: 500,
      following: 200,
      posts: [
        {
          title: 'Watercolor portrait',
          imageUrl:
            'https://images.unsplash.com/photo-1549989317-6f14743af1bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          caption:
            'Experimenting with a new technique. #watercolorpainting #portrait',
        },
        {
          title: 'Inktober day 5',
          imageUrl:
            'https://images.unsplash.com/photo-1532983330958-4b32bbe9bb0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          caption:
            'Drawing something new every day this month. #inktober #illustration',
        },
      ],
    },
  ];

  user = [
    //   {
    //   name:'vikas',
    //   password:'vikas01'
    // },
    // {
    //   name:'vinit',
    //   password:'vinit01'
    // }
    // ,
    {
      name: 'alice123',
      password: 'alice123',
    },
    {
      name: 'bobsmith',
      password: 'bobsmith',
    },
    {
      name: 'charliecodes',
      password: 'charliecodes',
    },
    {
      name: 'davidfitness',
      password: 'davidfitness',
    },
    {
      name: 'eveart',
      password: 'eveart',
    },
  ];

 //status:boolean=true;
status: boolean = false;

  constructor() {}

  check(name: string, password: string) {
    for (let i of this.user) {
      if (i.name == name && i.password == password) {
        console.log('valid user');
        this.status = true;
        break;
      }

    }
  }
  // isloggedin(){
  //   return this.status
  // }

  userdata: Profile[] = [];
  get_userdata(username: string) {
    for (let i of this.profiles) {
      if (username == i.username) {
        this.userdata.push(i);


        break;
      }
    }
    console.log('login user data');

    console.log(this.userdata)
  }

  feeds: Profile[] = [];

  get_posts(username: string) {
    for (let i of this.profiles) {
      if (username != i.username) {
        this.feeds.push(i);
      }
    }
    console.log('feed data');

    console.log(this.feeds);
  }
}
