console.clear();

import util from "util";

const print = console.log;

export default class Color{

    #r = 0;
    #g = 0;
    #b = 0;

    constructor(r=0 , g=0, b=0){
        this.r = r;
        this.g = g;
        this.b = b;
        Object.seal(this);
    }

    set r(value){
        if(value >=0 && value <= 255){
            this.#r = parseInt(value);
        } else {
            throw new RangeError("value must be between 0 and 255");
        }
    }

    get r(){
        return this.#r;
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
    
    [util.inspect.custom]() {
        return `rgb(${this.r}, ${this.g} , ${this.b})`;
    }

}

const c1 = new Color();

print(c1);
