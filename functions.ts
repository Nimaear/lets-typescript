
// types
type NumberOrString = number | string;
type Status = 'ONLINE' | 'OFFLINE';

// Simple functions
const add = (a: NumberOrString,b : NumberOrString): number => {
  let first: number;
  let second: number;
  if (typeof a === 'string') {
    first = parseInt(a, 10);
  } else {
    first = a;
  }
  if (typeof b === 'string') {
    second = parseInt(b, 10);
  } else {
    second = b;
  }
  return first + second;
};

console.log(add(2,2));
console.log(add(2,'2'));

const checkStatus = (status: Status): void => {
  if (status === 'OFFLINE') {
    console.log('We are offline');
  } else if (status === 'ONLINE') {
    console.log('We are online');
  }
};

checkStatus('OFFLINE');
