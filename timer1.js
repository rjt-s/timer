// A simple timer application
const args = process.argv.slice(2);
// process argv for valid cases and sorting
let timerArr = [];

// handling the edge cases
for (let arg of args) {
  if (Number(arg) > 0) {
    timerArr.push(Number(arg));
  }
}

// sorting the timeArr
timerArr.sort((a,b) => a - b);

// setTimeOut alarm for the mentioned time intervals
for (let time of timerArr) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, (time*1000));
};
