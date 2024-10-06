console.time('Timer');

function asyncTask(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Task ${data} is completed.. `);
      resolve();
    }, 5000); // Simulate a 5-second task
  });
}

async function A1(data) {
  await asyncTask(data);
}

async function A2(data) {
  await asyncTask(data);
}

async function A3(data) {
  await asyncTask(data);
}

async function paymentDone() {
  // Run all tasks in parallel using Promise.all
  await Promise.all([A1(1), A2(2), A3(3)]);

  // Timer ends after all tasks are done
  console.timeEnd('Timer');
}

paymentDone();
