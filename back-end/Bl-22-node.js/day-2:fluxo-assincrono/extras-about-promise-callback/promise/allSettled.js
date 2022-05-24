function reflect(promise) {
    return promise.then(
      (v) => {
        return { status: 'fulfilled', value: v };
      },
      (error) => {
        return { status: 'rejected', reason: error };
      }
    );
  }
  
  const promises = [ fetch('index.html'), fetch('https://does-not-exist/') ];
  const results = async () => await Promise.all(promises.map(reflect));
  const successfulPromises = results.filter(p => p.status === 'fulfilled');
  /* COM SETTLED*/
const promises1 = [ fetch('index.html'), fetch('https://does-not-exist/') ];
const results1 = await Promise.allSettled(promises);
const successfulPromises1 = results.filter(p => p.status === 'fulfilled');