(() => {

  type Gender = 'M' | 'F';

  class Person {


    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  const newPerson = new Person('Tobías', 'M', new Date('2005-10-13'));
  console.log({ newPerson });



})();