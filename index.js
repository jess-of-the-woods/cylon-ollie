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

    after(500, function() {
      my.ollie.color(0xFF0000);
    });

    after(1000, function() {
      my.ollie.roll(50, 0);
    });

    after(3000, function() {
      my.ollie.roll(60, 180);
    });

    after(2000, function() {
      my.ollie.roll(60, 40);
    });

    after(3000, function() {
      my.ollie.roll(60, 280);
    });

    after(2000, function() {
      my.ollie.roll(60, 180);
    });

    after(3000, function() {
      my.ollie.stop();
    });
  }
}).start();
