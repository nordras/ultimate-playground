const button = document.getElementById('open-folder');
const list = document.getElementById('path-list');

button.addEventListener('click', async () => {
  const paths = await window.api.openFolder();

  list.innerHTML = '';

  if (paths.length === 0) {
    const item = document.createElement('li');
    item.textContent = 'No folder selected.';
    list.appendChild(item);
    return;
  }

  paths.forEach((path) => {
    const item = document.createElement('li');
    item.textContent = path;
    list.appendChild(item);
  });
});
