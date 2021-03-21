let routeNumberInput = document.querySelector('#routeNumber')
let button = document.querySelector('#button')
let busMarkers = [];


let url;
button.addEventListener('click', function () {
    let routeNumberValue = routeNumberInput.value;

    if (routeNumberValue.length == 0 || (routeNumberValue < 2 || routeNumberValue > 852)) {
        alert("Please enter a route number between 2 and 852");
    } else {
        url = `https://svc.metrotransit.org/NexTrip/VehicleLocations/${routeNumberValue}?format=json`;

        let update = 30000;
        let maxFailedAttempts = 3;

        let busIcon = L.icon({
            iconUrl: 'bus.png',
            iconSize: [40, 40],
            iconAnchor: [25, 25]
        })


        mtro(maxFailedAttempts)

        let metroAreaCoordiantes = [44.96, -93.2];
        let zoomLevel = 11;

        let map = L.map('map').setView(metroAreaCoordiantes, zoomLevel);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        function mtro(attempts) {
            if (attempts <= 0) {
                alert('Failed after several attempts')
                return;
            }
            fetch(url).then((res) => {
                return res.json()
            }).then((mctcNorthboundStopResponse) => {
                if (mctcNorthboundStopResponse.length == 0) {
                    alert("There aren't any busses in service for this route")
                } else {
                    console.log(mctcNorthboundStopResponse);
                    // mctcNorthboundStopResponse.forEach(function (object) {
                    //     // console.log(object)
                    //     let direction = "";
                    //     if (object["Direction"] == 0) {
                    //         // console.log("Northbound")
                    //         direction = "Northbound"
                    //     }
                    //     if (object["Direction"] == 1) {
                    //         // console.log("Southbound")
                    //         direction = "Southbound"
                    //     }
                    //
                    //     let busRoute = object["Route"]
                    //     let busTerminal = object["Terminal"]
                    //     let vehicleLat = object["VehicleLatitude"];
                    //     let vehicleLong = object["VehicleLongitude"]
                    //     let marketText = `Bus route: ${busRoute}<br>Direction: ${direction}<br>Terminal: ${busTerminal}`
                    //     if (!busMarker) {
                    //         busMarker = L.marker([vehicleLat, vehicleLong], {icon: busIcon}).bindPopup(marketText).addTo(map);
                    //     } else {
                    //         busMarker.setLatLng([vehicleLat, vehicleLong])
                    //     }
                    //
                    //
                    // });



                    for (let i = 0; i < mctcNorthboundStopResponse.length; i++) {

                        let direction = "";
                        if (mctcNorthboundStopResponse[i]["Direction"] == 0) {
                            // console.log("Northbound")
                            direction = "Northbound"
                        }
                        if (mctcNorthboundStopResponse[i]["Direction"] == 1) {
                            // console.log("Southbound")
                            direction = "Southbound"
                        }

                        let busRoute = mctcNorthboundStopResponse[i]["Route"]
                        let busTerminal = mctcNorthboundStopResponse[i]["Terminal"]
                        let vehicleLat = mctcNorthboundStopResponse[i]["VehicleLatitude"];
                        let vehicleLong = mctcNorthboundStopResponse[i]["VehicleLongitude"]

                        let latLong = [vehicleLat, vehicleLong]




                        let marketText = `Bus route: ${busRoute}<br>Direction: ${direction}<br>Terminal: ${busTerminal}`

                        if (busMarkers[i] == null) {
                            busMarkers[i] = L.marker([vehicleLat, vehicleLong], {icon: busIcon}).bindPopup(marketText).addTo(map)
                        }
                        if (busMarkers[i] != null) {
                            busMarkers[i].setLatLng([vehicleLat, vehicleLong]);
                        }
                    }
                    console.log(busMarkers.length)
                }
            }).catch((error) => {
                attempts--;
                console.log('Error', error)
            }).finally(() => {
                setTimeout(mtro, update, attempts);
            });
        }

    }
});



// fetch(url).then((res) => {
//     return res.json()
// }).then((mctcNorthboundStopResponse) => {
//     console.log(mctcNorthboundStopResponse)
// });