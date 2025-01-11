```html
<!-- index.html -->

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Front-end</title>
</head>

<body>
  <div id="app"></div>
  <script type="module" src="./index.js"></script>
</body>
</html>
```

```js
// index.js

import { HTML, nInput, nButton } from 'https://tinyurl.com/afrontend'

const app = HTML.fromId('app')

const input = new nInput()
input.setPlaceholder('input')
app.append(input)

const button = new nButton()
button.setText('button')
button.on('click', () => window.alert(`value: ${input.getValue()}`))
app.append(button)
```
