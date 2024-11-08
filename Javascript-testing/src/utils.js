export function capitalise(str){
    if(!str){
        return ''
    }
    return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()


}

export function reverseString(str) {
    return str.split('').reverse().join('');
  }

  const calculator={
    add(a,b){
        return a+b
    },

    subtract(a,b){
        return a-b
    },
    multiply(a,b){
        return a*b
    },
    divide(a,b){

        if(b==0){
            throw new Error("cant divide by 0");
            
        }
        else{
            return a/b
        }
    }



  }

  export function caesarChiper(str,shift){
    shift=shift%26
    return str.split('').map(char=>{
        if(char>='a'  && char<='z'){

            let code=char.charCodeAt(0)+shift
            if (code > 'z'.charCodeAt(0)) code -= 26;
            if (code < 'a'.charCodeAt(0)) code += 26;
            return String.fromCharCode(code);
        }

        if (char >= 'A' && char <= 'Z') {
            let code = char.charCodeAt(0) + shift;
            if (code > 'Z'.charCodeAt(0)) code -= 26;
            if (code < 'A'.charCodeAt(0)) code += 26;
            return String.fromCharCode(code);
        }
        return char
    }).join('')



    }

    const analyzeArray=(array)=>{
        if(array.length==0) return null
        let sum=array.reduce((acc,curr)=>acc+curr,0)
        let min=Math.min(...array)
        let max = Math.max(...array);
        let average = Math.floor(sum/array.length); 
        return {
            average: average,
            min: min,
            max: max,
            length: array.length,
        
        };





    }


  export{ calculator,analyzeArray}