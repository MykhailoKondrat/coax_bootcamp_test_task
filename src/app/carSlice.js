import { createSlice } from '@reduxjs/toolkit';

export const carSlice = createSlice({
  name: 'cars',
  initialState:
  [
      {
        id: 14,
        model: "156",
        brand: "Alfa Romeo",
        type: "Car",
      },
    {
        id: 17,
        model: "206",
        brand: "Peugeot",
        type: "Car",
      },
    {
      id: 24,
      model: "307",
      brand: "Peugeot",
      type: "Car",
      },
     {
      id: 29,
       model: "323",
       brand: "Mazda",
      type: "Car",
    },
    {
      id: 519,
      model: "WR",
      brand: "Yamaha",
      type: "Motorcycle"
    }, {
    id: 600,
    model: "Raptor",
    brand: "Yamaha",
    type: "Motorcycle"
  }],
  
  reducers: {
    addCar: (state, payload) => {state.push(payload);},
    removeCar: (state, {payload}) => state.filter ( car => car.id !== payload),
  },
});

export const { addCar, removeCar } = carSlice.actions;

export default carSlice.reducer;
