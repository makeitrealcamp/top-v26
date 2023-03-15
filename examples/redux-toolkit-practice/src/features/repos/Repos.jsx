import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectRepos, setTitle, clearTitle, getReposAsync } from "./repoSlice";

const Repos = () => {
  const dispatch = useDispatch();
  const { title, loading, list: repositories } = useSelector(selectRepos);

  useEffect(() => {
    dispatch(getReposAsync());
  }, []);

  if (loading) return <h1>Loading....</h1>;

  return (
    <>
      <h1>{title}</h1>
      <hr />
      <input
        type="text"
        value={title}
        onChange={(e) => dispatch(setTitle(e.target.value))}
      />
      <button onClick={(e) => dispatch(clearTitle())}>Clear title</button>
      <div>
        {repositories &&
          repositories.length > 0 &&
          repositories.map((item) => <h1>{item.name}</h1>)}
      </div>
    </>
  );
};

export default Repos;
