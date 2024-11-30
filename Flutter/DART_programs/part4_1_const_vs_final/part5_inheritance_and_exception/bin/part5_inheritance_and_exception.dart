import 'package:part5_inheritance_and_exception/part5_inheritance_and_exception.dart' as part5_inheritance_and_exception;

//Inheritance
//Base class/Parent class
// class Animal{
//   void sayHello(){
//     print("Animal say Hello!");
//   }
// }

// //child class
// class Human extends Animal{
//   void sayName(){
//     print("Say name");
//   }
  
//   @override
//   void sayHello() {
//     // TODO: implement sayHello
//     print("Say Hello Human!");
//     super.sayHello();

//   }
// }

//Abstract class - for Interface
abstract class Animal{
  void sayHello();
}
//Interface : (implements)
class Human implements Animal{

  @override //Here we use override ,bcs Human class is overriding sayHello() function of Animal class -which is an abstract class
  void sayHello() {
    // TODO: implement sayHello
    print("Human Hello!");
  }

  void sayName(){
    print("Name");
  }
}

void main(List<String> arguments) {
  //Object:
  final human = Human();

  //calling functions
  human.sayHello(); //calling function of base class
  // human.sayName(); //calling function of child class
}
