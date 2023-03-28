const newFormHandler = async (event) => {
  event.preventDefault();
  console.log("profile.js is hooked")
  const text = document.querySelector('#post-text').value.trim();
  const title = document.querySelector('#post-title').value.trim();
  // const needed_funding = document
  //   .querySelector('#project-funding')
  //   .value.trim();
  // const description = document.querySelector('#project-desc').value.trim();

  if (text && title) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ text, title }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
