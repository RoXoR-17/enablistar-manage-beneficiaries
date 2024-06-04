import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";

import { RootState } from "../utils/store";
import { countries } from "../utils/constant";
import {
  Beneficiary,
  addBeneficiary,
  setFormData,
  showOrHideForm,
  updateBeneficiary,
} from "../utils/beneficiarySlice";
import { useEffect } from "react";

function BeneficiaryForm() {
  const { showForm, formData } = useSelector(
    (state: RootState) => state.beneficiary
  );
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<Beneficiary>();
  const onSubmit: SubmitHandler<Beneficiary> = (data) => {
    reset();
    dispatch(data.id ? updateBeneficiary(data) : addBeneficiary(data));
  };

  useEffect(() => {
    if (showForm && formData.id) {
      setValue("id", formData.id);
      setValue("fullName", formData.fullName);
      setValue("address", formData.address);
      setValue("countryName", formData.countryName);
      setValue("pincode", formData.pincode);
    }
  }, [showForm]);

  return (
    <div className={showForm ? "" : "hidden"}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 bg-gray-50 mb-4 rounded"
      >
        <div className="grid gap-4 mb-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              placeholder="John Doe"
              {...register("fullName", { required: true, maxLength: 45 })}
            />
            {errors.fullName?.type === "required" && (
              <span className="text-xs text-red-500">
                Please enter full name first
              </span>
            )}
            {errors.fullName?.type === "maxLength" && (
              <span className="text-xs text-red-500">
                Max limit of 45 characters reached!
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              placeholder="1, A Street, City"
              {...register("address", { required: true, maxLength: 255 })}
            />
            {errors.address?.type === "required" && (
              <span className="text-xs text-red-500">
                Please enter address first
              </span>
            )}
            {errors.address?.type === "maxLength" && (
              <span className="text-xs text-red-500">
                Max limit of 255 characters reached!
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="countryName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Select Country
            </label>
            <select
              id="countryName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              {...register("countryName", { required: true })}
            >
              <option value="">Choose a country</option>
              {countries.map((country) => (
                <option value={country}>{country}</option>
              ))}
            </select>
            {errors.countryName?.type === "required" && (
              <span className="text-xs text-red-500">
                Please select country first
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="pincode"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Pin Code
            </label>
            <input
              type="number"
              id="pincode"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              placeholder="30001"
              {...register("pincode", {
                required: true,
                min: 1,
                minLength: 4,
                maxLength: 8,
              })}
            />
            {errors.pincode?.type === "required" && (
              <span className="text-xs text-red-500">
                Please enter pin code first
              </span>
            )}
            {(errors.pincode?.type === "min" ||
              errors.pincode?.type.includes("Length")) && (
              <span className="text-xs text-red-500">
                Please enter valid pin code
              </span>
            )}
          </div>
        </div>
        <div className="flex items-end justify-end">
          <button
            type="button"
            onClick={() => {
              reset();
              dispatch(setFormData());
              dispatch(showOrHideForm());
            }}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-md px-4 py-2 me-3"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 me-3"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default BeneficiaryForm;
