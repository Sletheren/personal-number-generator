// Generate random from interval
function randomIntFromInterval (min, max, minLength) {
  const addPadding = function (string, length) {
    const pad = Array(length).fill('0').join('');
    return `${pad}${string}`;
  };
  const string = Math.floor(Math.random() * (max - min + 1) + min) + '';
  return string.length < minLength ? addPadding(string, minLength - string.length) : string;
}

// Generate a valid PersonalNumber
function generatePersonalNumber () {
  const day = randomIntFromInterval(1, 31, 2);
  const month = randomIntFromInterval(1, 12, 2);
  const year = randomIntFromInterval(0, 99, 2);
  const digits = randomIntFromInterval(0, 999, 3);
  const pnr = `${year}${month}${day}${digits}`;
  let parts = pnr.split('').map(function (i) {
    return Number(i);
  });
  let inc = 0;
  let multiplicator = 2;
  let product;
  for (var i in parts) {
    product = parts[i] * multiplicator;
    if (product > 9) {
      inc += product - 9;
    } else {
      inc += product;
    }
    multiplicator = multiplicator === 1 ? 2 : 1;
  }
  let control_ = 10 - (inc - Math.floor(inc / 10) * 10);
  if (control_ === 10) {
    control_ = 0;
  }
  return parseInt(`${pnr}${control_}`);
}

module.exports = generatePersonalNumber;
