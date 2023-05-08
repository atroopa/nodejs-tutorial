console.clear();


const print = console.log;

class Color{

    constructor(r=0 , g=0, b=0){
        this.r = r;
        this.g = g;
        this.b = b;
    }

    setRed(value){
        if(value >=0 && value <= 255){
            this.r = parseInt(value);
        } else {
            throw new RangeError("value must be between 0 and 255");
        }
    }

    getRed(){
        return this.r;
    }

}

const c1 = new Color();
c1.setRed(100);
print(c1);
print(c1.getRed());