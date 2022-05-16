import './App.css';
import React from 'react';
import {useQuery, gql} from '@apollo/client';

function App() {
  const QUERY = gql`query MyQuery {
    users {
      age
      first_name
      id
      last_name
    }
  }
  `;
  const {data, loading, error} = useQuery(QUERY);
  console.log(`data: ${data}, loading: ${loading}, error: ${error}`);
  return (
    <div>
      {!loading && data ? <div>
        <ul>
          {data.users.map((e,i)=><li key={i}>{e.first_name}</li>)}
          </ul> </div>: <div style={{backgroundColor: 'red'}}>
        <h2 style={{color: 'white', fontSize: '40px'}}>
          Loading ...
        </h2>
      </div>}
    </div>
  );
}

export default App;
