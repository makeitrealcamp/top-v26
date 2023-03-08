import { useEffect } from "react";
import { connect } from "react-redux";
import {
  setMessage,
  clearMessage,
  getRepos,
} from "./redux/actions/messageAction";

function App(props) {
  console.log("props", props);

  useEffect(() => {
    console.log("****************");
    props.getRepos();
  }, []);

  return (
    <div className="App">
      <h1>{props.message}</h1>
      <div>
        {props.repos && props.repos.map((repo) => <h1>{repo.name}</h1>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setMessage: (payload) => dispatch(setMessage(payload)),
  clearMessasge: () => dispatch(clearMessage()),
  getRepos: () => dispatch(getRepos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
