
```html
<!-- index.html -->

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>tarsislimadev</title>
  <script type="importmap">
    {
      "imports": {
        "afrontend": "https://cdn.jsdelivr.net/npm/afrontend@3.0.3/src/index.js"
      }
    }
  </script>
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

import { HTML } from 'afrontend'

export class Page extends HTML {
  onCreate() {
    super.onCreate()
    this.setText('page')
  }
}
```
