import 'package:part4_1_const_vs_final/part4_1_const_vs_final.dart' as part4_1_const_vs_final;

void main(List<String> arguments) {
  //Final VS Const

  //1."final" keyword
  final String name;
  name = "Anshad";
  //name = "Muhammad"; //This give Error , since "final" keyword cannot be altered in future.

  final List<int> numberList;
  numberList = List.empty(); //To empty the List
  numberList.add(10);
  numberList.add(20);
  //numberList =[10,20]; //Gives Error , since even list when set as final cannot be changed.

  //2."const" -  const makes the variable constant from compile-time only.
  //const String name2;
  //name2 = "Anshad2";

  //So we cannot decalre a const values like this.Instead we have to initialize while declaring itself.
  const String name2 = "Anshad2";
  

}
