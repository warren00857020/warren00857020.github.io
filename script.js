// Fetch GitHub repositories and display them in the #projects section
async function loadRepos() {
  const username = 'warren00857020';
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    const list = document.getElementById('repo-list');
    repos.forEach(repo => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = repo.html_url;
      a.textContent = repo.name;
      a.target = '_blank';
      li.appendChild(a);
      list.appendChild(li);
    });
  } catch (err) {
    console.error('Unable to load repos', err);
  }
}

document.addEventListener('DOMContentLoaded', loadRepos);
