# webpack-notify-plugin
A webpack notifier

## Installation

```
npm install webpack-notify-plugin --save-dev
```

## Sample Usage
```
const Notifier = require('webpack-notify-plugin);

module.exports = {
  plugins: [
    new Notifier({ message: "Great we're good to go!", icon: 'https://www.goidp.com/wp-content/uploads/wordpress-1.png' })
  ]
}
```