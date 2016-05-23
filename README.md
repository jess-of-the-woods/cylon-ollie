##Cylon Ollie

install cylon bluetooth low energy module
  `npm i -g cylon-ble`

make sure it builds correctly..
check for any errors, I had build errors

I had to:
  `sudo apt-get install libudev1 libudev-dev`

then install cylon-ble globally:
  `npm i -g cylon-ble again`

###setting permissions to access bluetooth w/out sudo
creates var equal to path to node: ( $ is variable in bash )
  `whichNode=$(eval readlink -f `which node`)`

displays path to node installation:
`echo $whichNode`

`sudo setcap cap_net_raw+eip $whichNode`

try scan for bluetooth devices..
  `cylon-ble-scan`

create a new npm project with a name which isn't cylon  
  `npm init` ( inside a folder )

install cylon, cylon-ble (cylon bluetooth-low-energy) & cylon-sphero-ble (module for talking to sphero w/ cylon)
  `npm i --save cylon cylon-ble cylon-sphero-ble`

create an index.js (or any file name you like)
copy/paste code from the 'how to use' section at https://cylonjs.com/documentation/drivers/ollie/

to run:
  `node index.js` in terminal
