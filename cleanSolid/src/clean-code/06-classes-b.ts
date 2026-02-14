(() => {

  // No aplicando el principio de responsabilidad única

  type Gender = 'M' | 'F';

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {

    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    birthdate: Date
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }

  class User extends Person {

    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role, gender, birthdate, name }: UserProps) {
      super({ name, gender, birthdate });
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }


  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings extends User {

    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({ birthdate, email, gender, lastOpenFolder, name, role, workingDirectory }: UserSettingsProps) {

      super({ birthdate, email, gender, name, role });
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;

    }
  }

  const userSettings = new UserSettings({
    workingDirectory: '/usr/home',
    lastOpenFolder: '/home',
    email: 'tobias@gmail.com',
    role: 'Admin',
    name: 'Tobías',
    gender: 'M',
    birthdate: new Date('2005-10-13')
});

  console.log({ userSettings })



})();