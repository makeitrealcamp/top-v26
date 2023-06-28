import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";
import { Typography, Space } from "antd";
import { Divider } from "antd";

const { Text } = Typography;
const { Meta } = Card;

const Article = ({ data }) => {
  const { title, description, image, author } = data;
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img src={`https:${image.url}`} alt={image.fileName} />}
    >
      <Meta title={title} description={description} />
      <Divider />
      <Space direction="vertical">
        {author && <Text type="warning">Author: {author}</Text>}
      </Space>
    </Card>
  );
};

Article.propTypes = {
  data: PropTypes.shape({
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
  }),
};

Article.defaultProps = {
  data: {
    title: "Title",
    description: "Description",
  },
};

export default Article;
