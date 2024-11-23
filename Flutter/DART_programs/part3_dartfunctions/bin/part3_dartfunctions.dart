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

}

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