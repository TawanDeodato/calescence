import { faker } from "@faker-js/faker";

function createRandomeCarList() {
  return {
    name: faker.vehicle.vehicle(),
    fuelType: faker.vehicle.fuel(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    image:
      "https://soymotor.com/sites/default/files/imagenes/noticia/bmw-m8-gran-coupe-portadasoymotor_0.jpg",
    miles: 300,
    gearType: "Automático",
    price: faker.finance.amount({ min: 35000, max: 300000 }),
  };
}

const carList = faker.helpers.multiple(createRandomeCarList, {
  count: 7,
});

export default {
  carList,
};
