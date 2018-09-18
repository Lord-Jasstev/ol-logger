const colors = require('colors')

const colorScheme = {
  successBadge: ['green', 'inverse'],
  success: 'green',

  warningBadge: ['yellow', 'inverse'],
  warning: 'yellow',

  errorBadge: ['red', 'inverse'],
  error: 'red',

  infoBadge: ['blue'],
  info: 'blue',

  connectedBadge: ['magenta', 'inverse'],
  connected: 'magenta',

  eventBadge: ['cyan', 'inverse'],
  event: 'cyan'
}

colors.setTheme(colorScheme)

function log(entryType, message, data){
  const badgeName = `[${entryType.toUpperCase().padEnd(9, ' ')}]`
  const badgeColor = `${entryType}Badge`
  console.log(colors[badgeColor](badgeName) + ' ' + colors[entryType](message))
  if( data ) console.log(colors[entryType](data))

}


module.exports = log