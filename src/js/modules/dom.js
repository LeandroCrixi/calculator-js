const displayingContent = (callback) => {
    const display = document.querySelector('.innerDisplay')
    callback(display)
}

const currentYear = () => {
    const year = new Date().getFullYear();
    const current_year = document.getElementById('current-year')
    current_year.textContent = year
}

export { displayingContent, currentYear }