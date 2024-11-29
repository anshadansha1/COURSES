import 'package:part4_2_class_and_object/part4_2_class_and_object.dart' as part4_2_class_and_object;

//Import class - Person
import 'person.dart';
void main(List<String> arguments) {
  //2.Object :
  // final person = Person('Anshad',24);
  // person.name = "Muhammad"; //Now this gives Error, Bcs name is decalred as "final"
  
  // print({person.name,person.age});

  final person = Person.ageAbove50("Anshad",24);
  //Accessing private variables from other files using functions:
  print(person.getNameFunction()); 
  print(person.getAgeFunction());

  //Accessing private variables from other files using "get"-getter:
  print(person.getName); 
  print(person.getAge);

  //Setting values using "set" - setter
  person.setAge = 30 ;

  //Accessing functions inside a class using objects
  person.sayHai();
}
