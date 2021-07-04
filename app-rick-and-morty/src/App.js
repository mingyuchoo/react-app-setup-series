import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const StyledApp = styled.div`
  margin: auto;
  border: dashed 1px red;
  padding: 0;
  position: relative;
  width: 100%;

  ul {
    margin: 0;
    border: dotted 1px green;
    width: 100%;
    text-decoration: none;

    &:hover {
      color: black;
      background-color: skyblue;
    }
    &:focus:active {
      color: white;
      background-color: black;
    }
  }

  li {
    margin: 3px;
    display: inline-block;
    text-decoration: none;
  }
`;

const StyledHeader = styled.div`
  margin: auto;
  border: line 1px green;
  padding: 0;
  width: 100%;
  color: white;
  background-color: black;

  input {
    margin: 0;
    border: none;
    padding: 3px 3rem;

    &:hover {
      color: black;
      background-color: skyblue;
    }
    &:focus:active {
      color: white;
      background-color: black;
    }
  }
`;

const StyledPopup = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);

  .inner {
    margin: auto;
    padding: 3rem;
    position: absolute;
    top: 25%;
    right: 25%;
    bottom: 50%;
    left: 25%;
    color: black;
    background-color: white;
    text-decoration: none;
    text-align: center;
  }
`;

const Popup = ({ setPopup, id, name, episode, created }) => {
  return (
    <StyledPopup>
      <div class="inner">
        <h1>{name}</h1>
        <h2>{episode}</h2>
        <pre>
          {id} - {created}
        </pre>
        <input
          type="button"
          value="Close"
          onClick={() => {
            setPopup(false);
          }}
        />
      </div>
    </StyledPopup>
  );
};

const App = () => {
  const [page, setPage] = useState(1);
  const [popup, setPopup] = useState(false);
  const { loading, error, data } = useQuery(
    gql`
      query getEpisodes($page: Int) {
        episodes(page: $page) {
          info {
            count
            pages
            next
            prev
          }
          results {
            id
            name
            episode
            created
          }
        }
      }
    `,
    {
      variables: {
        page: page,
      },
    }
  );
  return (
    <StyledApp>
      {popup ? (
        <Popup
          setPopup={setPopup}
          id="1"
          name="sample-name"
          episode="sample-episode"
          created="sample-created"
        />
      ) : null}
      <StyledHeader>
        {data && (
          <ul>
            <li>count: {data.episodes.info.count}</li>
            <li>totoal pages: {data.episodes.info.pages}</li>
            <li>
              current pages:{" "}
              {data.episodes.info.prev ? data.episodes.info.prev + 1 : 1}
            </li>
            <li>
              <input
                type="button"
                value="prev"
                disabled={data.episodes.info.prev ? false : true}
                onClick={() => {
                  setPage(data.episodes.info.prev);
                }}
              />
            </li>
            <li>
              <input
                type="button"
                value="next"
                onClick={() => {
                  setPage(data.episodes.info.next);
                }}
              />
            </li>
          </ul>
        )}
      </StyledHeader>
      {loading && <p>Loading</p>}
      {error && <p>Error</p>}
      {data &&
        data.episodes.results.map((item) => (
          <ul
            key={item.id}
            onClick={() => {
              setPopup(true);
            }}>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.episode}</li>
          </ul>
        ))}
    </StyledApp>
  );
};

export default App;
