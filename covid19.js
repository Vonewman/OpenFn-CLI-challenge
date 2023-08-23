// Fetch historical data for all days
get('historical/all?lastdays=all');

// Process and log the fetched data
fn(state => {
  // Extract the fetched data from the state object
  const posts = state.data;

  // Log the fetched data (historical data for all days)
  console.log(posts);

  // Return the state object unchanged
  return state;
});