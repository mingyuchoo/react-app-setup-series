import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";
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
  /** Date custom scalar type */
  DateTime: any;
  /** Json custom scalar type */
  Json: any;
};

type AggregateComment = {
  __typename?: "AggregateComment";
  count?: Maybe<CommentCountAggregateOutputType>;
  avg?: Maybe<CommentAvgAggregateOutputType>;
  sum?: Maybe<CommentSumAggregateOutputType>;
  min?: Maybe<CommentMinAggregateOutputType>;
  max?: Maybe<CommentMaxAggregateOutputType>;
};

type AggregateGroup = {
  __typename?: "AggregateGroup";
  count?: Maybe<GroupCountAggregateOutputType>;
  avg?: Maybe<GroupAvgAggregateOutputType>;
  sum?: Maybe<GroupSumAggregateOutputType>;
  min?: Maybe<GroupMinAggregateOutputType>;
  max?: Maybe<GroupMaxAggregateOutputType>;
};

type AggregatePost = {
  __typename?: "AggregatePost";
  count?: Maybe<PostCountAggregateOutputType>;
  avg?: Maybe<PostAvgAggregateOutputType>;
  sum?: Maybe<PostSumAggregateOutputType>;
  min?: Maybe<PostMinAggregateOutputType>;
  max?: Maybe<PostMaxAggregateOutputType>;
};

type AggregateProfile = {
  __typename?: "AggregateProfile";
  count?: Maybe<ProfileCountAggregateOutputType>;
  avg?: Maybe<ProfileAvgAggregateOutputType>;
  sum?: Maybe<ProfileSumAggregateOutputType>;
  min?: Maybe<ProfileMinAggregateOutputType>;
  max?: Maybe<ProfileMaxAggregateOutputType>;
};

type AggregateUser = {
  __typename?: "AggregateUser";
  count?: Maybe<UserCountAggregateOutputType>;
  avg?: Maybe<UserAvgAggregateOutputType>;
  sum?: Maybe<UserSumAggregateOutputType>;
  min?: Maybe<UserMinAggregateOutputType>;
  max?: Maybe<UserMaxAggregateOutputType>;
};

type BatchPayload = {
  __typename?: "BatchPayload";
  count: Scalars["Int"];
};

type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars["Boolean"]>;
};

type BoolFilter = {
  equals?: Maybe<Scalars["Boolean"]>;
  not?: Maybe<NestedBoolFilter>;
};

type Comment = {
  __typename?: "Comment";
  id: Scalars["Int"];
  contain: Scalars["String"];
  post: Post;
  postId: Scalars["Int"];
  author?: Maybe<User>;
  authorId?: Maybe<Scalars["Int"]>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

type CommentAvgAggregateOutputType = {
  __typename?: "CommentAvgAggregateOutputType";
  id: Scalars["Float"];
  postId: Scalars["Float"];
  authorId?: Maybe<Scalars["Float"]>;
};

type CommentCountAggregateOutputType = {
  __typename?: "CommentCountAggregateOutputType";
  id: Scalars["Int"];
  contain?: Maybe<Scalars["Int"]>;
  postId: Scalars["Int"];
  authorId?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  _all: Scalars["Int"];
};

type CommentCreateInput = {
  contain: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  post: PostCreateOneWithoutCommentsInput;
  author?: Maybe<UserCreateOneWithoutCommentsInput>;
};

type CommentCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<Maybe<CommentCreateWithoutAuthorInput>>>;
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutauthorInput>>>;
};

type CommentCreateManyWithoutPostInput = {
  create?: Maybe<Array<Maybe<CommentCreateWithoutPostInput>>>;
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutpostInput>>>;
};

type CommentCreateOrConnectWithoutauthorInput = {
  where: CommentWhereUniqueInput;
  create: CommentCreateWithoutAuthorInput;
};

type CommentCreateOrConnectWithoutpostInput = {
  where: CommentWhereUniqueInput;
  create: CommentCreateWithoutPostInput;
};

type CommentCreateWithoutAuthorInput = {
  contain: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  post: PostCreateOneWithoutCommentsInput;
};

type CommentCreateWithoutPostInput = {
  contain: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  author?: Maybe<UserCreateOneWithoutCommentsInput>;
};

type CommentListRelationFilter = {
  every?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
};

type CommentMaxAggregateOutputType = {
  __typename?: "CommentMaxAggregateOutputType";
  id: Scalars["Int"];
  contain?: Maybe<Scalars["String"]>;
  postId: Scalars["Int"];
  authorId?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

type CommentMinAggregateOutputType = {
  __typename?: "CommentMinAggregateOutputType";
  id: Scalars["Int"];
  contain?: Maybe<Scalars["String"]>;
  postId: Scalars["Int"];
  authorId?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

type CommentOrderByInput = {
  id?: Maybe<SortOrder>;
  contain?: Maybe<SortOrder>;
  postId?: Maybe<SortOrder>;
  authorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

enum CommentScalarFieldEnum {
  Id = "id",
  Contain = "contain",
  PostId = "postId",
  AuthorId = "authorId",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
}

type CommentScalarWhereInput = {
  AND?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  id?: Maybe<IntFilter>;
  contain?: Maybe<StringFilter>;
  postId?: Maybe<IntFilter>;
  authorId?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

type CommentSumAggregateOutputType = {
  __typename?: "CommentSumAggregateOutputType";
  id: Scalars["Int"];
  postId: Scalars["Int"];
  authorId?: Maybe<Scalars["Int"]>;
};

type CommentUpdateInput = {
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
  author?: Maybe<UserUpdateOneWithoutCommentsInput>;
};

type CommentUpdateManyMutationInput = {
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

type CommentUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<Maybe<CommentCreateWithoutAuthorInput>>>;
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CommentUpdateWithWhereUniqueWithoutAuthorInput>>>;
  updateMany?: Maybe<Array<Maybe<CommentUpdateManyWithWhereWithoutAuthorInput>>>;
  deleteMany?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<CommentUpsertWithWhereUniqueWithoutAuthorInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutauthorInput>>>;
};

type CommentUpdateManyWithoutPostInput = {
  create?: Maybe<Array<Maybe<CommentCreateWithoutPostInput>>>;
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CommentUpdateWithWhereUniqueWithoutPostInput>>>;
  updateMany?: Maybe<Array<Maybe<CommentUpdateManyWithWhereWithoutPostInput>>>;
  deleteMany?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<CommentUpsertWithWhereUniqueWithoutPostInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutpostInput>>>;
};

type CommentUpdateManyWithWhereWithoutAuthorInput = {
  where: CommentScalarWhereInput;
  data: CommentUpdateManyMutationInput;
};

type CommentUpdateManyWithWhereWithoutPostInput = {
  where: CommentScalarWhereInput;
  data: CommentUpdateManyMutationInput;
};

type CommentUpdateWithoutAuthorInput = {
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
};

type CommentUpdateWithoutPostInput = {
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneWithoutCommentsInput>;
};

type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutAuthorInput;
};

type CommentUpdateWithWhereUniqueWithoutPostInput = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutPostInput;
};

type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
  where: CommentWhereUniqueInput;
  update: CommentUpdateWithoutAuthorInput;
  create: CommentCreateWithoutAuthorInput;
};

type CommentUpsertWithWhereUniqueWithoutPostInput = {
  where: CommentWhereUniqueInput;
  update: CommentUpdateWithoutPostInput;
  create: CommentCreateWithoutPostInput;
};

type CommentWhereInput = {
  AND?: Maybe<Array<Maybe<CommentWhereInput>>>;
  OR?: Maybe<Array<Maybe<CommentWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CommentWhereInput>>>;
  id?: Maybe<IntFilter>;
  contain?: Maybe<StringFilter>;
  post?: Maybe<PostWhereInput>;
  postId?: Maybe<IntFilter>;
  author?: Maybe<UserWhereInput>;
  authorId?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

type CommentWhereUniqueInput = {
  id?: Maybe<Scalars["Int"]>;
};

type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars["DateTime"]>;
};

type DateTimeFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<NestedDateTimeFilter>;
};

type Group = {
  __typename?: "Group";
  id: Scalars["Int"];
  name: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  users: Array<User>;
};

type GroupUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  distinct?: Maybe<UserScalarFieldEnum>;
};

type GroupAvgAggregateOutputType = {
  __typename?: "GroupAvgAggregateOutputType";
  id: Scalars["Float"];
};

type GroupCountAggregateOutputType = {
  __typename?: "GroupCountAggregateOutputType";
  id: Scalars["Int"];
  name?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  _all: Scalars["Int"];
};

type GroupCreateInput = {
  name: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  users?: Maybe<UserCreateManyWithoutGroupInput>;
};

type GroupCreateOneWithoutUsersInput = {
  create?: Maybe<GroupCreateWithoutUsersInput>;
  connect?: Maybe<GroupWhereUniqueInput>;
  connectOrCreate?: Maybe<GroupCreateOrConnectWithoutusersInput>;
};

type GroupCreateOrConnectWithoutusersInput = {
  where: GroupWhereUniqueInput;
  create: GroupCreateWithoutUsersInput;
};

