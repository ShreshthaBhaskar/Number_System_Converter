function msgPrint1()
{
      let prmsg=document.getElementById('Number1').value
      let msg=document.getElementById('msg')
      msg.value='Enter a '+prmsg+' number'
      
}
function reset()
{    
      let msg=document.getElementById('msg')
      msg.value=''
      let msg1=document.getElementById('msg1')
      msg1.value=''
      let inputVal1=document.getElementById('Number1')
      inputVal1.value=''
      let inputVal2=document.getElementById('Number2')
      inputVal2.value=''
      let chng_val=document.getElementById('txt1')
      chng_val.value=''
      let result=document.getElementById('result')
      result.value=''
}
function msgPrint2()
{
      let prmsg=document.getElementById('Number2').value
      let msg=document.getElementById('msg1')
      const s2 = prmsg.charAt(0).toUpperCase() + prmsg.slice(1);
      msg.value=s2+' number'
}
function myfunc(){
    console.log('Js file worked')
    let val1=document.getElementById('Number1').value
    console.log(val1)
    let val2=document.getElementById('Number2').value
    console.log(val2)
    let chng_val=document.getElementById('txt1').value
    if(val1=='decimal' && val2=='binary')
    {
         let tmp=decimal_to_binary(parseInt(chng_val))
         let result=document.getElementById('result')
         result.value=tmp
    }else if(val1=='binary' && val2=='decimal')
        {
            
           let sum= binary_to_decimal(parseInt(chng_val))
            let result=document.getElementById('result')
            result.value=sum
        }
    else if(val1=='binary' && val2=='octal')
        {
            binary_to_octal(parseInt(chng_val))
        }
    else if(val1=='octal' && val2=='decimal')
    {
        let sum=octal_to_decimal(parseInt(chng_val))
        let result=document.getElementById('result')
        result.value=sum
    }else if (val1=='decimal' && val2=='octal')
    {
        let tmp=decimal_to_octal(parseInt(chng_val))
        let result=document.getElementById('result')
        result.value=tmp
    }
    else if (val1=='octal' && val2=='binary')
    {
        octal_to_binary(parseInt(chng_val))
    } 
    else if(val1=='decimal' && val2=='hexadecimal')
    {
        let tmp=decimal_to_hexadecimal(parseInt(chng_val))
        let result=document.getElementById('result')
        result.value=tmp
    }else if(val1=='hexadecimal' && val2=='decimal')
    {
        let tmp=hexadecimal_to_decimal(chng_val)
        let result=document.getElementById('result')
        result.value=tmp
    }
    else if(val1=='binary' && val2=='hexadecimal')
    {
        binary_to_hexadecimal(parseInt(chng_val))
}
    else if(val1=='octal' && val2=='hexadecimal')
    {
        octal_to_hexadecimal(parseInt(chng_val))
    }
}
function decimal_to_binary(n)
{
    console.log('function call')
    let ans=''
    while(n>0)
    {
        let r=n%2
        ans=ans+r.toString()
        n=Math.floor(n/2)
    }
    let tmp=ans.split('').reverse().join('')
    console.log(tmp)
    return tmp
    
}
function decimal_to_octal(n)
{
    let ans=''
    while(n>0)
    {
        let r=n%8
        ans=ans+r.toString()
        n=Math.floor(n/8)
    }
    let tmp=ans.split('').reverse().join('')
    console.log(tmp)
    return tmp
    
}
function hexadecimal_code(n)
{
    if(n==10)
    {
        return 'A'
    }else if(n==11)
    {
        return 'B'
    }else if(n==12)
    {
        return 'C'
    }else if(n==13)
    {
        return 'D'
    }else if(n==14)
    {
        return 'E'
    }else
    {
        return 'F'
    }
}
function decimal_to_hexadecimal(n)
{
    let ans=''
    while(n>0)
    {
        let val=''
        let r=n%16
        if(r>9)
        {
          val=hexadecimal_code(r)
        }else{
            val=r.toString()
        }
        ans=ans+val
        n=Math.floor(n/16)
    }
    let tmp=ans.split('').reverse().join('')
    console.log(tmp)
    return tmp
}

function binary_to_decimal(n)
{
    let sum=0
    let index=0
    while(n>0)
    {
        let r=n%10
        let tmp=Math.pow(2,index)*r
        sum+=tmp
        n=Math.floor(n/10)
        index+=1
    }
    return sum
}
function binary_to_octal(n)
{
    a=binary_to_decimal(n)
    b=decimal_to_octal(a)
    let result=document.getElementById('result')
    result.value=b
}
function binary_to_hexadecimal(n)
{
    a=binary_to_decimal(n)
    b=decimal_to_hexadecimal(a)
    let result=document.getElementById('result')
    result.value=b
}
function octal_to_binary(n)
{
    a=octal_to_decimal(n)
    b=decimal_to_binary(a)
    let result=document.getElementById('result')
    result.value=b
}
function octal_to_decimal(n)
{
    let sum=0
    let index=0
    while(n>0)
    {
        let r=n%10
        let tmp=Math.pow(8,index)*r
        sum+=tmp
        n=Math.floor(n/10)
        index+=1
    }
    return sum
    
}
function octal_to_hexadecimal(n)
{
    a=octal_to_decimal(n)
    b=decimal_to_hexadecimal(a)
    let result=document.getElementById('result')
    result.value=b
}
