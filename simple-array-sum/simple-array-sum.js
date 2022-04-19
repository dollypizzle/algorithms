#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
	int n,i,a,sum=0;		
			scanf("%d",&n); 
			if(n<=1000){
			for(i=0;i<n;++i){
                scanf("%d",&a);
                sum=sum+a;
            }
     printf("%d",sum);
    return 0;
}
}