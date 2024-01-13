//Leap year

let year=prompt("Enter the year");
if((year % 4 == 0) && (year % 100!= 0) || (year % 400 == 0))
{
    alert("Given year is a leap year");
}
else{
    alert("Given year is not a leap year");
}

//Largest of three numbers

let num1=prompt("Enter num1 value");
let num2=prompt("Enter num2 value");
let num3=prompt("Enter num3 value");
let valid=num1 > 0 && num2 > 0 && num3 >0;
if(valid)
{
    if(num1 ==num2 && num2 ==num3){
        console.log("All values are equal")
    }   
    else if(num1 == num2){
     if(num1 > num3)
             {
                 console.log(num1+" and "+num2+" are equal and it is greater than "+num3)
            }
            else{
                console.log(num3+" is greater than both "+num1+" and "+num2)
            }
    
        }
        else if(num1 ==  num3)
        {
            if(num1 > num2)
            {
                console.log(num1+" and "+num3+" are equal and it is greater than "+num2) 
            }
            else
            {
                console.log(num2+" is greater than both "+num1+" and "+num3)
            }
        }
        else{
            if(num2 > num1)
            {
                console.log(num2+" and  "+num3+" are equal and it is greater than "+num1)     
            }
            else{
                console.log(num1+" is greater than both "+num2+" and "+num3)        
            }
        }
      }
      else{
    
        if(num1 > num2 && num1 > num3)
        {
            console.log(num1+" is greater than "+num2+" & "+num3)
        }
        else if(num2 > num3)
        {
            console.log(num2+" is greater than "+num1+" & "+num3)
        }
        else{
            console.log(num3+" is greater than "+num1+" & "+num2)     
        }
    }



