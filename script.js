
async function loadRepos() {
  const username = 'warren00857020';
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();

    const container = document.getElementById('sections');
    repos.forEach(repo => {
      const sec = document.createElement('section');
      sec.className = 'full-screen project';
      sec.innerHTML = `\n        <h2>${repo.name}</h2>\n        <p>${repo.description || ''}</p>\n        <p><a href="${repo.html_url}" target="_blank">GitHub 連結</a></p>\n      `;
      container.appendChild(sec);

    });
  } catch (err) {
    console.error('Unable to load repos', err);
  }
}

document.addEventListener('DOMContentLoaded', loadRepos);
