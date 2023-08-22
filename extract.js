get("/posts/1/comments")

fn(state => {
    const comments = state.data;
    const extractedData = comments.map(comment => ({
      name: comment.name,
      email: comment.email,
    }));
    return { ...state, extractedData };
});

fn(state => {
    const { extractedData } = state;
    console.log('Extracted Data from Comments:', extractedData);
    return state;
  });  
  