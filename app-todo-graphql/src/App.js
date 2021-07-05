import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useState, useRef } from "react";
import styled from "styled-components";

const StyledApp = styled.div`
  margin: auto;
  border: dashed 1px red;
  padding: auto;
  width: 100%;
`;
const StyledTitle = styled.div`
  margin: auto;
  border: dashed 1px green;
  padding: auto;
  width: 100%;
`;
const StyledList = styled.div`
  margin: auto;
  border: dashed 1px blue;
  padding: auto;
  width: 100%;
`;
const StyledLoading = styled.div`
  margin: auto;
  border: dashed 1px blue;
  padding: auto;
  width: 100%;
`;
const StyledError = styled.div`
  margin: auto;
  border: dashed 1px blue;
  padding: auto;
  width: 100%;
`;
const StyledItem = styled.div`
  margin: auto;
  border: dashed 1px yellow;
  padding: auto;
  width: 100%;
  &:hover {
    color: white;
    background-color: black;
  }
`;

const StyledInput = styled.input`
  margin: auto;
  border: dashed 1px blue;
  padding: auto;
  width: 35%;
`;
const StyledSubmit = styled.input`
  margin: auto;
  border: dashed 1px blue;
  padding: auto;
  width: 29%;
  &:hover {
    color: white;
    background-color: black;
  }
  &:focus:active {
    color: white;
    background-color: blue;
  }
`;
const StyledButton = styled.input`
  margin: auto;
  border: dashed 1px blue;
  padding: auto;
  width: 50%;
  &:hover {
    color: white;
    background-color: black;
  }
  &:focus:active {
    color: white;
    background-color: blue;
  }
`;

const App = () => {
  const LIMIT = 10;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [offset, setOffset] = useState(0);
  const [limit] = useState(LIMIT);

  const titleRef = useRef();

  const { loading, error, data } = useQuery(
    gql`
      query GetTasks($offset: Int, $limit: Int) {
        tasks(offset: $offset, limit: $limit) {
          completed
          id
          title
          content
          created_at
          updated_at
        }
      }
    `,
    {
      variables: {
        offset: offset,
        limit: limit,
      },
    }
  );

  const [addTask] = useMutation(
    gql`
      mutation AddTask($title: String, $content: String) {
        insert_tasks(objects: { title: $title, content: $content }) {
          returning {
            id
            title
            content
          }
        }
      }
    `
  );

  const [removeTask] = useMutation(
    gql`
      mutation MyMutation($id: Int) {
        delete_tasks(where: { id: { _eq: $id } }) {
          returning {
            id
            title
            content
          }
        }
      }
    `
  );
  return (
    <StyledApp>
      <StyledTitle>
        <h1>Todo List</h1>
      </StyledTitle>
      <StyledInput
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        ref={titleRef}
      />
      <StyledInput
        type="text"
        placeholder="Content"
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <StyledSubmit
        type="submit"
        value="Submit"
        onClick={() => {
          addTask({
            variables: {
              title: title,
              content: content,
            },
            refetchQueries: [`GetTasks`],
          });
          setTitle("");
          setContent("");
          titleRef.current.focus();
        }}
      />
      <StyledList>
        {loading && <StyledLoading>Loading</StyledLoading>}
        {error && <StyledError>Error</StyledError>}
        {data &&
          data.tasks.map((item) => (
            <StyledItem
              key={item.id}
              onDoubleClick={() => {
                removeTask({
                  variables: {
                    id: item.id,
                  },
                  refetchQueries: [`GetTasks`],
                });
              }}>
              {item.id} - {item.title} - {item.content}
            </StyledItem>
          ))}
      </StyledList>
      <StyledButton
        type="button"
        value="Prev"
        disabled={offset ? false : true}
        onClick={() => {
          setOffset(offset - limit);
        }}
      />
      <StyledButton
        type="button"
        value="Next"
        onClick={() => {
          setOffset(offset + limit);
          console.log(data);
        }}
      />
    </StyledApp>
  );
};

export default App;
