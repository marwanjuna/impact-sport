const api_key = "b864eea518104ee49de111f1d442d85e";

// default standings page
fetch('http://api.football-data.org/v2/competitions/PL/standings', {
    headers: {
        'X-Auth-Token': api_key
    }
})
.then(response => response.json())
.then(response => {
    const ranking = response.standings[0].table;
    let rank = '';
    ranking.forEach(m => rank += showRank(m));
    const tableContainer = document.querySelector('.pos');
    tableContainer.innerHTML = rank;

            // // ketika tombol detail diklik
            // const modalDetailButton = document.querySelectorAll('.modal-detail-button');
            // modalDetailButton.forEach(btn => {
            //     btn.addEventListener('click', function() {
            //         const tmp = response.standings[0].table;
            //         let ids = [];

            //         for (let i = 0; i < tmp.length; i++) {
            //             ids.push(tmp[i].team.id);
            //         }

            //         fetch('https://api.football-data.org/v2/teams/' + ids, {
            //             headers: {
            //                 'X-Auth-Token': api_key
            //             }
            //         })                            
            //         .then(response => response.json())
            //         .then(m => {
            //             const clubDetail = showClubDetail(m);
            //             console.log(clubDetail)
            //             const modalBody = document.querySelector('.modal-body');
            //             modalBody.innerHTML = clubDetail;
            //         });
            //     })
            // });    
});

// event if premier league button on click
const premierLeagueButton = document.querySelector('.premier-league-button');
premierLeagueButton.addEventListener('click', function() {

    changeButtonFormatPremierLeague(); // change format button

    fetch('http://api.football-data.org/v2/competitions/PL/standings', {
        headers: {
            'X-Auth-Token': api_key
        }
    })
    .then(response => response.json())
    .then(response => {
        const ranking = response.standings[0].table;
        let rank = '';
        ranking.forEach(m => rank += showRank(m));
        const tableContainer = document.querySelector('.pos');
        tableContainer.innerHTML = rank;
    });
});

// event if bundesliga button on click
const bundesligaButton = document.querySelector('.bundesliga-button');
bundesligaButton.addEventListener('click', function() {

    changeButtonFormatBundesliga();

    fetch('http://api.football-data.org/v2/competitions/BL1/standings', {
        headers: {
            'X-Auth-Token': api_key
        }
    })
    .then(response => response.json())
    .then(response => {
        const ranking = response.standings[0].table;
        let rank = '';
        ranking.forEach(m => rank += showRank(m));
        const tableContainer = document.querySelector('.pos');
        tableContainer.innerHTML = rank;
    });
});

// event if laliga button on click
const laligaButton = document.querySelector('.laliga-button');
laligaButton.addEventListener('click', function() {

    changeButtonFormatLaliga()

    fetch('http://api.football-data.org/v2/competitions/PD/standings', {
        headers: {
            'X-Auth-Token': api_key
        }
    })
    .then(response => response.json())
    .then(response => {
        const ranking = response.standings[0].table;
        let rank = '';
        ranking.forEach(m => rank += showRank(m));
        const tableContainer = document.querySelector('.pos');
        tableContainer.innerHTML = rank;
    });
});

// event if ligue1 button on click
const ligue1Button = document.querySelector('.ligue1-button');
ligue1Button.addEventListener('click', function() {

    changeButtonFormatLigue1();

    fetch('http://api.football-data.org/v2/competitions/FL1/standings', {
        headers: {
            'X-Auth-Token': api_key
        }
    })
    .then(response => response.json())
    .then(response => {
        const ranking = response.standings[0].table;
        let rank = '';
        ranking.forEach(m => rank += showRank(m));
        const tableContainer = document.querySelector('.pos');
        tableContainer.innerHTML = rank;
    });
});

// event if seria-a button on click
const seriaAButton = document.querySelector('.ligaitaly-button');
seriaAButton.addEventListener('click', function() {

    changeButtonFormatSeriaA();

    fetch('http://api.football-data.org/v2/competitions/SA/standings', {
        headers: {
            'X-Auth-Token': api_key
        }
    })
    .then(response => response.json())
    .then(response => {
        const ranking = response.standings[0].table;
        let rank = '';
        ranking.forEach(m => rank += showRank(m));
        const tableContainer = document.querySelector('.pos');
        tableContainer.innerHTML = rank;
    });
});

// change format button per league
function changeButtonFormatPremierLeague() {
    document.getElementById('premier-league').setAttribute("class", "side-button aktif");
    document.getElementById('bundesliga').setAttribute("class", "side-button");
    document.getElementById('laliga').setAttribute("class", "side-button");
    document.getElementById('ligue1').setAttribute("class", "side-button");
    document.getElementById('serie-a').setAttribute("class", "side-button");
}

function changeButtonFormatBundesliga() {
    document.getElementById('bundesliga').setAttribute("class", "side-button aktif");
    document.getElementById('premier-league').setAttribute("class", "side-button");
    document.getElementById('laliga').setAttribute("class", "side-button");
    document.getElementById('ligue1').setAttribute("class", "side-button");
    document.getElementById('serie-a').setAttribute("class", "side-button");
}

function changeButtonFormatLaliga() {
    document.getElementById('laliga').setAttribute("class", "side-button aktif");
    document.getElementById('bundesliga').setAttribute("class", "side-button");
    document.getElementById('premier-league').setAttribute("class", "side-button");
    document.getElementById('ligue1').setAttribute("class", "side-button");
    document.getElementById('serie-a').setAttribute("class", "side-button");
}

function changeButtonFormatLigue1() {
    document.getElementById('ligue1').setAttribute("class", "side-button aktif");
    document.getElementById('bundesliga').setAttribute("class", "side-button");
    document.getElementById('laliga').setAttribute("class", "side-button");
    document.getElementById('premier-league').setAttribute("class", "side-button");
    document.getElementById('serie-a').setAttribute("class", "side-button");
}

function changeButtonFormatSeriaA() {
    document.getElementById('serie-a').setAttribute("class", "side-button aktif");
    document.getElementById('bundesliga').setAttribute("class", "side-button");
    document.getElementById('laliga').setAttribute("class", "side-button");
    document.getElementById('ligue1').setAttribute("class", "side-button");
    document.getElementById('premier-league').setAttribute("class", "side-button");
}


function showRank(m) {
    let form = m.form;
    let newForm = form.replace(/[^\w\s]/gi, '');
    return `<tr>
    <th class="row">${m.position}</th>
    <td><img src="${m.team.crestUrl}" class="logo-in-cell"></td>
    <td>${m.team.name}</td>
    <td>${m.points}</td>
    <td>${m.won}</td>
    <td>${m.draw}</td>
    <td>${m.lost}</td>
    <td>${m.goalDifference}</td>
    <td>${newForm}</td>
    </tr>`;
};

// function showClubDetail(m) {
//     return `<div class="container-fluid">
//                 <div class="row">
//                     <div class="col-md-3">
//                         <img src="${m.crestUrl}" class="img-fluid">
//                     </div>
//                     <div class="col-md">
//                         <ul class="list-group">
//                             <li class="list-group-item"><h4>${m.name}</h4></li>
//                             <li class="list-group-item"><strong>Venue : </strong>${m.venue}</li>
//                             <li class="list-group-item"><strong>Founded : </strong>${m.founded}</li>
//                             <li class="list-group-item"><strong>Website : </strong><a href="${m.website}"></a></li>
//                             <li class="list-group-item"><strong>Email : </strong> <br>${m.email}</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>`;
// }