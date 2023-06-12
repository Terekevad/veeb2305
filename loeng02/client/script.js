const app = document.querySelector('#app');

fetch('http://localhost:8000')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log('õnnestus', data);
        for (let matk of data) {

            console.log(matk);
            app.innerHTML += `
        <div class="matk">
        <h2>${matk.title}</h2>
        <div>Start: ${matk.startTime}</div>
        <div>${matk.description}</div>
        <a href="https://www.google.com/maps/@${matk.lat},${matk.long},17z" target="_blank">Koguneme siin!</a><br>
        <div>Osalejad: ${matk.participants}</div>
        <img src="${matk.imageUrl}">
        </div>
        `;
        }
    })
    .catch(function () {
        // handle the error
        console.log('ei õnnestunud :/');
    });