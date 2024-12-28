# Get started with [afrontend]()

## Quick start

Create a new `index.html` file in your project root

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>afrontend demo</title>
  </head>
  <body></body>
</html>
```

Add a div with id "app" and a <script> module tag before the closing </body>. The script tag must refer to the `index.js` file.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>afrontend demo</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./index.js"></script>
  </body>
</html>
```

Import [afrontend from JSDelivr](https://cdn.jsdelivr.net/npm/afrontend@0.0.1/index.js). Add a text in app!

```html
import { HTML } from 'https://cdn.jsdelivr.net/npm/afrontend@0.0.1/index.js'
HTML.fromId('app').setText('Hello world!')
```
