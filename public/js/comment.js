console.log('comment js is hooked');

const handleCommentSubmit = async (event) => {
  event.preventDefault();
  console.log('comment submit button is clicked');

  const comment = document.querySelector('#comment-text').value.trim();
    console.log("comment input", comment)
  if (comment) {
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
        document.location.replace('/post/:id');
      } else {
        alert('Failed to create comment');
      }
    }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', handleCommentSubmit);
