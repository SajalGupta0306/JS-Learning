class Spot {
  constructor(data) {
    this.vehicleType = data.vehicleType;
    this.id = data.id;
  }

  fill(vehicle) {
    this.vehicle = vehicle;
  }

  isFree() {
    return !this.vehicle;
  }

  getVehicle() {
    return this.vehicle;
  }

  release() {
    this.vehicle = undefined;
  }
}

class ParkingLotManager {
  constructor() {
    this.spots = [];
    this.vehicles = new Map();
  }

  addSpots(vehicleType, idList) {
    idList.forEach((id) => {
      this.spots.push(new Spot({ vehicleType, id }));
    });
  }

  hasVehicle(id) {
    return this.vehicles.has(id);
  }

  placeVehicle(vehicle) {
    if (this.hasVehicle(vehicle.id)) {
      console.log(`There is already a vehicle with id: ${vehicle.id}`);
      return;
    }

    const spot = this.spots.find(
      (slot) => vehicle instanceof slot.vehicleType && slot.isFree()
    );

    if (spot) {
      spot.fill(vehicle);
      this.vehicles.set(vehicle.id, spot);
      console.log(`Vehicle parked at spot: ${spot.id}`);
    } else {
      console.log(`There is no free spot for id: ${vehicle.id}`);
    }
  }

  removeVehicle(vehicle) {
    const spot = this.vehicles.get(vehicle.id);
    if (spot) {
      spot.release();
      this.vehicles.delete(vehicle.id);
    } else {
      console.log(`There is no vehicle with id: ${vehicle.id}`);
    }
  }
}

class Motorcycle {
  constructor(id) {
    this.id = id;
    this.size = 1;
  }
}

class Car {
  constructor(id) {
    this.id = id;
    this.size = 2;
  }
}

const parkingLotManager = new ParkingLotManager();

parkingLotManager.addSpots(Motorcycle, ["M1", "M2"]);
parkingLotManager.addSpots(Car, ["C1", "C2"]);

const car1 = new Car("vehicle1");
const car2 = new Car("vehicle2");
const car3 = new Car("vehicle3");
const car4 = new Motorcycle("vehicle4");
const car5 = new Motorcycle("vehicle5");

parkingLotManager.placeVehicle(car1);
parkingLotManager.placeVehicle(car1);
parkingLotManager.placeVehicle(car2);
parkingLotManager.placeVehicle(car3);
parkingLotManager.placeVehicle(car4);

console.log(parkingLotManager.hasVehicle("car2"));
