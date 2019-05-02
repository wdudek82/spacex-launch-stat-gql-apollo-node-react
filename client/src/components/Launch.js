import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo/index';


const Launch = (props) => {
  const { flight_number } = props.match.params;

  const LAUNCH_QUERY = gql`
    query LaunchQuery {
      launch(flight_number: ${flight_number}) {
        mission_name
      }
    }
  `;

  console.log('launch:', flight_number);

  return (
    <Query query={LAUNCH_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <h4>Loading launch...</h4>;
        if (error) return console.log(error);

        console.log('Launch data:', data.launch);

        return `Launch: ${data.launch.mission_name}`;
      }}
    </Query>
  );
};

export default Launch;
