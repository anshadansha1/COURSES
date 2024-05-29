#include<stdio.h>
#include <math.h>
#define MAX 100

int function(int num)
{
   //Write your code here
   int digit,sum = 0,temp=num,temp2=num,nofd;
   while (temp>0){
       temp /= 10;
       nofd++;
   }

   while(num > 0){
       digit = num % 10 ;
       sum += pow(digit,nofd);
       num /= 10;
   }

   
   if(sum == temp2 ){
       return 1;
   }
   else {
        return 0;   
   }
}


void main()
{   
    int num;
    scanf("%d",&num);
    int out=function(num);
    printf("%d",out);
}




