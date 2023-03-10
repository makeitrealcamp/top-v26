import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRepos } from "../../redux/actions/reposAction";

const Repos = ({ fetchRepos, repositories }) => {
  useEffect(() => {
    !repositories && fetchRepos();
  }, []);

  return (
    <div>
      {repositories &&
        repositories.length > 0 &&
        repositories.map((item) => <h1>{item.name}</h1>)}
    </div>
  );
};

const mapStateToProps = ({ github }) => {
  return {
    repositories: github.repositories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepos: () => dispatch(fetchRepos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
