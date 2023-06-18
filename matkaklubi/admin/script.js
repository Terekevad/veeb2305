  //const API_URL = 'https://karoli-matkad-app.onrender.com';
  const API_URL = 'http://localhost:10000';
  const matkad = document.querySelector('#matkad');
  const uusMatk = document.querySelector('#uus-matk');
  const uusMatkNimi = document.querySelector('#uus-matk-nimi');
  const uusMatkLaiuskraad = document.querySelector('#uus-matk-laiuskraad');
  const uusMatkPikkuskraad = document.querySelector('#uus-matk-pikkuskraad');
  const uusMatkHind = document.querySelector('#uus-matk-hind');
  const uusMatkPildiUrl = document.querySelector('#uus-matk-pildi-url');
  const uusMatkAlgus = document.querySelector('#uus-matk-algus');
  const uusMatkLopp = document.querySelector('#uus-matk-lopp');
  const uusMatkKirjeldus = document.querySelector('#uus-matk-kirjeldus');
  matkad.innerHTML = 'Loading...'

  function startCreatingNewTrek() {
      uusMatk.style.display = 'flex';
  }

  function closeNewTrekPanel() {
      uusMatk.style.display = 'none';
  }

  async function addTrek() {
    if (!isAnyInputEmpty()) {
        return;
    }
    try {
        const treks = await fetch(`${API_URL}/api/treks`, {
            method: 'POST',
            headers: {
                'Contetnt-Type': 'application/json'
            },
            body: JSON.stringify({
                name: uusMatkNimi.value,
                latitude: uusMatkLaiuskraad.value,
                longitude: uusMatkPikkuskraad.value,
                price: uusMatkHind.value,
                imageURL: uusMatkPildiUrl.value,
                startTime: uusMatkAlgus.value,
                endTime: uusMatkLopp.value,
                description: uusMatkKirjeldus.value,
            })

        }).then((response => response.json()));
        console.log(treks);
        matkad.innerHTML = `
        <h2>Matkad</h2>
        `;
        for (let trek of treks.rows.rows) {
            matkad.innerHTML = `
                <a href="">${trek.name}</a>
            `;
        }
        matkad.innerHTML += `
             <a onclick="startCreatingNewTrek()" href="javascript:;">Lisa uus matk</a>
        `;
    } catch (e) {
        console.log(e);
        matkad.innerHTML = 'Error, couldn\´t fetch treks';
    }

  }

  async function getTreks() {
      try {
          const treks = await fetch(`${API_URL}/api/treks`).then((response => response.json()));
          console.log(treks);
          matkad.innerHTML = `
          <h2>Matkad</h2>
          `;
          for (let trek of treks.rows.rows) {
              matkad.innerHTML = `
                  <a href="">${trek.name}</a>
              `;
          }
          matkad.innerHTML += `
               <a onclick="startCreatingNewTrek()" href="javascript:;">Lisa uus matk</a>
          `;
      } catch (e) {
          console.log(e);
          matkad.innerHTML = 'Error, couldn\´t fetch treks';
      }
  }

  function isAnyInputEmpty() {
    if (
    uusMatkNimi.value === '' || 
    uusMatkLaiuskraad.value === '' ||
    uusMatkPikkuskraad.value === '' ||
    uusMatkHind.value === '' ||
    uusMatkPildiUrl.value === '' ||
    uusMatkAlgus.value === '' ||
    uusMatkLopp.value === '' ||
    uusMatkKirjeldus.value === ''
  ) {
    return true;
  }
  return false;
}

document.getElementById("lisa-matk-nupp").addEventListener("click", function(event) {
    event.preventDefault();
});

  getTreks();