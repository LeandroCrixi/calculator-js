let calculation = []
let accumulativeCalculation

const calculate = (display) => {
    const buttons = document.querySelectorAll('button')

    buttons.forEach(button => button.addEventListener('click', (e) => {
        const value = e.target.textContent
        if (value === 'CLEAR') {
            calculation = []
            display.textContent = 0
        } else if (value === '=') {
            display.textContent = eval(accumulativeCalculation)
        } else {
            calculation.push(value)
            accumulativeCalculation = calculation.join('')
            display.textContent = accumulativeCalculation
        }
    }))
}

export { calculate }