import { HTML, nInput, nButton } from 'https://cdn.jsdelivr.net/npm/afrontend@0.0.2/src/index.min.js'

const app = HTML.fromId('app')

const input = new nInput()
input.setPlaceholder('input')
app.append(input)

const button = new nButton()
button.setText('button')
button.addEventListener('click', () => window.alert(`value: ${input.getValue()}`))
app.append(button)