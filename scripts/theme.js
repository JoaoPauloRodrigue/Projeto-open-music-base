function toggleDarkMode() {
    const dkBtn     = document.getElementById('darkMode');
    const toggleBtn = document.getElementById('toggleicon');
    const html      = document.querySelector('html');

    dkBtn.addEventListener('click', () => {

        html.classList.toggle('dark-mode');
        toggleBtn.classList.toggle('white-bg')

        const dkPref = localStorage.getItem('darkmode');

        if(!dkPref) {
            localStorage.setItem('darkmode', true);
        }

        else if(dkPref) {
            localStorage.removeItem('darkmode');
        }

        if(toggleBtn.classList.contains('white-bg')) {

            toggleBtn.src = './assets/img/sun.svg'
        }
        else {
            toggleBtn.src = './assets/img/moon.svg'
        }
    })
}
toggleDarkMode()