type GroupCreateWithoutUsersInput = {
  name: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

type GroupMaxAggregateOutputType = {
  __typename?: "GroupMaxAggregateOutputType";
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

type GroupMinAggregateOutputType = {
  __typename?: "GroupMinAggregateOutputType";
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

type GroupOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

type GroupRelationFilter = {
  is?: Maybe<GroupWhereInput>;
  isNot?: Maybe<GroupWhereInput>;
};

enum GroupScalarFieldEnum {
  Id = "id",
  Name = "name",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
}

type GroupSumAggregateOutputType = {
  __typename?: "GroupSumAggregateOutputType";
  id: Scalars["Int"];
};

type GroupUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  users?: Maybe<UserUpdateManyWithoutGroupInput>;
};

type GroupUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

type GroupUpdateOneWithoutUsersInput = {
  create?: Maybe<GroupCreateWithoutUsersInput>;
  connect?: Maybe<GroupWhereUniqueInput>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  delete?: Maybe<Scalars["Boolean"]>;
  update?: Maybe<GroupUpdateWithoutUsersInput>;
  upsert?: Maybe<GroupUpsertWithoutUsersInput>;
  connectOrCreate?: Maybe<GroupCreateOrConnectWithoutusersInput>;
};

type GroupUpdateWithoutUsersInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

type GroupUpsertWithoutUsersInput = {
  update: GroupUpdateWithoutUsersInput;
  create: GroupCreateWithoutUsersInput;
};

type GroupWhereInput = {
  AND?: Maybe<Array<Maybe<GroupWhereInput>>>;
  OR?: Maybe<Array<Maybe<GroupWhereInput>>>;
  NOT?: Maybe<Array<Maybe<GroupWhereInput>>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  users?: Maybe<UserListRelationFilter>;
};

type GroupWhereUniqueInput = {
  id?: Maybe<Scalars["Int"]>;
};

type IntFilter = {
  equals?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  not?: Maybe<NestedIntFilter>;
};

type IntNullableFilter = {
  equals?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  not?: Maybe<NestedIntNullableFilter>;
};

type Mutation = {
  __typename?: "Mutation";
  createOneComment: Comment;
  deleteManyComment: BatchPayload;
  deleteOneComment?: Maybe<Comment>;
  updateManyComment: BatchPayload;
  updateOneComment: Comment;
  upsertOneComment: Comment;
  createOneGroup: Group;
  deleteManyGroup: BatchPayload;
  deleteOneGroup?: Maybe<Group>;
  updateManyGroup: BatchPayload;
  updateOneGroup: Group;
  upsertOneGroup: Group;
  createOnePost: Post;
  deleteManyPost: BatchPayload;
  deleteOnePost?: Maybe<Post>;
  updateManyPost: BatchPayload;
  updateOnePost: Post;
  upsertOnePost: Post;
  createOneProfile: Profile;
  deleteManyProfile: BatchPayload;
  deleteOneProfile?: Maybe<Profile>;
  updateManyProfile: BatchPayload;
  updateOneProfile: Profile;
  upsertOneProfile: Profile;
  createOneUser: User;
  deleteManyUser: BatchPayload;
  deleteOneUser?: Maybe<User>;
  updateManyUser: BatchPayload;
  updateOneUser: User;
  upsertOneUser: User;
};

type MutationCreateOneCommentArgs = {
  data: CommentCreateInput;
};

type MutationDeleteManyCommentArgs = {
  where?: Maybe<CommentWhereInput>;
};

type MutationDeleteOneCommentArgs = {
  where: CommentWhereUniqueInput;
};

type MutationUpdateManyCommentArgs = {
  where?: Maybe<CommentWhereInput>;
  data: CommentUpdateManyMutationInput;
};

type MutationUpdateOneCommentArgs = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateInput;
};

type MutationUpsertOneCommentArgs = {
  where: CommentWhereUniqueInput;
  create: CommentCreateInput;
  update: CommentUpdateInput;
};

type MutationCreateOneGroupArgs = {
  data: GroupCreateInput;
};

type MutationDeleteManyGroupArgs = {
  where?: Maybe<GroupWhereInput>;
};

type MutationDeleteOneGroupArgs = {
  where: GroupWhereUniqueInput;
};

type MutationUpdateManyGroupArgs = {
  where?: Maybe<GroupWhereInput>;
  data: GroupUpdateManyMutationInput;
};

type MutationUpdateOneGroupArgs = {
  where: GroupWhereUniqueInput;
  data: GroupUpdateInput;
};

type MutationUpsertOneGroupArgs = {
  where: GroupWhereUniqueInput;
  create: GroupCreateInput;
  update: GroupUpdateInput;
};

type MutationCreateOnePostArgs = {
  data: PostCreateInput;
};

type MutationDeleteManyPostArgs = {
  where?: Maybe<PostWhereInput>;
};

type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};

type MutationUpdateManyPostArgs = {
  where?: Maybe<PostWhereInput>;
  data: PostUpdateManyMutationInput;
};

type MutationUpdateOnePostArgs = {
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
};

type MutationUpsertOnePostArgs = {
  where: PostWhereUniqueInput;
  create: PostCreateInput;
  update: PostUpdateInput;
};

type MutationCreateOneProfileArgs = {
  data: ProfileCreateInput;
};

type MutationDeleteManyProfileArgs = {
  where?: Maybe<ProfileWhereInput>;
};

type MutationDeleteOneProfileArgs = {
  where: ProfileWhereUniqueInput;
};

type MutationUpdateManyProfileArgs = {
  where?: Maybe<ProfileWhereInput>;
  data: ProfileUpdateManyMutationInput;
};

type MutationUpdateOneProfileArgs = {
  where: ProfileWhereUniqueInput;
  data: ProfileUpdateInput;
};

type MutationUpsertOneProfileArgs = {
  where: ProfileWhereUniqueInput;
  create: ProfileCreateInput;
  update: ProfileUpdateInput;
};

type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};

type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};

type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};

type MutationUpdateManyUserArgs = {
  where?: Maybe<UserWhereInput>;
  data: UserUpdateManyMutationInput;
};

type MutationUpdateOneUserArgs = {
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
};

type MutationUpsertOneUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};

type NestedBoolFilter = {
  equals?: Maybe<Scalars["Boolean"]>;
  not?: Maybe<NestedBoolFilter>;
};

type NestedDateTimeFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<NestedDateTimeFilter>;
};

type NestedIntFilter = {
  equals?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  not?: Maybe<NestedIntFilter>;
};

type NestedIntNullableFilter = {
  equals?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  not?: Maybe<NestedIntNullableFilter>;
};

type NestedStringFilter = {
  equals?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  startsWith?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  not?: Maybe<NestedStringFilter>;
};

type NestedStringNullableFilter = {
  equals?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  startsWith?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  not?: Maybe<NestedStringNullableFilter>;
};

type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars["String"]>;
};

type Post = {
  __typename?: "Post";
  id: Scalars["Int"];
  published: Scalars["Boolean"];
  title: Scalars["String"];
  author?: Maybe<User>;
  authorId?: Maybe<Scalars["Int"]>;
  comments: Array<Comment>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

type PostCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  take?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  distinct?: Maybe<CommentScalarFieldEnum>;
};

type PostAvgAggregateOutputType = {
  __typename?: "PostAvgAggregateOutputType";
  id: Scalars["Float"];
  authorId?: Maybe<Scalars["Float"]>;
};

type PostCountAggregateOutputType = {
  __typename?: "PostCountAggregateOutputType";
  id: Scalars["Int"];
  published?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["Int"]>;
  authorId?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  _all: Scalars["Int"];
};

type PostCreateInput = {
  published?: Maybe<Scalars["Boolean"]>;
  title: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  author?: Maybe<UserCreateOneWithoutPostsInput>;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
};

type PostCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<Maybe<PostCreateWithoutAuthorInput>>>;
  connect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PostCreateOrConnectWithoutauthorInput>>>;
};

type PostCreateOneWithoutCommentsInput = {
  create?: Maybe<PostCreateWithoutCommentsInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutcommentsInput>;
};

type PostCreateOrConnectWithoutauthorInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutAuthorInput;
};

type PostCreateOrConnectWithoutcommentsInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutCommentsInput;
};

type PostCreateWithoutAuthorInput = {
  published?: Maybe<Scalars["Boolean"]>;
  title: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
};

type PostCreateWithoutCommentsInput = {
  published?: Maybe<Scalars["Boolean"]>;
  title: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  author?: Maybe<UserCreateOneWithoutPostsInput>;
};

type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
};

