//first way
function calculate(args){ let result;
    if(args.op==="+"){ result=args.n1+args.n2;
    }else if(args.op==="-"){ result=args.n1-args.n2;
    }else{
    result="Not supported";
    }
    return result; 
}

calculate({n1:3, n2:4, op:'+'})

//another way 
   function calculate(args){ let result;
        if(args.op==="+"){ result=args.n1+args.n2;
        }else if(args.op==="-"){ result=args.n1-args.n2;
        }else{
        result="Not supported";
        }
        return result; 
    }

    function add(n1, n2, op){
        this.n1 = n1; //令全域n1等於傳入的n1
        this.n2 = n2;
        this.op = op;
    }
    
    console.log(calculate(new add(1, 2, '+')))
    // 1.輸入(n1, n2, op)至add()中 => add(1, 2, '+')
    // 2.直接傳入會直接執行，但並無法傳入任何東西，須以物件方式存儲並丟入calculate()中 => new add(1, 2, '+')
    // 3.物件內建n1, n2, op的數值，並開始走if/else運算結果
