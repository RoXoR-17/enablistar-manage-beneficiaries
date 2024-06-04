import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../utils/store";
import {
  deleteBeneficiary,
  setFormData,
  showOrHideForm,
} from "../utils/beneficiarySlice";
import DeleteConfirmationPopup from "./DeleteConfirmationPopup";

function BeneficiaryListing() {
  const [deleteBeneficiaryId, setDeleteBeneficiaryId] = useState(0);
  const { showForm, beneficiaries } = useSelector(
    (state: RootState) => state.beneficiary
  );
  const dispatch = useDispatch();

  console.log(beneficiaries, deleteBeneficiaryId);

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-700">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
              <th scope="col" className="px-6 py-3">
                Pin Code
              </th>
              <th scope="col" className="px-6 py-3">
                <button
                  onClick={() => dispatch(showOrHideForm())}
                  disabled={showForm}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3"
                >
                  Add New
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {beneficiaries.length > 0 ? (
              beneficiaries.map((beneficiary) => (
                <tr key={beneficiary.id} className="bg-white border-b">
                  <td className="px-6 py-4 text-gray-900">
                    {beneficiary.fullName}
                  </td>
                  <td className="px-6 py-4">{beneficiary.address}</td>
                  <td className="px-6 py-4">{beneficiary.countryName}</td>
                  <td className="px-6 py-4">{beneficiary.pincode}</td>
                  <td>
                    <button
                      onClick={() => dispatch(setFormData(beneficiary))}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 me-3"
                      disabled={showForm}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setDeleteBeneficiaryId(+beneficiary.id)}
                      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-4 py-2 me-3"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center py-4" colSpan={12}>
                  Current there are no beneficiaries!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {deleteBeneficiaryId > 0 && (
        <DeleteConfirmationPopup
          callback={(success = false) => {
            if (success) dispatch(deleteBeneficiary(deleteBeneficiaryId));
            setDeleteBeneficiaryId(0);
          }}
        />
      )}
    </>
  );
}

export default BeneficiaryListing;
