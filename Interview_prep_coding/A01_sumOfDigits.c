#include<stdio.h>

int sumofdig(int num)
{
    //Write your code here
    int digit,sum=0;
    while(num > 0){
        digit = num % 10;
        sum += digit;
        num /= 10;
    }
    return sum;
}


int main()
{   
    int num,result;
    scanf("%d",&num);
    result=sumofdig(num);
    printf("%d",result);
    return 0;
}

