console.log('Creat a promise to display a message and call the promise');

const myFirstPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve("Success!"); 
    }, 250);
  });
  
  myFirstPromise.then((successMessage) => {
    console.log(`Yeah! ${successMessage}`);
  });