type PostMaxAggregateOutputType = {
  __typename?: "PostMaxAggregateOutputType";
  id: Scalars["Int"];
  published?: Maybe<Scalars["Boolean"]>;
  title?: Maybe<Scalars["String"]>;
  authorId?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

type PostMinAggregateOutputType = {
  __typename?: "PostMinAggregateOutputType";
  id: Scalars["Int"];
  published?: Maybe<Scalars["Boolean"]>;
  title?: Maybe<Scalars["String"]>;
  authorId?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

type PostOrderByInput = {
  id?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  authorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

type PostRelationFilter = {
  is?: Maybe<PostWhereInput>;
  isNot?: Maybe<PostWhereInput>;
};

enum PostScalarFieldEnum {
  Id = "id",
  Published = "published",
  Title = "title",
  AuthorId = "authorId",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
}

type PostScalarWhereInput = {
  AND?: Maybe<Array<Maybe<PostScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<PostScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<PostScalarWhereInput>>>;
  id?: Maybe<IntFilter>;
  published?: Maybe<BoolFilter>;
  title?: Maybe<StringFilter>;
  authorId?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

type PostSumAggregateOutputType = {
  __typename?: "PostSumAggregateOutputType";
  id: Scalars["Int"];
  authorId?: Maybe<Scalars["Int"]>;
};

type PostUpdateInput = {
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
};

type PostUpdateManyMutationInput = {
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

type PostUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<Maybe<PostCreateWithoutAuthorInput>>>;
  connect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PostUpdateWithWhereUniqueWithoutAuthorInput>>>;
  updateMany?: Maybe<Array<Maybe<PostUpdateManyWithWhereWithoutAuthorInput>>>;
  deleteMany?: Maybe<Array<Maybe<PostScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<PostUpsertWithWhereUniqueWithoutAuthorInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PostCreateOrConnectWithoutauthorInput>>>;
};

type PostUpdateManyWithWhereWithoutAuthorInput = {
  where: PostScalarWhereInput;
  data: PostUpdateManyMutationInput;
};

type PostUpdateOneRequiredWithoutCommentsInput = {
  create?: Maybe<PostCreateWithoutCommentsInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  update?: Maybe<PostUpdateWithoutCommentsInput>;
  upsert?: Maybe<PostUpsertWithoutCommentsInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutcommentsInput>;
};

type PostUpdateWithoutAuthorInput = {
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
};

type PostUpdateWithoutCommentsInput = {
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
};

type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorInput;
};

type PostUpsertWithoutCommentsInput = {
  update: PostUpdateWithoutCommentsInput;
  create: PostCreateWithoutCommentsInput;
};

type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorInput;
  create: PostCreateWithoutAuthorInput;
};

type PostWhereInput = {
  AND?: Maybe<Array<Maybe<PostWhereInput>>>;
  OR?: Maybe<Array<Maybe<PostWhereInput>>>;
  NOT?: Maybe<Array<Maybe<PostWhereInput>>>;
  id?: Maybe<IntFilter>;
  published?: Maybe<BoolFilter>;
  title?: Maybe<StringFilter>;
  author?: Maybe<UserWhereInput>;
  authorId?: Maybe<IntNullableFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

type PostWhereUniqueInput = {
  id?: Maybe<Scalars["Int"]>;
};

type Profile = {
  __typename?: "Profile";
  author: User;
  authorId: Scalars["Int"];
  bio: Scalars["String"];
};

type ProfileAvgAggregateOutputType = {
  __typename?: "ProfileAvgAggregateOutputType";
  authorId: Scalars["Float"];
};

type ProfileCountAggregateOutputType = {
  __typename?: "ProfileCountAggregateOutputType";
  authorId: Scalars["Int"];
  bio?: Maybe<Scalars["Int"]>;
  _all: Scalars["Int"];
};

type ProfileCreateInput = {
  bio: Scalars["String"];
  author: UserCreateOneWithoutProfileInput;
};

type ProfileCreateOneWithoutAuthorInput = {
  create?: Maybe<ProfileCreateWithoutAuthorInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
  connectOrCreate?: Maybe<ProfileCreateOrConnectWithoutauthorInput>;
};

type ProfileCreateOrConnectWithoutauthorInput = {
  where: ProfileWhereUniqueInput;
  create: ProfileCreateWithoutAuthorInput;
};

type ProfileCreateWithoutAuthorInput = {
  bio: Scalars["String"];
};

type ProfileMaxAggregateOutputType = {
  __typename?: "ProfileMaxAggregateOutputType";
  authorId: Scalars["Int"];
  bio?: Maybe<Scalars["String"]>;
};

type ProfileMinAggregateOutputType = {
  __typename?: "ProfileMinAggregateOutputType";
  authorId: Scalars["Int"];
  bio?: Maybe<Scalars["String"]>;
};

type ProfileOrderByInput = {
  authorId?: Maybe<SortOrder>;
  bio?: Maybe<SortOrder>;
};

type ProfileRelationFilter = {
  is?: Maybe<ProfileWhereInput>;
  isNot?: Maybe<ProfileWhereInput>;
};

enum ProfileScalarFieldEnum {
  AuthorId = "authorId",
  Bio = "bio",
}

type ProfileSumAggregateOutputType = {
  __typename?: "ProfileSumAggregateOutputType";
  authorId: Scalars["Int"];
};

type ProfileUpdateInput = {
  bio?: Maybe<StringFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutProfileInput>;
};

type ProfileUpdateManyMutationInput = {
  bio?: Maybe<StringFieldUpdateOperationsInput>;
};

type ProfileUpdateOneWithoutAuthorInput = {
  create?: Maybe<ProfileCreateWithoutAuthorInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  delete?: Maybe<Scalars["Boolean"]>;
  update?: Maybe<ProfileUpdateWithoutAuthorInput>;
  upsert?: Maybe<ProfileUpsertWithoutAuthorInput>;
  connectOrCreate?: Maybe<ProfileCreateOrConnectWithoutauthorInput>;
};

type ProfileUpdateWithoutAuthorInput = {
  bio?: Maybe<StringFieldUpdateOperationsInput>;
};

type ProfileUpsertWithoutAuthorInput = {
  update: ProfileUpdateWithoutAuthorInput;
  create: ProfileCreateWithoutAuthorInput;
};

type ProfileWhereInput = {
  AND?: Maybe<Array<Maybe<ProfileWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProfileWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ProfileWhereInput>>>;
  author?: Maybe<UserWhereInput>;
  authorId?: Maybe<IntFilter>;
  bio?: Maybe<StringFilter>;
};

type ProfileWhereUniqueInput = {
  authorId?: Maybe<Scalars["Int"]>;
};

type Query = {
  __typename?: "Query";
  aggregateComment?: Maybe<AggregateComment>;
  findManyCommentCount: Scalars["Int"];
  findFirstComment?: Maybe<Comment>;
  findManyComment: Array<Comment>;
  findUniqueComment?: Maybe<Comment>;
  aggregateGroup?: Maybe<AggregateGroup>;
  findManyGroupCount: Scalars["Int"];
  findFirstGroup?: Maybe<Group>;
  findManyGroup: Array<Group>;
  findUniqueGroup?: Maybe<Group>;
  aggregatePost?: Maybe<AggregatePost>;
  findManyPostCount: Scalars["Int"];
  findFirstPost?: Maybe<Post>;
  findManyPost: Array<Post>;
  findUniquePost?: Maybe<Post>;
  aggregateProfile?: Maybe<AggregateProfile>;
  findManyProfileCount: Scalars["Int"];
  findFirstProfile?: Maybe<Profile>;
  findManyProfile: Array<Profile>;
  findUniqueProfile?: Maybe<Profile>;
  aggregateUser?: Maybe<AggregateUser>;
  findManyUserCount: Scalars["Int"];
  findFirstUser?: Maybe<User>;
  findManyUser: Array<User>;
  findUniqueUser?: Maybe<User>;
};

type QueryAggregateCommentArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<Maybe<CommentOrderByInput>>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindManyCommentCountArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<Maybe<CommentOrderByInput>>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindFirstCommentArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<Maybe<CommentOrderByInput>>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindManyCommentArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<Maybe<CommentOrderByInput>>>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindUniqueCommentArgs = {
  where?: Maybe<CommentWhereUniqueInput>;
};

type QueryAggregateGroupArgs = {
  where?: Maybe<GroupWhereInput>;
  orderBy?: Maybe<Array<Maybe<GroupOrderByInput>>>;
  cursor?: Maybe<GroupWhereUniqueInput>;
  distinct?: Maybe<GroupScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindManyGroupCountArgs = {
  where?: Maybe<GroupWhereInput>;
  orderBy?: Maybe<Array<Maybe<GroupOrderByInput>>>;
  cursor?: Maybe<GroupWhereUniqueInput>;
  distinct?: Maybe<GroupScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindFirstGroupArgs = {
  where?: Maybe<GroupWhereInput>;
  orderBy?: Maybe<Array<Maybe<GroupOrderByInput>>>;
  cursor?: Maybe<GroupWhereUniqueInput>;
  distinct?: Maybe<GroupScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindManyGroupArgs = {
  where?: Maybe<GroupWhereInput>;
  orderBy?: Maybe<Array<Maybe<GroupOrderByInput>>>;
  cursor?: Maybe<GroupWhereUniqueInput>;
  distinct?: Maybe<GroupScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindUniqueGroupArgs = {
  where?: Maybe<GroupWhereUniqueInput>;
};

type QueryAggregatePostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<Maybe<PostOrderByInput>>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindManyPostCountArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<Maybe<PostOrderByInput>>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindFirstPostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<Maybe<PostOrderByInput>>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindManyPostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<Maybe<PostOrderByInput>>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindUniquePostArgs = {
  where?: Maybe<PostWhereUniqueInput>;
};

type QueryAggregateProfileArgs = {
  where?: Maybe<ProfileWhereInput>;
  orderBy?: Maybe<Array<Maybe<ProfileOrderByInput>>>;
  cursor?: Maybe<ProfileWhereUniqueInput>;
  distinct?: Maybe<ProfileScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindManyProfileCountArgs = {
  where?: Maybe<ProfileWhereInput>;
  orderBy?: Maybe<Array<Maybe<ProfileOrderByInput>>>;
  cursor?: Maybe<ProfileWhereUniqueInput>;
  distinct?: Maybe<ProfileScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindFirstProfileArgs = {
  where?: Maybe<ProfileWhereInput>;
  orderBy?: Maybe<Array<Maybe<ProfileOrderByInput>>>;
  cursor?: Maybe<ProfileWhereUniqueInput>;
  distinct?: Maybe<ProfileScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindManyProfileArgs = {
  where?: Maybe<ProfileWhereInput>;
  orderBy?: Maybe<Array<Maybe<ProfileOrderByInput>>>;
  cursor?: Maybe<ProfileWhereUniqueInput>;
  distinct?: Maybe<ProfileScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindUniqueProfileArgs = {
  where?: Maybe<ProfileWhereUniqueInput>;
};

type QueryAggregateUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindManyUserCountArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindFirstUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindManyUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

type QueryFindUniqueUserArgs = {
  where?: Maybe<UserWhereUniqueInput>;
};

enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars["String"]>;
};

type StringFilter = {
  equals?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  startsWith?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  not?: Maybe<NestedStringFilter>;
};

type StringNullableFilter = {
  equals?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  notIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  startsWith?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  not?: Maybe<NestedStringNullableFilter>;
};

type User = {
  __typename?: "User";
  id: Scalars["Int"];
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  password: Scalars["String"];
  posts: Array<Post>;
  profile?: Maybe<Profile>;
  group?: Maybe<Group>;
  groupId?: Maybe<Scalars["Int"]>;
  comments: Array<Comment>;
};

type UserPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  distinct?: Maybe<PostScalarFieldEnum>;
};

type UserCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  take?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  distinct?: Maybe<CommentScalarFieldEnum>;
};

type UserAvgAggregateOutputType = {
  __typename?: "UserAvgAggregateOutputType";
  id: Scalars["Float"];
  groupId?: Maybe<Scalars["Float"]>;
};

type UserCountAggregateOutputType = {
  __typename?: "UserCountAggregateOutputType";
  id: Scalars["Int"];
  createdAt?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
  password?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["Int"]>;
  _all: Scalars["Int"];
};

type UserCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  password: Scalars["String"];
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
  profile?: Maybe<ProfileCreateOneWithoutAuthorInput>;
  group?: Maybe<GroupCreateOneWithoutUsersInput>;
  comments?: Maybe<CommentCreateManyWithoutAuthorInput>;
};

type UserCreateManyWithoutGroupInput = {
  create?: Maybe<Array<Maybe<UserCreateWithoutGroupInput>>>;
  connect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<UserCreateOrConnectWithoutgroupInput>>>;
};

type UserCreateOneWithoutCommentsInput = {
  create?: Maybe<UserCreateWithoutCommentsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutcommentsInput>;
};

type UserCreateOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutpostsInput>;
};

type UserCreateOneWithoutProfileInput = {
  create?: Maybe<UserCreateWithoutProfileInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutprofileInput>;
};

type UserCreateOrConnectWithoutcommentsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutCommentsInput;
};

type UserCreateOrConnectWithoutgroupInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutGroupInput;
};

type UserCreateOrConnectWithoutpostsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutPostsInput;
};

type UserCreateOrConnectWithoutprofileInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutProfileInput;
};

type UserCreateWithoutCommentsInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  password: Scalars["String"];
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
  profile?: Maybe<ProfileCreateOneWithoutAuthorInput>;
  group?: Maybe<GroupCreateOneWithoutUsersInput>;
};

type UserCreateWithoutGroupInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  password: Scalars["String"];
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
  profile?: Maybe<ProfileCreateOneWithoutAuthorInput>;
  comments?: Maybe<CommentCreateManyWithoutAuthorInput>;
};

type UserCreateWithoutPostsInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  password: Scalars["String"];
  profile?: Maybe<ProfileCreateOneWithoutAuthorInput>;
  group?: Maybe<GroupCreateOneWithoutUsersInput>;
  comments?: Maybe<CommentCreateManyWithoutAuthorInput>;
};

type UserCreateWithoutProfileInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  password: Scalars["String"];
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
  group?: Maybe<GroupCreateOneWithoutUsersInput>;
  comments?: Maybe<CommentCreateManyWithoutAuthorInput>;
};

type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
};

type UserMaxAggregateOutputType = {
  __typename?: "UserMaxAggregateOutputType";
  id: Scalars["Int"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["Int"]>;
};

type UserMinAggregateOutputType = {
  __typename?: "UserMinAggregateOutputType";
  id: Scalars["Int"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["Int"]>;
};

type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  groupId?: Maybe<SortOrder>;
};

type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

enum UserScalarFieldEnum {
  Id = "id",
  CreatedAt = "createdAt",
  Email = "email",
  Name = "name",
  Password = "password",
  GroupId = "groupId",
}

type UserScalarWhereInput = {
  AND?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  password?: Maybe<StringFilter>;
  groupId?: Maybe<IntNullableFilter>;
};

type UserSumAggregateOutputType = {
  __typename?: "UserSumAggregateOutputType";
  id: Scalars["Int"];
  groupId?: Maybe<Scalars["Int"]>;
};

type UserUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  profile?: Maybe<ProfileUpdateOneWithoutAuthorInput>;
  group?: Maybe<GroupUpdateOneWithoutUsersInput>;
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
};

type UserUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

type UserUpdateManyWithoutGroupInput = {
  create?: Maybe<Array<Maybe<UserCreateWithoutGroupInput>>>;
  connect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<UserUpdateWithWhereUniqueWithoutGroupInput>>>;
  updateMany?: Maybe<Array<Maybe<UserUpdateManyWithWhereWithoutGroupInput>>>;
  deleteMany?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  upsert?: Maybe<Array<Maybe<UserUpsertWithWhereUniqueWithoutGroupInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<UserCreateOrConnectWithoutgroupInput>>>;
};

type UserUpdateManyWithWhereWithoutGroupInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyMutationInput;
};

type UserUpdateOneRequiredWithoutProfileInput = {
  create?: Maybe<UserCreateWithoutProfileInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutProfileInput>;
  upsert?: Maybe<UserUpsertWithoutProfileInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutprofileInput>;
};

type UserUpdateOneWithoutCommentsInput = {
  create?: Maybe<UserCreateWithoutCommentsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  delete?: Maybe<Scalars["Boolean"]>;
  update?: Maybe<UserUpdateWithoutCommentsInput>;
  upsert?: Maybe<UserUpsertWithoutCommentsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutcommentsInput>;
};

type UserUpdateOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  delete?: Maybe<Scalars["Boolean"]>;
  update?: Maybe<UserUpdateWithoutPostsInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutpostsInput>;
};

type UserUpdateWithoutCommentsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  profile?: Maybe<ProfileUpdateOneWithoutAuthorInput>;
  group?: Maybe<GroupUpdateOneWithoutUsersInput>;
};

type UserUpdateWithoutGroupInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  profile?: Maybe<ProfileUpdateOneWithoutAuthorInput>;
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
};

type UserUpdateWithoutPostsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  profile?: Maybe<ProfileUpdateOneWithoutAuthorInput>;
  group?: Maybe<GroupUpdateOneWithoutUsersInput>;
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
};

type UserUpdateWithoutProfileInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  group?: Maybe<GroupUpdateOneWithoutUsersInput>;
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
};

type UserUpdateWithWhereUniqueWithoutGroupInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutGroupInput;
};

type UserUpsertWithoutCommentsInput = {
  update: UserUpdateWithoutCommentsInput;
  create: UserCreateWithoutCommentsInput;
};

type UserUpsertWithoutPostsInput = {
  update: UserUpdateWithoutPostsInput;
  create: UserCreateWithoutPostsInput;
};

type UserUpsertWithoutProfileInput = {
  update: UserUpdateWithoutProfileInput;
  create: UserCreateWithoutProfileInput;
};

type UserUpsertWithWhereUniqueWithoutGroupInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutGroupInput;
  create: UserCreateWithoutGroupInput;
};

type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserWhereInput>>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  password?: Maybe<StringFilter>;
  posts?: Maybe<PostListRelationFilter>;
  profile?: Maybe<ProfileWhereInput>;
  group?: Maybe<GroupWhereInput>;
  groupId?: Maybe<IntNullableFilter>;
  comments?: Maybe<CommentListRelationFilter>;
};

