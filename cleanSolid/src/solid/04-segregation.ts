
interface Bird {

  fly(): void;
  eat(): void;
  run(): void;
  swim(): void;

}


class Tucan implements Bird {

  public fly() { }
  public eat() { }
  public run() { }
  public swim() { }

}

class HumminBird implements Bird {

  public fly() { }
  public eat() { }
  public run () { }
  public swim() { }

}

class Ostrich implements Bird {

  fly(): void {
    throw new Error('esta ave no vuela');
  }
  public eat() { }
  public run() { }
  public swim() {}

}

class Penguin implements Bird {

  fly(): void {
    throw new Error('esta ave no vuela');
  }
  public eat() { }
  public run() { }
  public swim() {  }

}


