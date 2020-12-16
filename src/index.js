const specs = require.context('./specs', true, /\.spec\.js$/, 'lazy');

function attachSpecClickListeners() {
  const specLinks = document.querySelectorAll('.spec-link');
  specLinks.forEach((el) => {
    el.addEventListener('click', (evt) => {
      // returns a promise that resolves to the Module object
      // if you care to interact with it.
      specs(evt.target.dataset.name);
    });
  });
}

function render() {
  return `
<p>These are the specs</p>
<ul>
  ${specs
    .keys()
    .map(
      (name) =>
        `<li><a href="#" class="spec-link" data-name=${name}>${name}</a></li>`
    )
    .join('\n')}
</ul>
  `;
}

const app = document.createElement('div');
app.innerHTML = render();
document.body.appendChild(app);
attachSpecClickListeners();
