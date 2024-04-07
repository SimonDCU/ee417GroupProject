function filterRooms() {
    var input, filter, ul, li, i, txtValue;
    input = document.getElementById('searchBox');
    filter = input.value.toUpperCase();
    ul = document.getElementById('roomsList');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


// Fetch the rooms from the JSON file and populate the list
function loadRooms() {
    fetch('assets/rooms.json')
        .then(response => response.json())
        .then(data => {
            const roomsList = document.getElementById('roomsList');
            data.forEach(room => {
                const li = document.createElement('li');
                li.textContent = room;
                roomsList.appendChild(li);
            });
        })
        .catch(error => console.error('Error loading rooms:', error));
}

// Call the loadRooms function to populate the list on page load
document.addEventListener('DOMContentLoaded', loadRooms);
