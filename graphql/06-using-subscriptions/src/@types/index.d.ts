type OmitObjectType = Omit<Record<string, any>, keyof string>;

type Maybe<T> = T | null;

type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  posts: Array<Post>;
};

type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
};

type Query = {
  __typename?: 'Query';
  getAllPosts: Array<Maybe<Post>>;
  getOnePostById?: Maybe<Post>;
  getAllUsers: Array<Maybe<User>>;
  getOneUserById?: Maybe<User>;
};

type QueryGetOnePostByIdArgs = {
  id: Scalars['ID'];
};

type QueryGetOneUserByIdArgs = {
  id: Scalars['ID'];
};

type Mutation = {
  __typename?: 'Mutation';
  createPostByEmail: Post;
  updatePostById: Post;
  deletePostById?: Maybe<Post>;
  createUserByEmail: User;
  updateUserById: User;
  deleteUserById?: Maybe<User>;
};

type MutationCreatePostByEmailArgs = {
  email?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
};

type MutationUpdatePostByIdArgs = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};

type MutationDeletePostByIdArgs = {
  id: Scalars['ID'];
};

type MutationCreateUserByEmailArgs = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

type MutationUpdateUserByIdArgs = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

type MutationDeleteUserByIdArgs = {
  id: Scalars['ID'];
};
