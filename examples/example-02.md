```html
<!-- index.html -->

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>afrontend</title>
</head>
<body>
  <div id="app"></div>
  <script type="module">
    import { HTML } from 'afrontend'
    import { Page } from './index.js'
    HTML.fromElement(document.body).setStyle('margin', '0')
    HTML.fromId('app').append(new Page())
  </script>
</body>
</html>
```

```js
// index.js

import { HTML } from 'https://tinyurl.com/afrontend'

export class Page extends HTML {
  onCreate() {
    super.onCreate()
    this.setText('page')
  }
}
```
