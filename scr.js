function max( x, y)
{
    if(x>y)
    return x;
    else
    return y;
}

function maxOfThree(x,y,z)
{
    if((x>y)&&(x>z))
    
        return x;
    else if((y>x)&&(y>z))
  
        return y;
    else
        return z;
}
function myFunctionTest(a,b)
{
    if(a==b)
        return ("TEST SUCEEDED");
    else
        return ("TEST FAILED");
}
function isVowel(s)
{
    if((s=="a")||(s=="e")||(s=="i")||(s=="o")||(s=="u"))
    return true;
    else
    return false;
}
function sum(a)
{
    let sum=0;
    for ( const value of a) 
        sum += value;
    return (sum);
}
function multiply(a)
{
    let multiply=1;
    for ( const value of a) 
    multiply *= value;
    return (multiply);
}
function reverse(s)
{
    let str="";

    for(let i=s.length-1;i>=0;i--)
    {
        str=str+s[i];        
    }
return str;
}
function filterLongWords1(a)
{
     str1=a[0];
    for(let i=1;i<a.length;i++)
    {
        str2=a[i];
        if(str1.length<str2.length)
        {
            str1=a[i];
        }  
    }
    return str1;
}

function filterLongWords(a,j)
{
     str1=[];
     let k=0;
    for(let i=1;i<a.length;i++)
    {
        if(a[i].length>j)
        {
         
            str1[k++]=a[i];
        }  
    }
    return str1;
}


console.log("Expected output of max(20,10) is 20 and  "+
myFunctionTest(20, max( 20, 10)));
console.log("Expected output of maxOfThree(5,4,44) is 44 and  " +
myFunctionTest(44,  maxOfThree( 5, 4,44)));
console.log(isVowel("b"));
a=[1,2,3,4]
console.log(sum(a));
console.log(multiply(a));
console.log(reverse("jag testar"));

console.log(filterLongWords1(["jack","jason","michel","sara"]));
console.log(filterLongWords(["jack","jason","michel","sara"],3));