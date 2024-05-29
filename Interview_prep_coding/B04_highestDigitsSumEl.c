#include<stdio.h>
#define MAX 30

int function(int arr[],int lim)
{
   //Write your code here
   
   int i,highestDigit = 0,highestSum=0;
   for(i=0;i<lim;i++){
       int digit,sum=0,num;
        num = arr[i];
        while(num > 0){
            digit = num % 10;
            sum += digit;
            num /= 10;
        }
        if(sum > highestSum){
            highestSum = sum;
            highestDigit = arr[i];
        }
   }
   return highestDigit;
}


int main()
{   
    int i,n, A[MAX];
    scanf("%d",&n);
    for(i=0;i<n;i++)
        scanf("%d",&A[i]);
        
    int out=function(A,n);    
    
    printf("%d",out);
    return 0;
}




