const a = {
  value: 30,
  isThisOn: 'test',
}

const fB = () => { console.trace(); }

const fA = (callback) => {
  console.count('myCount');
  if(callback) callback();
}



fA();
fA();
fA();
fA();
fA();
fA();


const isWindow = 

if(window) {
  const isConfirmed = confirm('clear the console?')

  if (isConfirmed) {
    console.clear();
    console.log('if the console is cleared count will restart');
  };
}


fA(fB);



console.group('group1')
console.log('this is my ', a)
console.groupEnd()




console.groupCollapsed('group2')
console.log('this is my ', a)
console.log('this is my ', a)
console.log('this is my ', a)
console.log('this is my ', a)
console.log('this is my ', a)
console.log('this is my ', a)
console.log('this is my ', a)
console.log('this is my ', a)
console.log('this is my ', a)
console.log('this is my ', a)
console.log('this is my ', a)
console.log('this is my ', a)
console.log('this is my ', a)
console.log('this is my ', a)
console.log('this is my ', a)
console.log('this is my ', a)
console.log('this is my ', a)
console.log('this is my ', a)
console.log('this is my ', a)
console.group('NestedGroup')
console.log('this is my ', a)
console.log('this is my ', a)
console.log('this is my ', a)
console.groupEnd()
console.groupCollapsed('nested collapsed')
console.log('this is my ', a)

console.groupEnd()






