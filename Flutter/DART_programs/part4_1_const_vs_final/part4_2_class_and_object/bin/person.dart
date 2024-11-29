

//1.Class :
class Person{
  final String _name; //Add (_) to make it private.
  int _age; //removed final to access it in setter.

  //Constructor - in a differnt way
  Person(this._name , this._age); 

  Person.ageBelow50(this._name , this._age){
    print(_name);
  }
  Person.ageAbove50(this._name,this._age){
    print(_name);
  }
  
  //function
  void sayHai(){
    print("Hi!");
  }

  //Act as getter - To Pass private-age to main file
  String getNameFunction(){
    return _name;
  }
  int getAgeFunction(){
    return _age;
  }
  

  //Getter - get
  String get getName{
    return _name;
  }
  int get getAge{
    return _age;
  }

  //Setter - set
  set setAge(int value){
    _age = value;
  }

}