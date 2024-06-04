import BeneficiaryListing from "../components/BeneficiaryListing";
import BeneficiaryForm from "../components/BeneficiaryForm";

function ManageBeneficiariesPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Manage Beneficiaries</h1>
      <BeneficiaryForm />
      <BeneficiaryListing />
    </div>
  );
}

export default ManageBeneficiariesPage;
