import { WORDPRESS_URL } from "../config.js";

/**
 * Takes a useState setter and optionally an index.
 *
 * If index is omitted all posts are returned.
 *
 * @param {Function} stateSetter
 * @param {Number} [index]
 */
async function fetchPost(stateSetter, index) {
  const response = await fetch(WORDPRESS_URL + "wp/v2/posts");
  /**
   * @type {Array}
   */
  const posts = await response.json();
  const allPostIds = posts.map((p) => p.id);
  console.log("allPostIds", allPostIds);

  if (index === undefined) {
    console.log("posts", posts);
    stateSetter(posts);
    return;
  }

  const post = posts.find((p) => p.id === index) ?? {};
  console.log("post", post);
  stateSetter(post);
}

export { fetchPost };
