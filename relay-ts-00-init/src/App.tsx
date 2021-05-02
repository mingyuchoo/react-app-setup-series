// App.js
import React, { Component } from "react";
import { QueryRenderer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import environment from "./environment";

import type { AppUserQuery } from "./__generated__/AppUserQuery.graphql";

type AppProps = {};
type AppState = {};

export default class App extends Component<AppProps, AppState> {
  render() {
    return (
      <QueryRenderer<AppUserQuery>
        environment={environment}
        query={graphql`
          query AppUserQuery {
            getAllPosts {
              id
              title
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) return <div>Error!</div>;
          if (!props) return <div>Loading...</div>;
          console.log(props);
          return (
            <div>
              {props.getAllPosts.map((post: any) => (
                <div>
                  {post.id} - {post.title}
                </div>
              ))}
            </div>
          );
        }}
      />
    );
  }
}
