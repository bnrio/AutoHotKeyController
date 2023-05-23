async function run(fileName) {
    const response = await fetch(`/run/${fileName}`);
    const jsonData = await response.json();
    console.log(jsonData);
  }

document.addEventListener('click', event => {
    if (event.target.classList.contains('btn')) {
        // console.log(event.target.dataset.filename)
        run(event.target.dataset.filename);
    }
});

