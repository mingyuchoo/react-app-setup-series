type Maybe<T> = T | null;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Time: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

type Mutation = {
  __typename?: 'Mutation';
  /** Create a new document in the collection of 'Todo' */
  createTodo: Todo;
  /** Update an existing document in the collection of 'Todo' */
  updateTodo?: Maybe<Todo>;
  /** Delete an existing document in the collection of 'Todo' */
  deleteTodo?: Maybe<Todo>;
};

type MutationCreateTodoArgs = {
  data: TodoInput;
};

type MutationUpdateTodoArgs = {
  id: Scalars['ID'];
  data: TodoInput;
};

type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};

/** 'Todo' input values */
type TodoInput = {
  title: Scalars['String'];
  completed?: Maybe<Scalars['Boolean']>;
};

type Query = {
  __typename?: 'Query';
  /** Find a document from the collection of 'Todo' by its id. */
  findTodoByID?: Maybe<Todo>;
  allTodos: TodoPage;
  todosByCompletedFlag: TodoPage;
};

type QueryFindTodoByIdArgs = {
  id: Scalars['ID'];
};

type QueryAllTodosArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

type QueryTodosByCompletedFlagArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
  completed: Scalars['Boolean'];
};

type Todo = {
  __typename?: 'Todo';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  title: Scalars['String'];
  completed?: Maybe<Scalars['Boolean']>;
};

/** The pagination object for elements of type 'Todo'. */
type TodoPage = {
  __typename?: 'TodoPage';
  /** The elements of type 'Todo' in this page. */
  data: Array<Maybe<Todo>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};
