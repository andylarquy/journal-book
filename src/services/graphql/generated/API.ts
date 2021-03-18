import gql from 'graphql-tag'
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  id: Scalars['ID'];
  name: Scalars['String'];
  notebooks?: Maybe<Array<Maybe<Notebook>>>;
};

export type Notebook = {
  __typename?: 'Notebook';
  id: Scalars['ID'];
  title: Scalars['String'];
  notes?: Maybe<Array<Maybe<Note>>>;
};

export type Note = {
  __typename?: 'Note';
  id: Scalars['ID'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
};

export type UserInput = {
  name: Scalars['String'];
};

export type NotebookInput = {
  name: Scalars['String'];
  title?: Maybe<Array<Maybe<NoteInput>>>;
};

export type NoteInput = {
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getListUserProfile?: Maybe<Array<Maybe<User>>>;
  getNotebooksOfUser?: Maybe<Array<Maybe<Notebook>>>;
  notebooks?: Maybe<Array<Maybe<Notebook>>>;
  notes?: Maybe<Array<Maybe<Note>>>;
};


export type QueryGetNotebooksOfUserArgs = {
  userId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
};


export type MutationCreateUserArgs = {
  userInput?: Maybe<UserInput>;
};
