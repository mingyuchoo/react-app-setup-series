import { GraphQLResolveInfo } from "graphql";
type Maybe<T> = T | null;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

type AuthPayload = {
  __typename?: "AuthPayload";
  user: User;
  token: Scalars["String"];
};

type Mutation = {
  __typename?: "Mutation";
  createPostByEmail: Post;
  updatePostById: Post;
  deletePostById?: Maybe<Post>;
  createUserByEmail: User;
  updateUserById: User;
  deleteUserById?: Maybe<User>;
  githubAuth: AuthPayload;
};

type MutationCreatePostByEmailArgs = {
  email?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  content?: Maybe<Scalars["String"]>;
};

type MutationUpdatePostByIdArgs = {
  id?: Maybe<Scalars["ID"]>;
  title: Scalars["String"];
  content?: Maybe<Scalars["String"]>;
  published?: Maybe<Scalars["Boolean"]>;
};

type MutationDeletePostByIdArgs = {
  id: Scalars["ID"];
};

type MutationCreateUserByEmailArgs = {
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

type MutationUpdateUserByIdArgs = {
  id?: Maybe<Scalars["ID"]>;
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

type MutationDeleteUserByIdArgs = {
  id: Scalars["ID"];
};

type MutationGithubAuthArgs = {
  code: Scalars["String"];
};

type Post = {
  __typename?: "Post";
  author?: Maybe<User>;
  content?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  published: Scalars["Boolean"];
  title: Scalars["String"];
};

type Query = {
  __typename?: "Query";
  getAllPosts: Array<Maybe<Post>>;
  getOnePostById?: Maybe<Post>;
  getAllUsers: Array<Maybe<User>>;
  getOneUserById?: Maybe<User>;
};

type QueryGetOnePostByIdArgs = {
  id: Scalars["ID"];
};

type QueryGetOneUserByIdArgs = {
  id: Scalars["ID"];
};

type Subscription = {
  __typename?: "Subscription";
  newUserJoined: User;
};

type User = {
  __typename?: "User";
  email: Scalars["String"];
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  posts: Array<Post>;
};

type ResolverTypeWrapper<T> = Promise<T> | T;

type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

type NextResolverFn<T> = () => Promise<T>;

type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
type ResolversTypes = {
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Mutation: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Post: ResolverTypeWrapper<Post>;
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
type ResolversParentTypes = {
  AuthPayload: AuthPayload;
  String: Scalars["String"];
  Mutation: {};
  ID: Scalars["ID"];
  Boolean: Scalars["Boolean"];
  Post: Post;
  Query: {};
  Subscription: {};
  User: User;
};

type AuthPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AuthPayload"] = ResolversParentTypes["AuthPayload"]
> = {
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createPostByEmail?: Resolver<
    ResolversTypes["Post"],
    ParentType,
    ContextType,
    RequireFields<MutationCreatePostByEmailArgs, "title">
  >;
  updatePostById?: Resolver<
    ResolversTypes["Post"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePostByIdArgs, "title">
  >;
  deletePostById?: Resolver<
    Maybe<ResolversTypes["Post"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeletePostByIdArgs, "id">
  >;
  createUserByEmail?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserByEmailArgs, never>
  >;
  updateUserById?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserByIdArgs, never>
  >;
  deleteUserById?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserByIdArgs, "id">
  >;
  githubAuth?: Resolver<
    ResolversTypes["AuthPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationGithubAuthArgs, "code">
  >;
};

type PostResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Post"] = ResolversParentTypes["Post"]
> = {
  author?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  published?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  getAllPosts?: Resolver<Array<Maybe<ResolversTypes["Post"]>>, ParentType, ContextType>;
  getOnePostById?: Resolver<
    Maybe<ResolversTypes["Post"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetOnePostByIdArgs, "id">
  >;
  getAllUsers?: Resolver<Array<Maybe<ResolversTypes["User"]>>, ParentType, ContextType>;
  getOneUserById?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetOneUserByIdArgs, "id">
  >;
};

type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"]
> = {
  newUserJoined?: SubscriptionResolver<ResolversTypes["User"], "newUserJoined", ParentType, ContextType>;
};

type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes["Post"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type Resolvers<ContextType = any> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
type IResolvers<ContextType = any> = Resolvers<ContextType>;
