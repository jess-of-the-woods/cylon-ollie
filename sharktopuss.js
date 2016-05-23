var Cylon = require('cylon');

Cylon.robot({
  connections: {
    bluetooth: { adaptor: 'central', uuid: 'c136ba415e2e', module: 'cylon-ble' }
  },

  devices: {
    ollie: { driver: 'ollie', module: 'cylon-sphero-ble' }
  },

  work: function(my) {
    my.ollie.color(0x00FFFF);

    my.ollie.setHeading (0, function(){
      console.log('setHeading')
    })

    after(100, function() {
      my.ollie.color(0xFF0000);
    });

    after(500, function() {
      my.ollie.roll(50, 350);
    });

    after(3100, function() {
      my.ollie.roll(70, 0);
    });

    after(4300, function(){
      my.ollie.roll(80, 180)
    })

    after(7300, function() {
      my.ollie.stop();
    });
  }
}).start();