type UserWhereUniqueInput = {
  id?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["String"]>;
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
  AggregateComment: ResolverTypeWrapper<AggregateComment>;
  AggregateGroup: ResolverTypeWrapper<AggregateGroup>;
  AggregatePost: ResolverTypeWrapper<AggregatePost>;
  AggregateProfile: ResolverTypeWrapper<AggregateProfile>;
  AggregateUser: ResolverTypeWrapper<AggregateUser>;
  BatchPayload: ResolverTypeWrapper<BatchPayload>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  BoolFieldUpdateOperationsInput: BoolFieldUpdateOperationsInput;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  BoolFilter: BoolFilter;
  Comment: ResolverTypeWrapper<Comment>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  CommentAvgAggregateOutputType: ResolverTypeWrapper<CommentAvgAggregateOutputType>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  CommentCountAggregateOutputType: ResolverTypeWrapper<CommentCountAggregateOutputType>;
  CommentCreateInput: CommentCreateInput;
  CommentCreateManyWithoutAuthorInput: CommentCreateManyWithoutAuthorInput;
  CommentCreateManyWithoutPostInput: CommentCreateManyWithoutPostInput;
  CommentCreateOrConnectWithoutauthorInput: CommentCreateOrConnectWithoutauthorInput;
  CommentCreateOrConnectWithoutpostInput: CommentCreateOrConnectWithoutpostInput;
  CommentCreateWithoutAuthorInput: CommentCreateWithoutAuthorInput;
  CommentCreateWithoutPostInput: CommentCreateWithoutPostInput;
  CommentListRelationFilter: CommentListRelationFilter;
  CommentMaxAggregateOutputType: ResolverTypeWrapper<CommentMaxAggregateOutputType>;
  CommentMinAggregateOutputType: ResolverTypeWrapper<CommentMinAggregateOutputType>;
  CommentOrderByInput: CommentOrderByInput;
  CommentScalarFieldEnum: CommentScalarFieldEnum;
  CommentScalarWhereInput: CommentScalarWhereInput;
  CommentSumAggregateOutputType: ResolverTypeWrapper<CommentSumAggregateOutputType>;
  CommentUpdateInput: CommentUpdateInput;
  CommentUpdateManyMutationInput: CommentUpdateManyMutationInput;
  CommentUpdateManyWithoutAuthorInput: CommentUpdateManyWithoutAuthorInput;
  CommentUpdateManyWithoutPostInput: CommentUpdateManyWithoutPostInput;
  CommentUpdateManyWithWhereWithoutAuthorInput: CommentUpdateManyWithWhereWithoutAuthorInput;
  CommentUpdateManyWithWhereWithoutPostInput: CommentUpdateManyWithWhereWithoutPostInput;
  CommentUpdateWithoutAuthorInput: CommentUpdateWithoutAuthorInput;
  CommentUpdateWithoutPostInput: CommentUpdateWithoutPostInput;
  CommentUpdateWithWhereUniqueWithoutAuthorInput: CommentUpdateWithWhereUniqueWithoutAuthorInput;
  CommentUpdateWithWhereUniqueWithoutPostInput: CommentUpdateWithWhereUniqueWithoutPostInput;
  CommentUpsertWithWhereUniqueWithoutAuthorInput: CommentUpsertWithWhereUniqueWithoutAuthorInput;
  CommentUpsertWithWhereUniqueWithoutPostInput: CommentUpsertWithWhereUniqueWithoutPostInput;
  CommentWhereInput: CommentWhereInput;
  CommentWhereUniqueInput: CommentWhereUniqueInput;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  Group: ResolverTypeWrapper<Group>;
  GroupAvgAggregateOutputType: ResolverTypeWrapper<GroupAvgAggregateOutputType>;
  GroupCountAggregateOutputType: ResolverTypeWrapper<GroupCountAggregateOutputType>;
  GroupCreateInput: GroupCreateInput;
  GroupCreateOneWithoutUsersInput: GroupCreateOneWithoutUsersInput;
  GroupCreateOrConnectWithoutusersInput: GroupCreateOrConnectWithoutusersInput;
  GroupCreateWithoutUsersInput: GroupCreateWithoutUsersInput;
  GroupMaxAggregateOutputType: ResolverTypeWrapper<GroupMaxAggregateOutputType>;
  GroupMinAggregateOutputType: ResolverTypeWrapper<GroupMinAggregateOutputType>;
  GroupOrderByInput: GroupOrderByInput;
  GroupRelationFilter: GroupRelationFilter;
  GroupScalarFieldEnum: GroupScalarFieldEnum;
  GroupSumAggregateOutputType: ResolverTypeWrapper<GroupSumAggregateOutputType>;
  GroupUpdateInput: GroupUpdateInput;
  GroupUpdateManyMutationInput: GroupUpdateManyMutationInput;
  GroupUpdateOneWithoutUsersInput: GroupUpdateOneWithoutUsersInput;
  GroupUpdateWithoutUsersInput: GroupUpdateWithoutUsersInput;
  GroupUpsertWithoutUsersInput: GroupUpsertWithoutUsersInput;
  GroupWhereInput: GroupWhereInput;
  GroupWhereUniqueInput: GroupWhereUniqueInput;
  IntFilter: IntFilter;
  IntNullableFilter: IntNullableFilter;
  Json: ResolverTypeWrapper<Scalars["Json"]>;
  Mutation: ResolverTypeWrapper<{}>;
  NestedBoolFilter: NestedBoolFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedIntFilter: NestedIntFilter;
  NestedIntNullableFilter: NestedIntNullableFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput;
  Post: ResolverTypeWrapper<Post>;
  PostAvgAggregateOutputType: ResolverTypeWrapper<PostAvgAggregateOutputType>;
  PostCountAggregateOutputType: ResolverTypeWrapper<PostCountAggregateOutputType>;
  PostCreateInput: PostCreateInput;
  PostCreateManyWithoutAuthorInput: PostCreateManyWithoutAuthorInput;
  PostCreateOneWithoutCommentsInput: PostCreateOneWithoutCommentsInput;
  PostCreateOrConnectWithoutauthorInput: PostCreateOrConnectWithoutauthorInput;
  PostCreateOrConnectWithoutcommentsInput: PostCreateOrConnectWithoutcommentsInput;
  PostCreateWithoutAuthorInput: PostCreateWithoutAuthorInput;
  PostCreateWithoutCommentsInput: PostCreateWithoutCommentsInput;
  PostListRelationFilter: PostListRelationFilter;
  PostMaxAggregateOutputType: ResolverTypeWrapper<PostMaxAggregateOutputType>;
  PostMinAggregateOutputType: ResolverTypeWrapper<PostMinAggregateOutputType>;
  PostOrderByInput: PostOrderByInput;
  PostRelationFilter: PostRelationFilter;
  PostScalarFieldEnum: PostScalarFieldEnum;
  PostScalarWhereInput: PostScalarWhereInput;
  PostSumAggregateOutputType: ResolverTypeWrapper<PostSumAggregateOutputType>;
  PostUpdateInput: PostUpdateInput;
  PostUpdateManyMutationInput: PostUpdateManyMutationInput;
  PostUpdateManyWithoutAuthorInput: PostUpdateManyWithoutAuthorInput;
  PostUpdateManyWithWhereWithoutAuthorInput: PostUpdateManyWithWhereWithoutAuthorInput;
  PostUpdateOneRequiredWithoutCommentsInput: PostUpdateOneRequiredWithoutCommentsInput;
  PostUpdateWithoutAuthorInput: PostUpdateWithoutAuthorInput;
  PostUpdateWithoutCommentsInput: PostUpdateWithoutCommentsInput;
  PostUpdateWithWhereUniqueWithoutAuthorInput: PostUpdateWithWhereUniqueWithoutAuthorInput;
  PostUpsertWithoutCommentsInput: PostUpsertWithoutCommentsInput;
  PostUpsertWithWhereUniqueWithoutAuthorInput: PostUpsertWithWhereUniqueWithoutAuthorInput;
  PostWhereInput: PostWhereInput;
  PostWhereUniqueInput: PostWhereUniqueInput;
  Profile: ResolverTypeWrapper<Profile>;
  ProfileAvgAggregateOutputType: ResolverTypeWrapper<ProfileAvgAggregateOutputType>;
  ProfileCountAggregateOutputType: ResolverTypeWrapper<ProfileCountAggregateOutputType>;
  ProfileCreateInput: ProfileCreateInput;
  ProfileCreateOneWithoutAuthorInput: ProfileCreateOneWithoutAuthorInput;
  ProfileCreateOrConnectWithoutauthorInput: ProfileCreateOrConnectWithoutauthorInput;
  ProfileCreateWithoutAuthorInput: ProfileCreateWithoutAuthorInput;
  ProfileMaxAggregateOutputType: ResolverTypeWrapper<ProfileMaxAggregateOutputType>;
  ProfileMinAggregateOutputType: ResolverTypeWrapper<ProfileMinAggregateOutputType>;
  ProfileOrderByInput: ProfileOrderByInput;
  ProfileRelationFilter: ProfileRelationFilter;
  ProfileScalarFieldEnum: ProfileScalarFieldEnum;
  ProfileSumAggregateOutputType: ResolverTypeWrapper<ProfileSumAggregateOutputType>;
  ProfileUpdateInput: ProfileUpdateInput;
  ProfileUpdateManyMutationInput: ProfileUpdateManyMutationInput;
  ProfileUpdateOneWithoutAuthorInput: ProfileUpdateOneWithoutAuthorInput;
  ProfileUpdateWithoutAuthorInput: ProfileUpdateWithoutAuthorInput;
  ProfileUpsertWithoutAuthorInput: ProfileUpsertWithoutAuthorInput;
  ProfileWhereInput: ProfileWhereInput;
  ProfileWhereUniqueInput: ProfileWhereUniqueInput;
  Query: ResolverTypeWrapper<{}>;
  SortOrder: SortOrder;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  User: ResolverTypeWrapper<User>;
  UserAvgAggregateOutputType: ResolverTypeWrapper<UserAvgAggregateOutputType>;
  UserCountAggregateOutputType: ResolverTypeWrapper<UserCountAggregateOutputType>;
  UserCreateInput: UserCreateInput;
  UserCreateManyWithoutGroupInput: UserCreateManyWithoutGroupInput;
  UserCreateOneWithoutCommentsInput: UserCreateOneWithoutCommentsInput;
  UserCreateOneWithoutPostsInput: UserCreateOneWithoutPostsInput;
  UserCreateOneWithoutProfileInput: UserCreateOneWithoutProfileInput;
  UserCreateOrConnectWithoutcommentsInput: UserCreateOrConnectWithoutcommentsInput;
  UserCreateOrConnectWithoutgroupInput: UserCreateOrConnectWithoutgroupInput;
  UserCreateOrConnectWithoutpostsInput: UserCreateOrConnectWithoutpostsInput;
  UserCreateOrConnectWithoutprofileInput: UserCreateOrConnectWithoutprofileInput;
  UserCreateWithoutCommentsInput: UserCreateWithoutCommentsInput;
  UserCreateWithoutGroupInput: UserCreateWithoutGroupInput;
  UserCreateWithoutPostsInput: UserCreateWithoutPostsInput;
  UserCreateWithoutProfileInput: UserCreateWithoutProfileInput;
  UserListRelationFilter: UserListRelationFilter;
  UserMaxAggregateOutputType: ResolverTypeWrapper<UserMaxAggregateOutputType>;
  UserMinAggregateOutputType: ResolverTypeWrapper<UserMinAggregateOutputType>;
  UserOrderByInput: UserOrderByInput;
  UserRelationFilter: UserRelationFilter;
  UserScalarFieldEnum: UserScalarFieldEnum;
  UserScalarWhereInput: UserScalarWhereInput;
  UserSumAggregateOutputType: ResolverTypeWrapper<UserSumAggregateOutputType>;
  UserUpdateInput: UserUpdateInput;
  UserUpdateManyMutationInput: UserUpdateManyMutationInput;
  UserUpdateManyWithoutGroupInput: UserUpdateManyWithoutGroupInput;
  UserUpdateManyWithWhereWithoutGroupInput: UserUpdateManyWithWhereWithoutGroupInput;
  UserUpdateOneRequiredWithoutProfileInput: UserUpdateOneRequiredWithoutProfileInput;
  UserUpdateOneWithoutCommentsInput: UserUpdateOneWithoutCommentsInput;
  UserUpdateOneWithoutPostsInput: UserUpdateOneWithoutPostsInput;
  UserUpdateWithoutCommentsInput: UserUpdateWithoutCommentsInput;
  UserUpdateWithoutGroupInput: UserUpdateWithoutGroupInput;
  UserUpdateWithoutPostsInput: UserUpdateWithoutPostsInput;
  UserUpdateWithoutProfileInput: UserUpdateWithoutProfileInput;
  UserUpdateWithWhereUniqueWithoutGroupInput: UserUpdateWithWhereUniqueWithoutGroupInput;
  UserUpsertWithoutCommentsInput: UserUpsertWithoutCommentsInput;
  UserUpsertWithoutPostsInput: UserUpsertWithoutPostsInput;
  UserUpsertWithoutProfileInput: UserUpsertWithoutProfileInput;
  UserUpsertWithWhereUniqueWithoutGroupInput: UserUpsertWithWhereUniqueWithoutGroupInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
};

