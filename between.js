document.querySelector('#submitBtn').addEventListener('click', (e) => {
    e.preventDefault();

    // const station3 = document.querySelector('#text-input3').value
    // const station4 = document.querySelector('#text-input4').value

    const xhr = new XMLHttpRequest();
    const url = "https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations?fromStationCode=bju&toStationCode=bdts"
    xhr.open('GET', url)

    xhr.setRequestHeader("X-RapidAPI-Host", "irctc1.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", "888880ba24msh3c26f7ba2d9e7eap1b2898jsn54a43c8e1641");

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)
            console.log(response);

            let output = '';
            response.data.forEach(item => {
                [0, 1, 2, 3]
                output += `
                <form  class="card"  id="Train3">
                <div class="">
                <c><b>train number:</b> ${item.train_number}</c>
                <c><b>train name:</b> ${item.train_name}</c>
                <c><b>train type:</b> ${item.train_type}</c>
                <c><b>run days:</b> ${item.run_days}</c>
                <c><b>rain origin station:</b> ${item.rain_origin_station}</c>
                <c><b>train origin station code:</b> ${item.train_origin_station_code}</c>
                <c><b>train destination station:</b> ${item.train_destination_station}</c>   
                <c><b>train destination station code:</b> ${item.train_destination_station_code}</c>
                <c><b>depart time:</b> ${item.depart_time}</c>
                <c><b>arrival time:</b> ${item.arrival_time}</c>
                <c><b>distance</b> ${item.distance}</c>
                <c><b>class type:</b> ${item.class_type}</c>
                <c><b>day of journey:</b> ${item.day_of_journey}</c>     
                </div>
                </form>
                `
            })

            document.querySelector("#output").innerHTML += output
        }
    }

    xhr.send();

})

// const btn = document.getElementById('submitBtn');
// btn.addEventListener('click', function handleClick(e) {
//     event.preventDefault()
//     const textinput = document.getElementById('text-input');
//     console.log();
//     (textinput.value);

// });