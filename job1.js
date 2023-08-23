// Get all posts
get('posts');

// Filter posts by user id
fn(state => {
  const posts = state.data;

  // Define the user id for filtering
  const userIdToFilter = 1;

  // Use Array.filter to get posts for the specified user id
  const filteredPosts = posts.filter(post => post.userId === userIdToFilter);

  // Return the filtered posts
  return { ...state, filteredPosts };
});

// Log the filtered posts
fn(state => {
  const { filteredPosts } = state;

  // Log each filtered post
  filteredPosts.forEach(post => {
    console.log('Filtered Post', JSON.stringify(post, null, 2));
  });

  return state;
});
