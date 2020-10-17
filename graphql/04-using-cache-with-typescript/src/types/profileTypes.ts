export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  posts: Array<Post>;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllPosts: Array<Maybe<Post>>;
  getOnePostById?: Maybe<Post>;
  getAllUsers: Array<Maybe<User>>;
  getOneUserById?: Maybe<User>;
};

export type QueryGetOnePostByIdArgs = {
  id: Scalars['ID'];
};

export type QueryGetOneUserByIdArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPostByEmail: Post;
  updatePostById: Post;
  deletePostById?: Maybe<Post>;
  createUserByEmail: User;
  updateUserById: User;
  deleteUserById?: Maybe<User>;
};

export type MutationCreatePostByEmailArgs = {
  email?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
};

export type MutationUpdatePostByIdArgs = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type MutationDeletePostByIdArgs = {
  id: Scalars['ID'];
};

export type MutationCreateUserByEmailArgs = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type MutationUpdateUserByIdArgs = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type MutationDeleteUserByIdArgs = {
  id: Scalars['ID'];
};
