// main.js

// Fetch and display projects
document.addEventListener('DOMContentLoaded', () => {
  const projectList = document.getElementById('project-list');

  // Fetch the projects from projects.json
  fetch('projects.json')
      .then(response => response.json())
      .then(data => {
          data.forEach(project => {
              const projectCard = `
                  <div class="project-card">
                      <img src="${project.image}" alt="${project.title}">
                      <h2>${project.title}</h2>
                      <p>${project.description}</p>
                      <p><strong>Tech Stack:</strong> ${project.techStack.join(', ')}</p>
                      <a href="${project.demoLink}" class="btn">Live Demo</a>
                      <a href="${project.githubLink}" class="btn">GitHub</a>
                  </div>
              `;
              projectList.innerHTML += projectCard;
          });
      })
      .catch(error => {
          console.error('Error loading projects:', error);
      });
});
