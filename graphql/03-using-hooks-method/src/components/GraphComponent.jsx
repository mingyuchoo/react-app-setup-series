import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

const GET_BOOKS = gql`
  query {
    books {
      title
      author
    }
  }
`;

function GraphComponent() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return (
      <div className="App">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (data) {
    if (data.books.length > 0) {
      return (
        <div>
          {data.books.map((book) => (
            <div key={book.title}>
              <p>{book.title}</p>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default GraphComponent;
