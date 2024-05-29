#include<stdio.h>

int fun(int num)
{
    //Write your code here
    int digit,highest=0;
    while(num>0){
        digit = num % 10;
        if(digit > highest){
            highest = digit;
        }
        num /= 10;
    }
    return highest;
}


int main()
{   
    int num,result;
    scanf("%d",&num);
    result=fun(num);
    printf("%d",result);
    return 0;
}

