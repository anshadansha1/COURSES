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

// //Abstract class - for Interface
// abstract class Animal{
//   void sayHello();
// }

// abstract class Animal2{
//   void sayHi();
// }

// //Interface : (implements)
// class Human implements Animal,Animal2{

//   @override //Here we use override ,bcs Human class is overriding sayHello() function of Animal class -which is an abstract class
//   void sayHello() {
//     print("Human Hello!");
//   }
  
//   @override
//   void sayHi() {
//     print("Human hi!");
//   }
  

//   void sayName(){
//     print("Name");
//   }
// }

//MIXINS - to achieve multiple inheritance
mixin Animal {
  
  int age = 0;

  void sayHello(){
    print("MIXIN Hello!");
  }
}

mixin Animal2 {
  
  int age = 24;

  void sayHi(){
    print("MIXIN Hi!");
  }
}

//MIXIN - implementing
class Human with Animal,Animal2{

}

void main(List<String> arguments) {
  //Object:
  final human = Human();

  //calling functions
  human.sayHello(); 
  human.sayHi(); 
}
