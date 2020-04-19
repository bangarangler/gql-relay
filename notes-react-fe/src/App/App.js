import React from "react";
import QueryRenderer from "babel-plugin-relay";
import graphql from "babel-plugin-relay/macro";
// import { graphql, QueryRenderer } from "react-relay";
import MainPage from "./containers/MainPage";

import environment from "../environment";

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            notes {
              _id
              content
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <MainPage {...props} />;
        }}
      />
    );
  }
}

// function App() {
//   return <div>front end app</div>;
// }

// export default App;
