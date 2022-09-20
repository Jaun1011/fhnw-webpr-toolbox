const write             = (msg)  => document.writeln(msg.toString())
const equal             = (a, b) => a === b;
const unequal           = (a, b) => a != b;

const assertEqual       = (a, b) => write(equal(a, b))
const assertNotEqual    = (a, b) => write(unequal(a, b)) 

const test = (msg, res, fn) => {    
    const report = msg + "\t" + res
        .map(([x,y]) => equal(fn(x),y))

    write(report)        
}
       
const fx = (x) => x * 2;

test("**test plus**", [
    [1,2], 
    [4,8]
], (i) => fx(i))
