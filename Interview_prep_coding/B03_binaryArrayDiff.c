#include<stdio.h>
#define MAX 30

int function(int arr[],int lim)
{
   //Write your code here
   int i,zeroes,ones;
   for(i=0;i<lim;i++){
      if(arr[i] == 0){
          zeroes++;
      }
      else if(arr[i] == 1){
          ones++;
      }
   }
   if(ones > zeroes){
       return 1;
   }
   else if(ones == zeroes){
       return 0;
   }
   else{
       return -1;
   }
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


