import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export interface Beneficiary {
  id: number | "";
  fullName: string;
  address: string;
  countryName: string;
  pincode: number | "";
}

const defaultBenifiaryData: Beneficiary = {
  id: "",
  fullName: "",
  address: "",
  countryName: "",
  pincode: "",
};

interface BeneficiaryState {
  showForm: boolean;
  formData: Beneficiary;
  beneficiaries: Beneficiary[];
}

const initialState: BeneficiaryState = {
  showForm: false,
  formData: defaultBenifiaryData,
  beneficiaries: [],
};

export const beneficiarySlice = createSlice({
  name: "benificiary",
  initialState: initialState,
  reducers: {
    showOrHideForm: (state) => {
      state.showForm = !state.showForm;
    },
    setFormData: (state, action: PayloadAction<Beneficiary | undefined>) => {
      if (action.payload) state.showForm = true;
      state.formData = action.payload ? action.payload : defaultBenifiaryData;
    },
    addBeneficiary: (state, action: PayloadAction<Beneficiary>) => {
      state.beneficiaries.push({
        ...action.payload,
        id: state.beneficiaries.length + 1,
      });
      state.showForm = false;
      toast.success("New beneficiary added successfully");
    },
    updateBeneficiary(state, action: PayloadAction<Beneficiary>) {
      const { id } = action.payload;
      state.beneficiaries = state.beneficiaries.map((b) =>
        b.id === id ? action.payload : b
      );
      state.formData = defaultBenifiaryData;
      state.showForm = false;
      toast.success("Beneficiary updated successfully");
    },
    deleteBeneficiary(state, action: PayloadAction<number>) {
      state.beneficiaries = state.beneficiaries.filter(
        (b) => b.id !== action.payload
      );
      toast.success("Beneficiary deleted successfully");
    },
  },
});

export const {
  showOrHideForm,
  setFormData,
  addBeneficiary,
  updateBeneficiary,
  deleteBeneficiary,
} = beneficiarySlice.actions;

export default beneficiarySlice.reducer;
