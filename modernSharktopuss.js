var keypress = require('keypress');
var Cylon = require('cylon');

Cylon.robot({
  connections: {
    bluetooth: { adaptor: 'central', uuid: 'c136ba415e2e', module: 'cylon-ble' }
  },
  devices: {
    ollie: { driver: 'ollie', module: 'cylon-sphero-ble' }
  },
  work: function(my) {
    // console.log('my: ', my)
    // make `process.stdin` begin emitting "keypress" events
    keypress(process.stdin);

    // listen for the "keypress" event
    process.stdin.on('keypress', function (ch, key) {
      console.log('got "keypress"', key);
      if (key && key.name == 'left') {
            my.ollie.color(0x00FFFF);
            my.ollie.setHeading (0, function(){
              console.log('setHeading')
            })
            after(100, function() {
              my.ollie.color(0xFF0000);
            });

            after(200, function() {
              my.ollie.roll(70, 270);
            });
      } // close if
      else if (key && key.name == 'right') {
        my.ollie.color(0x00FFFF);
        my.ollie.setHeading (0, function(){
          console.log('setHeading')
        })
        after(100, function() {
          my.ollie.color(0xFF0000);
        });

        after(200, function() {
          my.ollie.roll(70, 90);
        });
      }
      else if (key && key.name == 'up') {
        my.ollie.color(0x00FFFF);
        my.ollie.setHeading (0, function(){
          console.log('setHeading')
        })
        after(100, function() {
          my.ollie.color(0xFF0000);
        });

        after(200, function() {
          my.ollie.roll(70, 0);
        });
      }
      else if (key && key.name == 'down') {
        my.ollie.color(0x00FFFF);
        my.ollie.setHeading (0, function(){
          console.log('setHeading')
        })
        after(100, function() {
          my.ollie.color(0xFF0000);
        });

        after(200, function() {
          my.ollie.roll(70, 180);
        });
      }
      else if (key && key.name == 's') {
        after(0, function() {
          my.ollie.stop();
        });
      }
      else if (key && key.ctrl && key.name == 'c') {
        process.stdin.pause();
      }
    }) // close process.stdin.on
    process.stdin.setRawMode(true);
    process.stdin.resume();
  } // close work fn
}).start(); // close Cylon.robot
