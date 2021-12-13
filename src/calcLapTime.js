function GetDigits(n, arr=[]) {
  arr.push(n % 10);

  if (n < 10) 
    return arr.reverse();
  
  return GetDigits(Math.floor(n/10),arr);
}

function CalcLapTime(fastestLap) {
  var output = [];
  var sNumber = fastestLap.toString();
  var len = sNumber.length;
  var lapTime = '';

  for (var i = 0; i < len; i += 1)
    output.push(+sNumber.charAt(i));

  const timeArr = GetDigits(fastestLap)
  
  if (len === 5) {
    // Example time 1.50.842
    // [1.5]0.842
    switch (timeArr[0]) {
      case 9:
        lapTime += '1.3';
        break;
      case 8:
        lapTime += '1.2';
        break;
      case 7:
        lapTime += '1.1';
        break;
      case 6:
        lapTime += '1.0';
        break;
      case 5:
        lapTime += '0.5';
        break;
      case 4:
        lapTime += '0.4';
        break;
      case 3:
        lapTime += '0.3';
        break;
      case 2:
        lapTime += '0.2';
        break;
      case 1:
        lapTime += '0.1';
        break;
    }

    // 1.5[0.]842
    var seconds = timeArr[2].toString() + timeArr[3].toString() + timeArr[4].toString();
    lapTime += timeArr[1].toString() + '.' + seconds;
  } 
  
  if (len === 6) {
    // Example time 1.50.842
    // [1.]50.842
    if (timeArr[1] <= 1)
      lapTime += timeArr[0].toString() + '.';
    else if (timeArr[1] > 1)
      lapTime += timeArr[1].toString() + '.';

    // 1.[5]0.842
    switch (timeArr[1]) {
      case 0:
        lapTime += '4';
        break;
      case 1:
        lapTime += '5';
        break;
      case 2:
        lapTime += '0';
        break;
      case 3:
        lapTime += '1';
        break;
      case 4:
        lapTime += '2';
        break;
      case 5:
        lapTime += '3';
        break;
    }

    // 1.5[0.842]
    var seconds = timeArr[3].toString() + timeArr[4].toString() + timeArr[5].toString();
    lapTime += timeArr[2].toString() + '.' + seconds;
  }

  return lapTime;
}

export { CalcLapTime }