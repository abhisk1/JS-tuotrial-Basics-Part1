/* Abstract class is class that cannot be instantiated directly and is used to define a common structure for its subclass.
// have the abstract methods that must implemented by subclass.
//  it may have also includes the concrete methods */

//abstract is keyword used to define class or methods.

abstract class Animal {
  abstract makeSound(): void; // abstract methods(methods with no body.)

  move(): void {
    console.log("moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark!");
  }
}

const d = new Dog();
d.makeSound();
d.move();

/* another class */
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    // some complex calculation.
    return 10;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("sepia filter applied");
  }
}

const Ab = new Instagram("test", "Test", 2);

console.log(Ab);
Ab.getSepia();

console.log(Ab.getReelTime());
