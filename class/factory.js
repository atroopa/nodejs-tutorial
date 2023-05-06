const fish = {
    color: "red",
    maxSpeed: 20,
    currentSpeed: 0,

    up: function() {
      if (this.currentSpeed < this.maxSpeed) {
        this.currentSpeed++;
      }
    },
    down: function() {
      if (this.currentSpeed > 0) {
        this.currentSpeed--;
      }
    }
  };    
  