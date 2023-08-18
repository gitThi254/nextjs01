const { createSlice } = require("@reduxjs/toolkit");

const confirmSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = confirmSlice.actions;
export default confirmSlice.reducer;