/** Mapping between all available schema types and the resolvers parents */
type ResolversParentTypes = {
  AggregateComment: AggregateComment;
  AggregateGroup: AggregateGroup;
  AggregatePost: AggregatePost;
  AggregateProfile: AggregateProfile;
  AggregateUser: AggregateUser;
  BatchPayload: BatchPayload;
  Int: Scalars["Int"];
  BoolFieldUpdateOperationsInput: BoolFieldUpdateOperationsInput;
  Boolean: Scalars["Boolean"];
  BoolFilter: BoolFilter;
  Comment: Comment;
  String: Scalars["String"];
  CommentAvgAggregateOutputType: CommentAvgAggregateOutputType;
  Float: Scalars["Float"];
  CommentCountAggregateOutputType: CommentCountAggregateOutputType;
  CommentCreateInput: CommentCreateInput;
  CommentCreateManyWithoutAuthorInput: CommentCreateManyWithoutAuthorInput;
  CommentCreateManyWithoutPostInput: CommentCreateManyWithoutPostInput;
  CommentCreateOrConnectWithoutauthorInput: CommentCreateOrConnectWithoutauthorInput;
  CommentCreateOrConnectWithoutpostInput: CommentCreateOrConnectWithoutpostInput;
  CommentCreateWithoutAuthorInput: CommentCreateWithoutAuthorInput;
  CommentCreateWithoutPostInput: CommentCreateWithoutPostInput;
  CommentListRelationFilter: CommentListRelationFilter;
  CommentMaxAggregateOutputType: CommentMaxAggregateOutputType;
  CommentMinAggregateOutputType: CommentMinAggregateOutputType;
  CommentOrderByInput: CommentOrderByInput;
  CommentScalarWhereInput: CommentScalarWhereInput;
  CommentSumAggregateOutputType: CommentSumAggregateOutputType;
  CommentUpdateInput: CommentUpdateInput;
  CommentUpdateManyMutationInput: CommentUpdateManyMutationInput;
  CommentUpdateManyWithoutAuthorInput: CommentUpdateManyWithoutAuthorInput;
  CommentUpdateManyWithoutPostInput: CommentUpdateManyWithoutPostInput;
  CommentUpdateManyWithWhereWithoutAuthorInput: CommentUpdateManyWithWhereWithoutAuthorInput;
  CommentUpdateManyWithWhereWithoutPostInput: CommentUpdateManyWithWhereWithoutPostInput;
  CommentUpdateWithoutAuthorInput: CommentUpdateWithoutAuthorInput;
  CommentUpdateWithoutPostInput: CommentUpdateWithoutPostInput;
  CommentUpdateWithWhereUniqueWithoutAuthorInput: CommentUpdateWithWhereUniqueWithoutAuthorInput;
  CommentUpdateWithWhereUniqueWithoutPostInput: CommentUpdateWithWhereUniqueWithoutPostInput;
  CommentUpsertWithWhereUniqueWithoutAuthorInput: CommentUpsertWithWhereUniqueWithoutAuthorInput;
  CommentUpsertWithWhereUniqueWithoutPostInput: CommentUpsertWithWhereUniqueWithoutPostInput;
  CommentWhereInput: CommentWhereInput;
  CommentWhereUniqueInput: CommentWhereUniqueInput;
  DateTime: Scalars["DateTime"];
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  Group: Group;
  GroupAvgAggregateOutputType: GroupAvgAggregateOutputType;
  GroupCountAggregateOutputType: GroupCountAggregateOutputType;
  GroupCreateInput: GroupCreateInput;
  GroupCreateOneWithoutUsersInput: GroupCreateOneWithoutUsersInput;
  GroupCreateOrConnectWithoutusersInput: GroupCreateOrConnectWithoutusersInput;
  GroupCreateWithoutUsersInput: GroupCreateWithoutUsersInput;
  GroupMaxAggregateOutputType: GroupMaxAggregateOutputType;
  GroupMinAggregateOutputType: GroupMinAggregateOutputType;
  GroupOrderByInput: GroupOrderByInput;
  GroupRelationFilter: GroupRelationFilter;
  GroupSumAggregateOutputType: GroupSumAggregateOutputType;
  GroupUpdateInput: GroupUpdateInput;
  GroupUpdateManyMutationInput: GroupUpdateManyMutationInput;
  GroupUpdateOneWithoutUsersInput: GroupUpdateOneWithoutUsersInput;
  GroupUpdateWithoutUsersInput: GroupUpdateWithoutUsersInput;
  GroupUpsertWithoutUsersInput: GroupUpsertWithoutUsersInput;
  GroupWhereInput: GroupWhereInput;
  GroupWhereUniqueInput: GroupWhereUniqueInput;
  IntFilter: IntFilter;
  IntNullableFilter: IntNullableFilter;
  Json: Scalars["Json"];
  Mutation: {};
  NestedBoolFilter: NestedBoolFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedIntFilter: NestedIntFilter;
  NestedIntNullableFilter: NestedIntNullableFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput;
  Post: Post;
  PostAvgAggregateOutputType: PostAvgAggregateOutputType;
  PostCountAggregateOutputType: PostCountAggregateOutputType;
  PostCreateInput: PostCreateInput;
  PostCreateManyWithoutAuthorInput: PostCreateManyWithoutAuthorInput;
  PostCreateOneWithoutCommentsInput: PostCreateOneWithoutCommentsInput;
  PostCreateOrConnectWithoutauthorInput: PostCreateOrConnectWithoutauthorInput;
  PostCreateOrConnectWithoutcommentsInput: PostCreateOrConnectWithoutcommentsInput;
  PostCreateWithoutAuthorInput: PostCreateWithoutAuthorInput;
  PostCreateWithoutCommentsInput: PostCreateWithoutCommentsInput;
  PostListRelationFilter: PostListRelationFilter;
  PostMaxAggregateOutputType: PostMaxAggregateOutputType;
  PostMinAggregateOutputType: PostMinAggregateOutputType;
  PostOrderByInput: PostOrderByInput;
  PostRelationFilter: PostRelationFilter;
  PostScalarWhereInput: PostScalarWhereInput;
  PostSumAggregateOutputType: PostSumAggregateOutputType;
  PostUpdateInput: PostUpdateInput;
  PostUpdateManyMutationInput: PostUpdateManyMutationInput;
  PostUpdateManyWithoutAuthorInput: PostUpdateManyWithoutAuthorInput;
  PostUpdateManyWithWhereWithoutAuthorInput: PostUpdateManyWithWhereWithoutAuthorInput;
  PostUpdateOneRequiredWithoutCommentsInput: PostUpdateOneRequiredWithoutCommentsInput;
  PostUpdateWithoutAuthorInput: PostUpdateWithoutAuthorInput;
  PostUpdateWithoutCommentsInput: PostUpdateWithoutCommentsInput;
  PostUpdateWithWhereUniqueWithoutAuthorInput: PostUpdateWithWhereUniqueWithoutAuthorInput;
  PostUpsertWithoutCommentsInput: PostUpsertWithoutCommentsInput;
  PostUpsertWithWhereUniqueWithoutAuthorInput: PostUpsertWithWhereUniqueWithoutAuthorInput;
  PostWhereInput: PostWhereInput;
  PostWhereUniqueInput: PostWhereUniqueInput;
  Profile: Profile;
  ProfileAvgAggregateOutputType: ProfileAvgAggregateOutputType;
  ProfileCountAggregateOutputType: ProfileCountAggregateOutputType;
  ProfileCreateInput: ProfileCreateInput;
  ProfileCreateOneWithoutAuthorInput: ProfileCreateOneWithoutAuthorInput;
  ProfileCreateOrConnectWithoutauthorInput: ProfileCreateOrConnectWithoutauthorInput;
  ProfileCreateWithoutAuthorInput: ProfileCreateWithoutAuthorInput;
  ProfileMaxAggregateOutputType: ProfileMaxAggregateOutputType;
  ProfileMinAggregateOutputType: ProfileMinAggregateOutputType;
  ProfileOrderByInput: ProfileOrderByInput;
  ProfileRelationFilter: ProfileRelationFilter;
  ProfileSumAggregateOutputType: ProfileSumAggregateOutputType;
  ProfileUpdateInput: ProfileUpdateInput;
  ProfileUpdateManyMutationInput: ProfileUpdateManyMutationInput;
  ProfileUpdateOneWithoutAuthorInput: ProfileUpdateOneWithoutAuthorInput;
  ProfileUpdateWithoutAuthorInput: ProfileUpdateWithoutAuthorInput;
  ProfileUpsertWithoutAuthorInput: ProfileUpsertWithoutAuthorInput;
  ProfileWhereInput: ProfileWhereInput;
  ProfileWhereUniqueInput: ProfileWhereUniqueInput;
  Query: {};
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  User: User;
  UserAvgAggregateOutputType: UserAvgAggregateOutputType;
  UserCountAggregateOutputType: UserCountAggregateOutputType;
  UserCreateInput: UserCreateInput;
  UserCreateManyWithoutGroupInput: UserCreateManyWithoutGroupInput;
  UserCreateOneWithoutCommentsInput: UserCreateOneWithoutCommentsInput;
  UserCreateOneWithoutPostsInput: UserCreateOneWithoutPostsInput;
  UserCreateOneWithoutProfileInput: UserCreateOneWithoutProfileInput;
  UserCreateOrConnectWithoutcommentsInput: UserCreateOrConnectWithoutcommentsInput;
  UserCreateOrConnectWithoutgroupInput: UserCreateOrConnectWithoutgroupInput;
  UserCreateOrConnectWithoutpostsInput: UserCreateOrConnectWithoutpostsInput;
  UserCreateOrConnectWithoutprofileInput: UserCreateOrConnectWithoutprofileInput;
  UserCreateWithoutCommentsInput: UserCreateWithoutCommentsInput;
  UserCreateWithoutGroupInput: UserCreateWithoutGroupInput;
  UserCreateWithoutPostsInput: UserCreateWithoutPostsInput;
  UserCreateWithoutProfileInput: UserCreateWithoutProfileInput;
  UserListRelationFilter: UserListRelationFilter;
  UserMaxAggregateOutputType: UserMaxAggregateOutputType;
  UserMinAggregateOutputType: UserMinAggregateOutputType;
  UserOrderByInput: UserOrderByInput;
  UserRelationFilter: UserRelationFilter;
  UserScalarWhereInput: UserScalarWhereInput;
  UserSumAggregateOutputType: UserSumAggregateOutputType;
  UserUpdateInput: UserUpdateInput;
  UserUpdateManyMutationInput: UserUpdateManyMutationInput;
  UserUpdateManyWithoutGroupInput: UserUpdateManyWithoutGroupInput;
  UserUpdateManyWithWhereWithoutGroupInput: UserUpdateManyWithWhereWithoutGroupInput;
  UserUpdateOneRequiredWithoutProfileInput: UserUpdateOneRequiredWithoutProfileInput;
  UserUpdateOneWithoutCommentsInput: UserUpdateOneWithoutCommentsInput;
  UserUpdateOneWithoutPostsInput: UserUpdateOneWithoutPostsInput;
  UserUpdateWithoutCommentsInput: UserUpdateWithoutCommentsInput;
  UserUpdateWithoutGroupInput: UserUpdateWithoutGroupInput;
  UserUpdateWithoutPostsInput: UserUpdateWithoutPostsInput;
  UserUpdateWithoutProfileInput: UserUpdateWithoutProfileInput;
  UserUpdateWithWhereUniqueWithoutGroupInput: UserUpdateWithWhereUniqueWithoutGroupInput;
  UserUpsertWithoutCommentsInput: UserUpsertWithoutCommentsInput;
  UserUpsertWithoutPostsInput: UserUpsertWithoutPostsInput;
  UserUpsertWithoutProfileInput: UserUpsertWithoutProfileInput;
  UserUpsertWithWhereUniqueWithoutGroupInput: UserUpsertWithWhereUniqueWithoutGroupInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
};

type AggregateCommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AggregateComment"] = ResolversParentTypes["AggregateComment"]
> = {
  count?: Resolver<Maybe<ResolversTypes["CommentCountAggregateOutputType"]>, ParentType, ContextType>;
  avg?: Resolver<Maybe<ResolversTypes["CommentAvgAggregateOutputType"]>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes["CommentSumAggregateOutputType"]>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes["CommentMinAggregateOutputType"]>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes["CommentMaxAggregateOutputType"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type AggregateGroupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AggregateGroup"] = ResolversParentTypes["AggregateGroup"]
> = {
  count?: Resolver<Maybe<ResolversTypes["GroupCountAggregateOutputType"]>, ParentType, ContextType>;
  avg?: Resolver<Maybe<ResolversTypes["GroupAvgAggregateOutputType"]>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes["GroupSumAggregateOutputType"]>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes["GroupMinAggregateOutputType"]>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes["GroupMaxAggregateOutputType"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type AggregatePostResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AggregatePost"] = ResolversParentTypes["AggregatePost"]
> = {
  count?: Resolver<Maybe<ResolversTypes["PostCountAggregateOutputType"]>, ParentType, ContextType>;
  avg?: Resolver<Maybe<ResolversTypes["PostAvgAggregateOutputType"]>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes["PostSumAggregateOutputType"]>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes["PostMinAggregateOutputType"]>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes["PostMaxAggregateOutputType"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type AggregateProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AggregateProfile"] = ResolversParentTypes["AggregateProfile"]
> = {
  count?: Resolver<Maybe<ResolversTypes["ProfileCountAggregateOutputType"]>, ParentType, ContextType>;
  avg?: Resolver<Maybe<ResolversTypes["ProfileAvgAggregateOutputType"]>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes["ProfileSumAggregateOutputType"]>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes["ProfileMinAggregateOutputType"]>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes["ProfileMaxAggregateOutputType"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type AggregateUserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AggregateUser"] = ResolversParentTypes["AggregateUser"]
> = {
  count?: Resolver<Maybe<ResolversTypes["UserCountAggregateOutputType"]>, ParentType, ContextType>;
  avg?: Resolver<Maybe<ResolversTypes["UserAvgAggregateOutputType"]>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes["UserSumAggregateOutputType"]>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes["UserMinAggregateOutputType"]>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes["UserMaxAggregateOutputType"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type BatchPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["BatchPayload"] = ResolversParentTypes["BatchPayload"]
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type CommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Comment"] = ResolversParentTypes["Comment"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contain?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  post?: Resolver<ResolversTypes["Post"], ParentType, ContextType>;
  postId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type CommentAvgAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CommentAvgAggregateOutputType"] = ResolversParentTypes["CommentAvgAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  postId?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type CommentCountAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CommentCountAggregateOutputType"] = ResolversParentTypes["CommentCountAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contain?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  postId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  _all?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type CommentMaxAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CommentMaxAggregateOutputType"] = ResolversParentTypes["CommentMaxAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contain?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  postId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type CommentMinAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CommentMinAggregateOutputType"] = ResolversParentTypes["CommentMinAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contain?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  postId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type CommentSumAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CommentSumAggregateOutputType"] = ResolversParentTypes["CommentSumAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  postId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

type GroupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Group"] = ResolversParentTypes["Group"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType, RequireFields<GroupUsersArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type GroupAvgAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GroupAvgAggregateOutputType"] = ResolversParentTypes["GroupAvgAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type GroupCountAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GroupCountAggregateOutputType"] = ResolversParentTypes["GroupCountAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  _all?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type GroupMaxAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GroupMaxAggregateOutputType"] = ResolversParentTypes["GroupMaxAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type GroupMinAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GroupMinAggregateOutputType"] = ResolversParentTypes["GroupMinAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type GroupSumAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GroupSumAggregateOutputType"] = ResolversParentTypes["GroupSumAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["Json"], any> {
  name: "Json";
}

type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createOneComment?: Resolver<
    ResolversTypes["Comment"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateOneCommentArgs, "data">
  >;
  deleteManyComment?: Resolver<
    ResolversTypes["BatchPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteManyCommentArgs, never>
  >;
  deleteOneComment?: Resolver<
    Maybe<ResolversTypes["Comment"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteOneCommentArgs, "where">
  >;
  updateManyComment?: Resolver<
    ResolversTypes["BatchPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateManyCommentArgs, "data">
  >;
  updateOneComment?: Resolver<
    ResolversTypes["Comment"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateOneCommentArgs, "where" | "data">
  >;
  upsertOneComment?: Resolver<
    ResolversTypes["Comment"],
    ParentType,
    ContextType,
    RequireFields<MutationUpsertOneCommentArgs, "where" | "create" | "update">
  >;
  createOneGroup?: Resolver<
    ResolversTypes["Group"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateOneGroupArgs, "data">
  >;
  deleteManyGroup?: Resolver<
    ResolversTypes["BatchPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteManyGroupArgs, never>
  >;
  deleteOneGroup?: Resolver<
    Maybe<ResolversTypes["Group"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteOneGroupArgs, "where">
  >;
  updateManyGroup?: Resolver<
    ResolversTypes["BatchPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateManyGroupArgs, "data">
  >;
  updateOneGroup?: Resolver<
    ResolversTypes["Group"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateOneGroupArgs, "where" | "data">
  >;
  upsertOneGroup?: Resolver<
    ResolversTypes["Group"],
    ParentType,
    ContextType,
    RequireFields<MutationUpsertOneGroupArgs, "where" | "create" | "update">
  >;
  createOnePost?: Resolver<
    ResolversTypes["Post"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateOnePostArgs, "data">
  >;
  deleteManyPost?: Resolver<
    ResolversTypes["BatchPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteManyPostArgs, never>
  >;
  deleteOnePost?: Resolver<
    Maybe<ResolversTypes["Post"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteOnePostArgs, "where">
  >;
  updateManyPost?: Resolver<
    ResolversTypes["BatchPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateManyPostArgs, "data">
  >;
  updateOnePost?: Resolver<
    ResolversTypes["Post"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateOnePostArgs, "where" | "data">
  >;
  upsertOnePost?: Resolver<
    ResolversTypes["Post"],
    ParentType,
    ContextType,
    RequireFields<MutationUpsertOnePostArgs, "where" | "create" | "update">
  >;
  createOneProfile?: Resolver<
    ResolversTypes["Profile"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateOneProfileArgs, "data">
  >;
  deleteManyProfile?: Resolver<
    ResolversTypes["BatchPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteManyProfileArgs, never>
  >;
  deleteOneProfile?: Resolver<
    Maybe<ResolversTypes["Profile"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteOneProfileArgs, "where">
  >;
  updateManyProfile?: Resolver<
    ResolversTypes["BatchPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateManyProfileArgs, "data">
  >;
  updateOneProfile?: Resolver<
    ResolversTypes["Profile"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateOneProfileArgs, "where" | "data">
  >;
  upsertOneProfile?: Resolver<
    ResolversTypes["Profile"],
    ParentType,
    ContextType,
    RequireFields<MutationUpsertOneProfileArgs, "where" | "create" | "update">
  >;
  createOneUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateOneUserArgs, "data">
  >;
  deleteManyUser?: Resolver<
    ResolversTypes["BatchPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteManyUserArgs, never>
  >;
  deleteOneUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteOneUserArgs, "where">
  >;
  updateManyUser?: Resolver<
    ResolversTypes["BatchPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateManyUserArgs, "data">
  >;
  updateOneUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateOneUserArgs, "where" | "data">
  >;
  upsertOneUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationUpsertOneUserArgs, "where" | "create" | "update">
  >;
};

type PostResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Post"] = ResolversParentTypes["Post"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  published?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  comments?: Resolver<
    Array<ResolversTypes["Comment"]>,
    ParentType,
    ContextType,
    RequireFields<PostCommentsArgs, never>
  >;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type PostAvgAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PostAvgAggregateOutputType"] = ResolversParentTypes["PostAvgAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type PostCountAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PostCountAggregateOutputType"] = ResolversParentTypes["PostCountAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  published?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  _all?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type PostMaxAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PostMaxAggregateOutputType"] = ResolversParentTypes["PostMaxAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  published?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type PostMinAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PostMinAggregateOutputType"] = ResolversParentTypes["PostMinAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  published?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type PostSumAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PostSumAggregateOutputType"] = ResolversParentTypes["PostSumAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type ProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Profile"] = ResolversParentTypes["Profile"]
> = {
  author?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  authorId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  bio?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type ProfileAvgAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProfileAvgAggregateOutputType"] = ResolversParentTypes["ProfileAvgAggregateOutputType"]
> = {
  authorId?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type ProfileCountAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProfileCountAggregateOutputType"] = ResolversParentTypes["ProfileCountAggregateOutputType"]
> = {
  authorId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  _all?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type ProfileMaxAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProfileMaxAggregateOutputType"] = ResolversParentTypes["ProfileMaxAggregateOutputType"]
> = {
  authorId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type ProfileMinAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProfileMinAggregateOutputType"] = ResolversParentTypes["ProfileMinAggregateOutputType"]
> = {
  authorId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type ProfileSumAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProfileSumAggregateOutputType"] = ResolversParentTypes["ProfileSumAggregateOutputType"]
> = {
  authorId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  aggregateComment?: Resolver<
    Maybe<ResolversTypes["AggregateComment"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAggregateCommentArgs, never>
  >;
  findManyCommentCount?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<QueryFindManyCommentCountArgs, never>
  >;
  findFirstComment?: Resolver<
    Maybe<ResolversTypes["Comment"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFindFirstCommentArgs, never>
  >;
  findManyComment?: Resolver<
    Array<ResolversTypes["Comment"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFindManyCommentArgs, never>
  >;
  findUniqueComment?: Resolver<
    Maybe<ResolversTypes["Comment"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFindUniqueCommentArgs, never>
  >;
  aggregateGroup?: Resolver<
    Maybe<ResolversTypes["AggregateGroup"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAggregateGroupArgs, never>
  >;
  findManyGroupCount?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<QueryFindManyGroupCountArgs, never>
  >;
  findFirstGroup?: Resolver<
    Maybe<ResolversTypes["Group"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFindFirstGroupArgs, never>
  >;
  findManyGroup?: Resolver<
    Array<ResolversTypes["Group"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFindManyGroupArgs, never>
  >;
  findUniqueGroup?: Resolver<
    Maybe<ResolversTypes["Group"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFindUniqueGroupArgs, never>
  >;
  aggregatePost?: Resolver<
    Maybe<ResolversTypes["AggregatePost"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAggregatePostArgs, never>
  >;
  findManyPostCount?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<QueryFindManyPostCountArgs, never>
  >;
  findFirstPost?: Resolver<
    Maybe<ResolversTypes["Post"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFindFirstPostArgs, never>
  >;
  findManyPost?: Resolver<
    Array<ResolversTypes["Post"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFindManyPostArgs, never>
  >;
  findUniquePost?: Resolver<
    Maybe<ResolversTypes["Post"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFindUniquePostArgs, never>
  >;
  aggregateProfile?: Resolver<
    Maybe<ResolversTypes["AggregateProfile"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAggregateProfileArgs, never>
  >;
  findManyProfileCount?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<QueryFindManyProfileCountArgs, never>
  >;
  findFirstProfile?: Resolver<
    Maybe<ResolversTypes["Profile"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFindFirstProfileArgs, never>
  >;
  findManyProfile?: Resolver<
    Array<ResolversTypes["Profile"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFindManyProfileArgs, never>
  >;
  findUniqueProfile?: Resolver<
    Maybe<ResolversTypes["Profile"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFindUniqueProfileArgs, never>
  >;
  aggregateUser?: Resolver<
    Maybe<ResolversTypes["AggregateUser"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAggregateUserArgs, never>
  >;
  findManyUserCount?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<QueryFindManyUserCountArgs, never>
  >;
  findFirstUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFindFirstUserArgs, never>
  >;
  findManyUser?: Resolver<
    Array<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFindManyUserArgs, never>
  >;
  findUniqueUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFindUniqueUserArgs, never>
  >;
};

type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes["Post"]>, ParentType, ContextType, RequireFields<UserPostsArgs, never>>;
  profile?: Resolver<Maybe<ResolversTypes["Profile"]>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes["Group"]>, ParentType, ContextType>;
  groupId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  comments?: Resolver<
    Array<ResolversTypes["Comment"]>,
    ParentType,
    ContextType,
    RequireFields<UserCommentsArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type UserAvgAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserAvgAggregateOutputType"] = ResolversParentTypes["UserAvgAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  groupId?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type UserCountAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserCountAggregateOutputType"] = ResolversParentTypes["UserCountAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  groupId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  _all?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type UserMaxAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserMaxAggregateOutputType"] = ResolversParentTypes["UserMaxAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  groupId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type UserMinAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserMinAggregateOutputType"] = ResolversParentTypes["UserMinAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  groupId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type UserSumAggregateOutputTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserSumAggregateOutputType"] = ResolversParentTypes["UserSumAggregateOutputType"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  groupId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

type Resolvers<ContextType = any> = {
  AggregateComment?: AggregateCommentResolvers<ContextType>;
  AggregateGroup?: AggregateGroupResolvers<ContextType>;
  AggregatePost?: AggregatePostResolvers<ContextType>;
  AggregateProfile?: AggregateProfileResolvers<ContextType>;
  AggregateUser?: AggregateUserResolvers<ContextType>;
  BatchPayload?: BatchPayloadResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CommentAvgAggregateOutputType?: CommentAvgAggregateOutputTypeResolvers<ContextType>;
  CommentCountAggregateOutputType?: CommentCountAggregateOutputTypeResolvers<ContextType>;
  CommentMaxAggregateOutputType?: CommentMaxAggregateOutputTypeResolvers<ContextType>;
  CommentMinAggregateOutputType?: CommentMinAggregateOutputTypeResolvers<ContextType>;
  CommentSumAggregateOutputType?: CommentSumAggregateOutputTypeResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Group?: GroupResolvers<ContextType>;
  GroupAvgAggregateOutputType?: GroupAvgAggregateOutputTypeResolvers<ContextType>;
  GroupCountAggregateOutputType?: GroupCountAggregateOutputTypeResolvers<ContextType>;
  GroupMaxAggregateOutputType?: GroupMaxAggregateOutputTypeResolvers<ContextType>;
  GroupMinAggregateOutputType?: GroupMinAggregateOutputTypeResolvers<ContextType>;
  GroupSumAggregateOutputType?: GroupSumAggregateOutputTypeResolvers<ContextType>;
  Json?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostAvgAggregateOutputType?: PostAvgAggregateOutputTypeResolvers<ContextType>;
  PostCountAggregateOutputType?: PostCountAggregateOutputTypeResolvers<ContextType>;
  PostMaxAggregateOutputType?: PostMaxAggregateOutputTypeResolvers<ContextType>;
  PostMinAggregateOutputType?: PostMinAggregateOutputTypeResolvers<ContextType>;
  PostSumAggregateOutputType?: PostSumAggregateOutputTypeResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  ProfileAvgAggregateOutputType?: ProfileAvgAggregateOutputTypeResolvers<ContextType>;
  ProfileCountAggregateOutputType?: ProfileCountAggregateOutputTypeResolvers<ContextType>;
  ProfileMaxAggregateOutputType?: ProfileMaxAggregateOutputTypeResolvers<ContextType>;
  ProfileMinAggregateOutputType?: ProfileMinAggregateOutputTypeResolvers<ContextType>;
  ProfileSumAggregateOutputType?: ProfileSumAggregateOutputTypeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAvgAggregateOutputType?: UserAvgAggregateOutputTypeResolvers<ContextType>;
  UserCountAggregateOutputType?: UserCountAggregateOutputTypeResolvers<ContextType>;
  UserMaxAggregateOutputType?: UserMaxAggregateOutputTypeResolvers<ContextType>;
  UserMinAggregateOutputType?: UserMinAggregateOutputTypeResolvers<ContextType>;
  UserSumAggregateOutputType?: UserSumAggregateOutputTypeResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
type IResolvers<ContextType = any> = Resolvers<ContextType>;
