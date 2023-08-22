// Get all posts
get('https://jsonplaceholder.typicode.com/posts/180');

// Get post by index helper function
fn(state => {
  // const getPostbyIndex = (index) => dataValue(index)(state);
  console.log(dataValue(1));

  return { ...state };
});