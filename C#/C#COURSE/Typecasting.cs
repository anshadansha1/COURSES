using System;
using System.Data;

namespace Myapp
{
    class Typecasting{
        static void Main(string[] args){

            //Implicit Casting :
            int varInt = 9;
            double varDouble = varInt;//Implicit casting (Automatic) : int to double

            Console.WriteLine(varInt);
            Console.WriteLine(varDouble);

            //Explicit Casting :
            double varDouble2 = 9.78 ;
            int varInt2 = (int) varDouble2 ;//Explicit Casting (Manual) : Double to Int
            Console.WriteLine(varDouble2);
            Console.WriteLine(varInt2);

            /*Type Convertion Methods:
            1 Convert.ToBoolean.
            2 Convert.ToDouble.
            3 Convert.ToString.
            4 Convert.ToInt32 (int) 
            5 Convert.ToInt64 (long)
            */
            int varInt3 = 10;
            double varDouble3 = 5.25;
            bool varBool = true;

            Console.WriteLine(Convert.ToString(varInt3));
            Console.WriteLine(Convert.ToDouble(varInt3));
            Console.WriteLine(Convert.ToInt32(varDouble3));
            Console.WriteLine(Convert.ToString(varBool));
            
        }
    }
}