#include<stdio.h>

int reverse(int num)
{
    //Write your code here
    int digit,reverse;
    while(num>0){
        digit = num % 10;
        reverse = (reverse*10) + digit;
        num /= 10;
    }
    return reverse;
}


int main()
{   
    int num,result;
    scanf("%d",&num);
    result=reverse(num);
    printf("%d",result);
    return 0;
}

