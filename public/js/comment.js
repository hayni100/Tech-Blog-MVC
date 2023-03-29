console.log('comment js is hooked');

const handleCommentSubmit = async (event) => {
  event.preventDefault();
  console.log('comment submit button is clicked');

  const text = document.querySelector('#comment-text').value.trim();
  console.log('comment input', text);
  if (text) {
    const response = await fetch(`/api/posts/:postId/comment`, {
      method: 'POST',
      body: JSON.stringify({text}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', handleCommentSubmit);
