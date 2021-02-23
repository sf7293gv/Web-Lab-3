let usCoordiantes = [37.09024, -95.712891]; // coordinates of the US
let zoomLevel = 4; // the appropriate map zoom level
let map = L.map('map').setView(usCoordiantes, zoomLevel);
// pass the name of the map/ the coordinates/ the zoom level to "L" a leaflet function that creates the map


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); // this function builds the tiles of the map


bridges = [ // an array that contains 5 objects that contain information about the bridges
    {name: "Verrazano-Narrows Bridge", cityState: "New York, NY", span: 1298.4, coordiantes: [40.6066, -74.0447]},
    {name: "Golden Gate Bridge", cityState: "San Francisco and Marin, CA", span: 1280.2, coordiantes: [37.8199, -122.4783]},
    {name: "Mackinac Bridge", cityState: "Mackinaw and St Ignace, MI", span: 1158.0, coordiantes: [45.8174, -84.7278]},
    {name: "George Washington Bridge", cityState: "New York, NY and New Jersey, NJ", span: 1067.0, coordiantes: [40.8517, -73.9527]},
    {name: "Tacoma Narrows Bridge", cityState: "Tacoma and Kitsap, WA", span: 853.44, coordiantes: [47.2690, -122.5517]}
]

// campuses.forEach(function (campus) {
//     let markerText = `${campus.name}<br><a href="${campus.website}">Website</a>`
//     L.marker(campus.coordinates).bindPopup(markerText).addTo(map);
// });

let bridgeIcon = L.icon({ // the L.icon leaflet function is used to add an icon instead of the regular popup icon
    iconUrl: 'bridge.png',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

bridges.forEach(function (b) { // loop over the bridges in the bridges array, and
    let markerText = `${b.name}<br><p>Stan: ${b.span}</p>`;
    L.marker(b.coordiantes, {icon: bridgeIcon}).bindPopup(markerText).addTo(map); // add a marker for each bridge
});