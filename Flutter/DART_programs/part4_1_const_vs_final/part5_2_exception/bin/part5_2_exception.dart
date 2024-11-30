import 'package:part5_2_exception/part5_2_exception.dart' as part5_2_exception;

import 'dart:io';

//1.Creating Custom Exception class
class InvalidPhoneNumberException implements Exception {}

//2.Validating phonenumber -
bool validatePhoneNumber(String phone) {
  if (phone.length == 10) {
    return true;
  } else {
    throw InvalidPhoneNumberException();
  }
}

void main(List<String> arguments) {
  print("Enter your phone number:");

  // Take input from the user
  String? input = stdin.readLineSync();
  if (input != null && input.isNotEmpty) {
    try {
      // Validate the phone number
      final isValid = validatePhoneNumber(input);
      if (isValid) {
        print("Phone number is valid.");
      }
    } on InvalidPhoneNumberException catch (_) {
      print("Invalid Phone number"); // Print the custom exception message
    } catch (e) {
      print(e);
    }
  } else {
    print("No input provided!");
  }
}
