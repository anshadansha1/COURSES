import 'package:part3_dartfunctions/part3_dartfunctions.dart' as part3_dartfunctions;

import 'dart:io';

//Function and Named Parameters(Required parameter,Option Parameter and Default Parameter)
void main(){

  //1.1 : Function Without Return value and No Parameters
  sum();
  //1.2 : Function Without Return value ,But have Parameters
  sumParams(5,7);
  //1.3 : Function with Return value and Parameters
  var sum1 = sumReturns(10, 15);
  print(sum1);

  //2.1 : Named Parameters : Required Parameter ,Option Parameter and Default parameters
  sumReq(firstNumber : 100 , secondNumber :200 , third : 34);

  //2.2  : Passing Function as Parameter - We can write this in Two ways: 
  
  // sumFunction(23 ,24 , sumParams);

  //OR Using ANONYMOUS FUNCTION :

  sumFunction(23 ,24 , (int f , int s){
    print('Function sum = ${f+s}');
  });

  //3.1 : FUTURE FUNCTION 
  // sumFuture(12 , 12);
  // print('After sumFuture');

  sum2();
  print('After future');
}
// //Using Main function as FUTURE FUNCTION:
// Future<void> main() async{
//   await sum2();
//   print('After sum'); 
// }

void sum(){
  print(2+3);
}

void sumParams(int a , int b){
  print('${a+b}');
}

int sumReturns(int a , int b){
  return a+b;
}

void sumReq({required int firstNumber,required int secondNumber , int third=0}){

  print(firstNumber + secondNumber + third) ;
}

//passed function as parameter:
void sumFunction(int a , int b ,void Function(int,int) customSum){
  customSum(a,b);
}

//FUTURE FUNCTION :
Future<int> sumFuture(int a ,int b) async{
  await Future.delayed(Duration(seconds: 3)); //use await -To show the implementation of Future function
  //so that 3 seconds delayed before printing sum.
  print('In Sum Future = ${a+b}');
  return a+b;
}

Future<void> sum2()async{
  await sumFuture(33, 44); //await can be used in future function
  print('In just Sum');
}