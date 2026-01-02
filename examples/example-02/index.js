import { HTML } from 'https://cdn.jsdelivr.net/npm/afrontend@0.0.2/src/index.min.js'

export class Page extends HTML {
  onCreate() {
    super.onCreate()
    this.setText('page')
  }
}