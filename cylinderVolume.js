class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    // Method to calculate volume
    getVolume() {
        let volume = Math.PI * Math.pow(this.radius, 2) * this.height;
        return volume.toFixed(4); // Rounds to 4 decimal places
    }
}

// Example usage
let myCylinder = new Cylinder(7, 10);
console.log(`Volume of Cylinder: ${myCylinder.getVolume()}`);
