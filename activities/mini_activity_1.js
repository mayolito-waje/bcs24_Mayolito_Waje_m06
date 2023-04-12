const colorCode = (day) => {
  if (typeof day !== 'string') {
    console.log('Invalid input. Please input a string.');
    return;
  }

  let color;

  switch (day.toLowerCase()) {
    case 'monday':
      color = 'black';
      break;
    case 'tuesday':
      color = 'green';
      break;
    case 'wednesday':
      color = 'yellow';
      break;
    case 'thursday':
      color = 'red';
      break;
    case 'friday':
      color = 'violet';
      break;
    case 'saturday':
      color = 'blue';
      break;
    case 'sunday':
      color = 'white';
      break;
    default:
      color = null;
  }

  if (color !== null) {
    console.log(
      `Today is ${
        day[0].toUpperCase() + day.slice(1).toLowerCase()
      }. Wear ${color}.`
    );
  } else {
    console.log('Invalid input. Enter a valid day of the week');
  }
};

colorCode('monday');
colorCode('friday');
colorCode('not a day');
colorCode(123);
