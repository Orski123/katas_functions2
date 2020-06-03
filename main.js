console.log ('KATA 2: ADD (2,4)')

function sum(a,b)
{
    return a+b
}
let add_result = sum(2,4);
console.log (add_result)


//--------------------------------------
console.log ('KATA 2: MULTIPLY (6,4)')

function multiply (a,b)
    {  
    let multi = a
     for (let i=1; i<b; i++)
        {
        multi +=a
        //console.log (a)
        }
   return multi 
    }
   console.log (multiply (6,4)) 


//-----------------------------------------
   console.log ('KATA 3: POWER/EXPONENTIATION of (2,8)')

   function power (a,b)
    {  
     let pwr = a
     for (let i=1; i<b; i++)
        {
        pwr = pwr * a
        //console.log (a)
        }
    return pwr 
    }
   console.log (power (2,8)) 


   //-----------------------------------------
   console.log ('KATA 4: FACTORIAL of 5')

   function factorial (a){  
    
    for (let i=a-1; i>=1; i--)
    {
        a = a *i
    }
        return a
    }

   console.log (factorial (5)) 

//-----------------------------------------
console.log ('KATA 5: FIBONACCI of 8')
function Fibonacci (a){  
    let fib =0
    let fib1 =1
    let fib2=1
    for (let i=3; i<=a; i++)
    {
        fib2= fib +fib1
        fib = fib1;
        fib1=fib2
            //console.log (fib2)
    }
        return fib2
    }

   console.log (Fibonacci (8)) 