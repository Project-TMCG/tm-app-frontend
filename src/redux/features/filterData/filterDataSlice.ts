import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface savedIndex {
  "Dish Type": number | null;
  "Equipment": number | null;
  "Calories": number | null;
  "Protein (g)": number | null;
  "Fat (g)": number | null;
  "Fiber (g)": number | null;
  "Carbs (g)": number | null;
  "Cholesterol (mg)": number | null;
  "Reviews": number | null;
}

interface optionValue {
  "Dish Type": string | null;
  "Equipment": string | null;
  "Calories": number | null;
  "Protein (g)": number | null;
  "Fat (g)": number | null;
  "Fiber (g)": number | null;
  "Carbs (g)": number | null;
  "Cholesterol (mg)": number | null;
  "Reviews": string | null;
}

interface filterData {
  savedIndex: savedIndex,
  optionValues: optionValue
}

interface indexPayload {
  payload: savedIndex;
}

interface valuePayload {
  payload: optionValue;
}

export const filterDataSlice = createSlice({
  name: "filterData",
  initialState: {
    savedIndex:{
      "Dish Type": null,
      "Equipment": null,
      "Calories": null,
      "Protein (g)": null,
      "Fat (g)": null,
      "Fiber (g)": null,
      "Carbs (g)": null,
      "Cholesterol (mg)": null,
      "Reviews": null,
    } as savedIndex,
    optionValues: {
      "Dish Type": null,
      "Equipment": null,
      "Calories": null,
      "Protein (g)": null,
      "Fat (g)": null,
      "Fiber (g)": null,
      "Carbs (g)": null,
      "Cholesterol (mg)": null,
      "Reviews": null,
    } as optionValue
  } as filterData,
  reducers: {
    saveIndex: (state, action: indexPayload) => {
      //Get saved indexes on ModalFilterCategories.tsx from payload object
      const payload: savedIndex = action.payload;

      //Add new recipes to all
      state.savedIndex["Dish Type"] = payload["Dish Type"];
      state.savedIndex["Equipment"] = payload["Equipment"];
      state.savedIndex["Calories"] = payload["Calories"];
      state.savedIndex["Protein (g)"] = payload["Protein (g)"];
      state.savedIndex["Fat (g)"] = payload["Fat (g)"];
      state.savedIndex["Fiber (g)"] = payload["Fiber (g)"];
      state.savedIndex["Carbs (g)"] = payload["Carbs (g)"];
      state.savedIndex["Cholesterol (mg)"] = payload["Cholesterol (mg)"];
      state.savedIndex["Reviews"] = payload["Reviews"];
    },
    saveValue: (state, action: valuePayload) => {
      //Get the option value that is selected on ModalFilterCategories.tsx from payload object
      const payload: optionValue = action.payload;

      //Add new recipes to all
      state.optionValues["Dish Type"] = payload["Dish Type"];
      state.optionValues["Equipment"] = payload["Equipment"];
      state.optionValues["Calories"] = payload["Calories"];
      state.optionValues["Protein (g)"] = payload["Protein (g)"];
      state.optionValues["Fat (g)"] = payload["Fat (g)"];
      state.optionValues["Fiber (g)"] = payload["Fiber (g)"];
      state.optionValues["Carbs (g)"] = payload["Carbs (g)"];
      state.optionValues["Cholesterol (mg)"] = payload["Cholesterol (mg)"];
      state.optionValues["Reviews"] = payload["Reviews"];
    }
  },
});

export const { saveIndex, saveValue } = filterDataSlice.actions;

export default filterDataSlice.reducer;
