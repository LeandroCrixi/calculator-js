const processData = (data) => {
    const calculator = document.getElementById('calculator')
    const display = document.createElement('input')
    display.classList.add('display')
    display.id = 'display'
    calculator.appendChild(display)

    const dataArray = Object.values(data.digits)

    dataArray.forEach((element) => {
        const button = document.createElement('button')
        button.textContent = element
        calculator.appendChild(button)
    });

    
}

export { processData }
