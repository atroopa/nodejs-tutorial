

const print = console.log;

class Fish {

    constructor(color, maxSpeed, currentSpeed){
        this.color        = color;
        this.maxSpeed     = maxSpeed;
        this.currentSpeed = currentSpeed;
    }

    up(){
        if (this.currentSpeed < this.maxSpeed){
            this.currentSpeed ++;
        }
        print(`the ${this.color} fish speed is : ${this.currentSpeed} km/h`);
    }

    down() {
        if (this.currentSpeed > 0){
            this.currentSpeed --;
        }
        print(`the ${this.color} fish speed is : ${this.currentSpeed} km/h`);  
    }

}

const fish1 = new Fish("red", 20, 5);
const fish2 = new Fish("Black", 60, 20);

fish1.up();

print(fish1);
print(fish2);