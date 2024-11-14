window.addEventListener('DOMContentLoaded', function () {
  // Create the container div
  var container = document.createElement('div');
  container.className = 'container';

  // Create the header container div
  var headerContainer = document.createElement('div');
  headerContainer.className = 'header-container';

  // Create the image element
  var img = document.createElement('img');
  img.src = '/icon.png';
  img.style.height = '50px';

  // Create the h1 element
  var h1 = document.createElement('h1');
  h1.textContent = 'iidk.dev';

  // Append the image and h1 to the header container
  headerContainer.appendChild(img);
  headerContainer.appendChild(h1);

  // Create the separator (hr) element
  var hr = document.createElement('hr');
  hr.className = 'separator';

  // Create the navigation links
  var navLinks = document.createElement('div');
  navLinks.innerHTML = '<a href="/">home</a> - <a href="/projects">projects</a> - <a href="/games">games</a>';

  // Append everything to the container
  container.appendChild(headerContainer);
  container.appendChild(hr);
  container.appendChild(navLinks);

  // Prepend the container to the body
  document.body.insertBefore(container, document.body.firstChild);
});
