import { connect } from "react-redux";
import { setMessage, clearMessage } from "./redux/actions/messageAction";
import { Counter } from "./components/Counter";
import { Repos } from "./components/Repos";

function App({ message, setMessage, clearMessage }) {
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleChange} value={message} />
      <h1>{message}</h1>
      <button onClick={clearMessage}>Clear</button>
      <hr />
      <Counter />
      <hr />
      <Repos />
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setMessage: (payload) => dispatch(setMessage(payload)),
  clearMessage: () => dispatch(clearMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
