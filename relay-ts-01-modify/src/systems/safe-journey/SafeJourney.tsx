import React, { Component } from "react";
import { QueryRenderer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import { environment } from "./environment";

type SafeJourneyProps = {};
type SafeJourneyState = {};

export default class SafeJourney extends Component<SafeJourneyProps, SafeJourneyState> {
  render() {
    return (
      <QueryRenderer<any>
        environment={environment}
        query={graphql`
          query SafeJourneyQuery {
            findManyGroup {
              id
              name
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            console.log(error);
            return <div>Error!</div>;
          }
          if (!props) return <div>Loading...</div>;
          console.log(props);
          return (
            <div>
              {props.findManyGroup.map((group: any) => (
                <div key={group.id}>
                  {group.id} - {group.name}
                </div>
              ))}
            </div>
          );
        }}
      />
    );
  }
}
