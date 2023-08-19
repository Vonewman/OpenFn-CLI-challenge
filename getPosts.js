// Get all posts
get('posts');

fn(state => {
  const posts = state.data;
  console.log(posts[0]);
  return state;
});