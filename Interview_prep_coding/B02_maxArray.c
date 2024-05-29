#include<stdio.h>
#define MAX 30

int function(int arr[],int lim)
{
   //Write your code here
    int i,max=0;
   for(i=0;i<lim;i++){
      if(arr[i] > max){
          max = arr[i];
      }
   }
   return max;
}


int main()
{   
    int i,n, A[MAX];
    scanf("%d",&n);
    for(i=0;i<n;i++)
        scanf("%d",&A[i]);
        
    int max=function(A,n);    
    
    printf("%d",max);
    return 0;
}


