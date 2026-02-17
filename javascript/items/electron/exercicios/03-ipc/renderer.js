const form = document.getElementById('form-add');
const result = document.getElementById('result');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;

  try {
    const sum = await window.api.add(a, b);
    result.textContent = `Result: ${sum}`;
  } catch (error) {
    result.textContent = `Error: ${error.message}`;
  }
});
