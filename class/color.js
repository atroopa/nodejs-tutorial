console.clear();
import util from "util"

const print = console.log;

class Color{

    constructor(r=0 , g=0, b=0){
        this.r = r;
        this.g = g;
        this.b = b;
    }

    static forHex(hex){
        const regex = new RegExp("^[0-9a-f]{6}$", "i");
        if(!regex.test(hex)){
            throw new Error("Invalid Hex Code : "+ hex);
        }

        return new Color (
            parseInt(hex.substring(0,2), 16),
            parseInt(hex.substring(2,4), 16),
            parseInt(hex.substring(4,6), 16)

        );
    }

    toString(){
        return `rgb(${this.r}, ${this.g} , ${this.b})`;
    }

}

const c1 = new Color();
const c2 = new Color(20,34,222);

print(c1);
print(c2);

const c3 = Color.forHex("3334ad");
print(c3);
print(c3.toString());