#include<stdio.h>
#define MAX 30

float function(int arr[],int lim)
{
   //Write your code here
   int i;
   float avg,count,total=0;
   for(i=0;i<lim;i++){
       total += arr[i];
       count++;
   }
   avg = total/count;
   return avg;
}


int main()
{   
    int i,n, A[MAX];
    scanf("%d",&n);
    for(i=0;i<n;i++)
        scanf("%d",&A[i]);
        
    float out=function(A,n);    
    
    printf("%f",out);
    return 0;
}



