import React from "react";

// import { Container } from './styles';

// eslint-disable-next-line react/prop-types
function Repository({ match }) {
  // eslint-disable-next-line react/prop-types
  return <h1>Repository: {decodeURIComponent(match.params.repository)} </h1>;
}

export default Repository;
