import { useEffect, useState } from 'react';

const WORDPRESS_URL = process.env.REACT_APP_WORDPRESS_URL;

export default function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    async function fetchPosts() {
      const response = await fetch(`${WORDPRESS_URL}wp/v2/posts`);

      const data = await response.json();
      setPosts(data);
      console.log(data);
    }

    console.log(posts);

    fetchPosts();
  }, []);
}
