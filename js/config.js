fetch('./config/config.json')
  .then(res => {
    if (!res.ok) {
      throw new Error('HTTP error ' + res.status);
    }
    return res.json();
  })
  .then(data => {
    console.log('Config data:', data);
    version.textContent = `v${data.version}`;
  })
  .catch(err => {
    console.error('Fetch failed:', err);
    version.textContent = 'Version not available';
  });

const version = document.createElement('div');
version.id = 'version';
version.textContent = 'Loading version...';
document.body.appendChild(version);
