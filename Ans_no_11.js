// prime or not
 let number=12;
 let i=1,c=0;
 while(i<=number){
   if(number%i===0){
      c++;
   }i++;
 }
 if(c===2){
   console.log("prime")
 }else{
   console.log("Not");
 }