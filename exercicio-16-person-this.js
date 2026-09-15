// 16. Arrow functions vs Traditional this
const person = {
  name: 'João',
  sayThis: () => {
    console.log('Arrow this:', this);
    return this;
  },
  sayThisTraditional() {
    console.log('Traditional this:', this);
    return this;
  },
};


