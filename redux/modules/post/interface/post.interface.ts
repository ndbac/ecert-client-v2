export interface IPostCard {
  createdAt: string;
  title: string;
  photoUrl: string;
  description: string;
  postId: string;
  categoryId: string;
  userId: string;
}

export interface IPost {
  _id: string;
  postId: string | undefined | string[];
  createdAt: string;
  title: string;
  photoUrl: string;
  description: string;
  userId: string;
  categoryId: string;
}

export interface IPostGet {
  sort?: boolean;
  page?: number;
  limit?: number;
  searchText?: string;
}

export interface IPostRandomGet {
  quantity: number;
}

export interface IPostState {
  post: IPost;
  list: IPost[];
  loading: boolean;
  serverErr: string | undefined;
}
