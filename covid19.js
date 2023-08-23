get('historical/all?lastdays=all');

fn(state => {
  const posts  = state.data;
  console.log(posts);
  return state;
});