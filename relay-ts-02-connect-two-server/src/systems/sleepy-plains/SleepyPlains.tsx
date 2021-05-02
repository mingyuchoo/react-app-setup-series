import React, { Component } from "react";
import { QueryRenderer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { environment } from "./environment";

type SleepyPlainsProps = {};
type SleepyPlainsState = {};

export default class SleepyPlains extends Component<SleepyPlainsProps, SleepyPlainsState> {
  render() {
    return (
      <QueryRenderer<any>
        environment={environment}
        query={graphql`
          query SleepyPlainsQuery {
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
                <div key={post.id}>
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
