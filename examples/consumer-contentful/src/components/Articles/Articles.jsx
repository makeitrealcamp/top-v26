import React from "react";
import PropTypes from "prop-types";

import { ArticleCard } from "./Article";

const Articles = ({ list }) => {
  return (
    <div>
      {list.map((item, i) => (
        <ArticleCard key={i} data={item} />
      ))}
    </div>
  );
};

Articles.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Title of the article
       */
      title: PropTypes.string.isRequired,
      /**
       * Description of the article
       */
      description: PropTypes.string.isRequired,
      /**
       * URL form the article without https
       */
      image: PropTypes.object,
      /**
       * Author of article : [name - email]
       */
      author: PropTypes.string,
    })
  ).isRequired,
};

Articles.defaultProps = {
  list: [],
};

export default Articles;
