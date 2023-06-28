import { useEffect, useState } from "react";
import useContentful from "./hooks/useContentful";
import { ArticleList } from "./components/Articles";

import "antd/dist/antd.min.css";

function App() {
  const { getArticles } = useContentful();
  const [articles, setArticles] = useState([]);

  const getData = async () => {
    const articles = await getArticles();
    setArticles(articles);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <ArticleList list={articles} />
    </div>
  );
}

export default App;
