const input = process.argv.slice(2);
let time = input.filter(time => {
  return (time >= 0) && !isNaN(time);
});
const alarmTimer = function() {
  for (const i of time) {
    setTimeout(() => {
      console.log('ββIt is TIME!ββ');
      return process.stdout.write('\x07');
    }, i * 1000);
  }
};

alarmTimer(time);

