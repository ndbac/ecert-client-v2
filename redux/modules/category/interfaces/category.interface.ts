export interface ICategory {
  name: string;
  slug: string;
  photoUrl: string;
  userId: string;
  postCount: string;
}

export interface ICategoryState {
  sent: boolean;
  loading: boolean;
  serverErr: string | undefined;
  category: ICategory;
}

// export interface ICategoryGet {
//     searchText: string,
//     page?: number,
//     limit?: number,
//     sort?: boolean,
//     userId: string
// }

export interface ICategoryPost {
  name: string;
  photoUrl: string;
  token: string;
}

// export interface ICategoryUpdate {
//     categoryId: string,
//     token: string,
//     name: string,
//     photoUrl: string
// }

// export interface ICategoryDelete {
//     categoryId: string,
//     token: string
// }
