import React from "react";
import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "urd10tvlmnck",
    accessToken: "-zzilqxAgU7x5l72vgcEVvu_7i09AUztMTKhE3Prv6Q",
    host: "preview.contentful.com",
  });

  const getArticles = async () => {
    try {
      const articles = await client.getEntries({
        content_type: "articles",
      });
      const { items } = articles;
      console.log(items);
      const sanitizedData = items.map((item) => {
        const img = item.fields.image.fields?.file || "";
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
