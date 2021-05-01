export interface Post {
  identifier: string;
  body?: string;
  title: string;
  slug: string;
  subName: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  sub?: Sub;

  // virtual fields
  url: string;
  voteScore?: number;
  commentCount?: number;
  userVote?: number;
}

export interface User {
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Sub {
  name: string;
  title: string;
  description: string;
  imageUrn: string;
  bannerUrn: string;
  username: string;
  posts: Array<Post>;
  createdAt: string;
  updatedAt: string;

  // Virtual field
  imageUrl: string;
  bannerUrl: string;
  postCount?: number;
}

export interface Comment {
  identifier: string;
  body: string;
  username: string;
  post?: Post;
  createdAt: string;
  updatedAt: string;
  
  // Virtual field
  userVote: number;
  voteScore: number;
}