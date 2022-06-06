document.querySelector('#search2').addEventListener('click', (e) => {
    e.preventDefault();

    const station = document.querySelector('#text-input1').value
    const station2 = document.querySelector('#text-input2').value

    const xhr = new XMLHttpRequest();
    const url = `https://irctc1.p.rapidapi.com/api/v1/searchStation?query=${station}&${station2}`
    xhr.open('GET', url)

    xhr.setRequestHeader("X-RapidAPI-Host", "irctc1.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", "888880ba24msh3c26f7ba2d9e7eap1b2898jsn54a43c8e1641");

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)
            console.log(response);

            let output = '';
            response.data.forEach(item => {
                [0, 1, 2]
                output += `
                <form  class="card"  id="Train2">
                <div class="">
                <a><b>name:</b> ${item.name}</a>
                <a><b>eng name:</b> ${item.eng_name}</a>
                <a><b>code:</b> ${item.code}</a>
                <a><b>state name:</b> ${item.state_name}</a>   
                </div>
                </form>   
                `
            })

            document.querySelector("#output").innerHTML += output

        }

    }

    xhr.send();

})

const btn = document.getElementById('submitBtn');
btn.addEventListener('click', function handleClick(e) {
    event.preventDefault()
    const textinput = document.getElementById('text-input');
    console.log();
    (textinput.value);

});