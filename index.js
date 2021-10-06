let toggle = document.getElementById('toggle')
let sidebar = document.getElementById('sidebar')

console.log(toggle)

toggle.addEventListener('click', function() {
    if(sidebar.classList.contains('hide')) {
        sidebar.classList.remove('hide')
        sidebar.classList.add('show')
    } else {
        sidebar.classList.add('hide')
        sidebar.classList.remove('show')
    }
})