console.clear();


const print = console.log;

class Color{

    #r = 0;
    #g = 0;
    #b = 0;

    constructor(r=0 , g=0, b=0){
        this.#r = r;
        this.#g = g;
        this.#b = b;
        Object.seal(this);
    }

    set red(value){
        if(value >=0 && value <= 255){
            this.#r = parseInt(value);
        } else {
            throw new RangeError("value must be between 0 and 255");
        }
    }

    get red(){
        return this.#r;
    }

}

const c1 = new Color();
c1.red = 255;
print(c1.red);
