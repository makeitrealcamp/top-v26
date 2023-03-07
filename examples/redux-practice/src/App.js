import { connect } from "react-redux";
import { setMessage, clearMessage } from "./redux/actions/messageAction";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <h1>{props.message}</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setMessage: (payload) => dispatch(setMessage(payload)),
  clearMessasge: () => dispatch(clearMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
