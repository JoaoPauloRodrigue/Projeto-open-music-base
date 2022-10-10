function toggleDarkMode() {
    const dkBtn     = document.getElementById('darkMode');
    const toggleBtn = document.getElementById('toggleicon');
    const html      = document.querySelector('html');

    if(localStorage.darkmode){
        html.classList.toggle('dark-mode');
        toggleBtn.src = './assets/img/sun.svg';
    }

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

        if(html.classList.contains('dark-mode')) {

            toggleBtn.src = './assets/img/sun.svg'
        }
        else if(!html.classList.contains('dark-mode')){
            toggleBtn.src = './assets/img/moon.svg'
        }
    })
}
toggleDarkMode()