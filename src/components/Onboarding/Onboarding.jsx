import { useState } from "react";
import { checkMemberEligibility } from "../../api";
import { useNavigate } from "react-router-dom";

const insuranceProviders = [
  { name: "Jubilee Health Insurance Limited", sladeCode: 457 },
  { name: "APA Insurance Company", sladeCode: 2001 },
  { name: "Madison General Insurance Kenya", sladeCode: 2011 },
  { name: "JBritam General Insurance", sladeCode: 2002 },
  { name: "Jubilee Health Insurance Limited", sladeCode: 457 },
];

export default function Onboarding() {
  let [memberNumber, setMemberNumber] = useState("DEMO/001");
  let [provider, setProvider] = useState(457);

  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();

    try{
        const res = await checkMemberEligibility(memberNumber, provider);

        console.log(res.data);
        localStorage.setItem("logged_in_member", JSON.stringify(res.data));

        navigate("/member-details", {state: {member: res.data}});
    } catch (error) {
        console.error(error.response);
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Check member eligibility
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={onSubmit}>
            <div>
              <label htmlFor="member" className="block text-sm font-medium leading-6 text-gray-900">
                Member Number
              </label>
              <div className="mt-2">
                <input
                  id="member"
                  name="member_number"
                  type="text"
                  autoComplete="off"
                  required
                  value={memberNumber}
                  onChange={(e) => setMemberNumber(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="insurance-provider" className="block text-sm font-medium leading-6 text-gray-900">
                Insurance Provider
              </label>
              <select
                id="insurance-provider"
                name="insurance_provider"
                value={provider}
                onChange={(e) => setProvider(e.target.value) }
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required>
                <option value="">--Select--</option>
                {insuranceProviders.map((option, idx) => (
                  <option key={idx} value={option.sladeCode}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Check Memeber Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
