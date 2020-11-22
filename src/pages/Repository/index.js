import React, { Component } from "react";
import PropTypes from "prop-types";
import api from "../../services/api";

// import { Container } from './styles';

class Repository extends Component {
  static PropTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }).isRequired,
    }).isRequired,
  };
  state = {
    repository: {},
    issues: [],
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [repositoryGet, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: "open",
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      loading: false,
      repository: repositoryGet.data,
      issues: issues.data,
    });
  }

  render() {
    const { repository, issues, loading } = this.state;
    return <h1>Repository</h1>;
  }
}
export default Repository;
