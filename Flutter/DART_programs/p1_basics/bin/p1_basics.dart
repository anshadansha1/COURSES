import 'package:p1_basics/p1_basics.dart' as p1_basics;

import 'dart:io'; //for stdin

//BASICS
void main(){

  // //1.Input
  // print('Hello World!');
  // var a = stdin.readLineSync();
  // print('Hello $a');
  
  // //2.Sum of two Numbers
  // print('\nEnter two numbers : ');
  // var input1 = stdin.readLineSync();
  // var input2 = stdin.readLineSync();

  // //PARSING...
  // var num1 = int.parse(input1!); //null assertion operator : to tell the Dart compiler the value is not null.
  // var num2 = int.parse(input2!);
  // print('\nSum = ${num1 + num2}');

  // //3.DataTypes
  // int x = 10;
  // double y = 20.5;

  // //'num' datatype can store both int and double values
  // num n1 = 10; 
  // num n2 = 20.5;

  // String myname = 'Anshad';
  // String details = " I'am Anshad ";
  // String details2 = " I\"m Anshad";  // \" escapes the double quote, so the string remains valid.
  // //Multiline String:
  // String address = '''house number 123
  // wayanad''';

  // print(myname.length);

  
  //4.List - act as ARRAY
  
  List<int> numberList = [55,24,17,62]; //List
  List<int> listToAdd = [0,1,2];
  
  var dynamic_list = ['Anshad',24,81.52];  //Dynamic List

  

  //4.1:Find length of List
  print(numberList.length);

  //4.2:To find Element in a List use 'contains()' property :
  if(numberList.contains(55)){
    print('List contains 55');
  }
  else{
    print('List doesnt contains 55');
  }

  //4.3:To Add an element to List :
  numberList.add(90);

  //4.4:To Remove an element from List :
  numberList.removeAt(0); //remove element by index
  numberList.removeLast(); //removes last element of list

  //4.5: To Add list of elements to a list 
  numberList.addAll(listToAdd);

  //4.6: Print
  print(numberList);
  print(numberList.join( " - ")); //Print uing seperator

  
  




}