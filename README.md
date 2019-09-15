# webpack-notify-plugin
A webpack notifier

## Installation

npm
```
npm install webpack-notify-plugin
```
yarn
```
yarn add webpack-notify-plugin
```

## Sample Usage
```
const Notifier = require('webpack-notify-plugin');

module.exports = {
  plugins: [
    new Notifier({ message: "Great we're good to go!", icon: 'https://www.goidp.com/wp-content/uploads/wordpress-1.png' })
  ]
}
```