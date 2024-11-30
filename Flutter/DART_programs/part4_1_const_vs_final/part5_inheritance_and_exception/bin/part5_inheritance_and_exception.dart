import 'package:part5_inheritance_and_exception/part5_inheritance_and_exception.dart' as part5_inheritance_and_exception;

//Inheritance
//Base class/Parent class
class Animal{
  void sayHello(){
    print("Animal say Hello!");
  }
}

//child class
class Human extends Animal{
  void sayName(){
    print("Say name");
  }
}

void main(List<String> arguments) {
  //Object:
  final human = Human();

  //calling functions
  human.sayHello(); //calling function of base class
  human.sayName(); //calling function of child class
}
