#include<stdio.h>

int checkPrime(int num)
{
    //Write your code here
    int i,flag = 0;
    if (num == 0 || num == 1 ){
        flag = 1;
    }
    
    for( i=2 ; i < num/2;i++){
        if( num % i == 0){
            flag = 1;
            break;
        }
    }
    if(flag == 1){
        return 0;
    }
    else{
        return 1;
    }
}


void main()
{   
    int num;
    int result;
    scanf("%d",&num);
    result=checkPrime(num);
    printf("%d",result);
}

