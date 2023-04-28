export interface Post {
  title: string;
  imageUrl: string;
  caption: string;
}

export interface Profile {
  username: string;
  fullName: string;
  profile_image:string
  bio: string;
  followers: number;
  following: number;
  posts: Post[];
}
