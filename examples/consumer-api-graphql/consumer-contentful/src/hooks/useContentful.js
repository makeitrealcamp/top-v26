import React from "react";
import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "urd10tvlmnck",
    accessToken: "2jAmZg7KasBIC8XPHEWgunmF9OnqZ6WBt2Mft4dAciE",
    host: "cdn.contentful.com",
  });

  const getArticles = async () => {
    try {
      const articles = await client.getEntries({
        content_type: "articles",
      });
      const { items } = articles;
      const sanitizedData = items.map((item) => {
        const img = item.fields.image.fields.file || "";
        const { name, email } = item.fields?.author?.fields || {};

        return {
          ...item.fields,
          image: img,
          author: name && email ? `${name} - ${email}` : "",
        };
      });
      return sanitizedData;
    } catch (error) {
      console.error(error);
    }
  };

  return { getArticles };
};

export default useContentful;
