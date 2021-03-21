let url = 'https://api.wheretheiss.at/v1/satellites/25544';

let issLat = document.querySelector('#iss-lat');
let issLong = document.querySelector('#iss-long');
let issDate = document.querySelector('#date');
let update = 10000;
let maxFailedAttempts = 3;

let issMarker;
let issIcon = L.icon({
    iconUrl: 'noun_iss_956251.png',
    iconSize: [40, 40],
    iconAnchor: [25, 25]
})

let map = L.map('map').setView([0, 0], 1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

iss(maxFailedAttempts)
// setInterval(iss, update);

function iss(attempts) {
    if (attempts <= 0) {
        alert('Failed after several attempts')
        return;
    }

    fetch(url).then((res) => {
        return res.json()
    }).then((issData) => {
        console.log(issData)
        let lat = issData.latitude
        let long = issData.longitude
        issLat.innerHTML = lat
        issLong.innerHTML = long
        // create marker if it doesn't exist/ move it if it does
        if (!issMarker) {
            // create it
            issMarker = L.marker([lat, long], {icon: issIcon}).addTo(map);
        } else {
            issMarker.setLatLng([lat, long])
        }
        let date = Date();
        issDate.innerHTML = `This data was fetched at ${date}`;
    }).catch((error) => {
        attempts--;
        console.log('Error', error)
    }).finally( () => {
        setTimeout(iss, update, attempts);
    });
}``
