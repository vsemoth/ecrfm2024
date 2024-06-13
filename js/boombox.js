const btn = document.querySelector('.offline')

// console.log(btn.innerHTML)

function tuneIn() {

    btn.innerHTML = "<button onclick='endStream()' class='btn bg-red-500 border-red-700'>End Livestream</button><br /><audio controls autoplay><source src='http://207.154.226.15:8000/listen.html?sid=4' type='audio/mp3'></audio>"

}

function endStream() {

    btn.innerHTML = "<button onclick='tuneIn()' class='btn btn-success btn-block'>Listen Now Live</button>"

}