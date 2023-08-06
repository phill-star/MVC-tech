async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="content"]').value;    

  try {
      const response = await fetch(`/api/posts`, {
          method: 'POST',
          body: JSON.stringify({
              title,
              content
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.ok) {
          document.location.replace('/dashboard');
      } else {
          const errorResponse = await response.json();
          alert(errorResponse.message); // Assuming your API sends an error message in the response
      }
  } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('Before addEventListener');
  document.querySelector('#post-form').addEventListener('submit', newFormHandler);
  console.log('After addEventListener');
});
