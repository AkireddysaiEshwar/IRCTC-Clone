document.querySelector('#search').addEventListener('click', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    const url = "https://irctc1.p.rapidapi.com/api/v1/searchTrain?query=190"
    xhr.open('GET', url)

    xhr.setRequestHeader("X-RapidAPI-Host", "irctc1.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", "888880ba24msh3c26f7ba2d9e7eap1b2898jsn54a43c8e1641");

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)
            console.log(response);

            let output = '';
            response.data.forEach(item => {
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23.24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
                output += `
                <form  class="card"  id="Train">
                <div class="">
                <p><b>train number:</b> ${item.train_number}</p>
                <p><b>train name:</b> ${item.train_name}</p>
                <p><b>new train number:</b> ${item.new_train_number}</p>
                <p><b>eng train name:</b> ${item.eng_train_name}</p>        
                </div>
                </form>
                `
            })

            document.querySelector("#output").innerHTML += output
        }
    }

    xhr.send();

})