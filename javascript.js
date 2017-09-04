const calcSubrange = (array) => {
  let left = 1;
  let right = 1;
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i+1] > array[i]) {
      left++;
    } else {
      counter += (left*(left - 1))/2;
      left = 1;
    }
    if (array[array.length-i-2] > array[array.length-i-1]) {
      right++;
    } else {
      counter -= (right*(right - 1))/2;
      right = 1;
    }
  }
  return counter;
}

const getSubrangeArray = (days, windows, prices) => {
  if (days < 1 || days > 200000 || days > prices.length) {
    console.log('invalid days');
    return;
  }
  if (windows < 1 || windows > days) {
    console.log('invalid windows');
    return;
  }
  for (let i = 0; i < days - windows + 1; i++) {
    console.log(calcSubrange(prices.slice(i, windows+i)));
  }
}

const openFile = (event) => {
  const input = event.target;

  const reader = new FileReader();
  reader.readAsText(input.files[0]);

  reader.onload = () => {
    let data = reader.result.split('\n');
    let firstLine = data[0].split(' ');
    let days = parseInt(firstLine[0]);
    let windows = parseInt(firstLine[1]);
    let prices = data[1].split(' ').map(Number);
    console.log('N value:', days, 'K value:', windows);
    console.log('Prices:', prices);
    console.log('Output:');
    getSubrangeArray(days, windows, prices);
  };
};
