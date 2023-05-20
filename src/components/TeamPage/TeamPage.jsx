import { Link, useLoaderData, useLocation } from "react-router-dom";
import AppLayout from "../../layouts/AppLayout";

const TeamPage = () => {
    const location = useLocation();
    let memberDetails = location.state?.member;

    if(!memberDetails) {
        memberDetails = JSON.parse(localStorage.getItem('logged_in_member'));
    }

    return <AppLayout>
        <h1 className="text-2xl">Member Details</h1>

        <section className="mt-8 rounded-md max-w-3xl bg-white">
            <span className="text-2xl font-semibold">#{memberDetails.member.id}</span>
            <h2 className="text-3xl">{memberDetails.member.names}</h2>
        </section>

        <section className="mt-4 max-w-2xl overflow-y-auto">
            {
                memberDetails !== null ?
            (<pre>
            {JSON.stringify(memberDetails, null, 4)}
            </pre>) :
            <>
                You should <Link to="/login">log in again</Link>
            </>
            }
        </section>
    </AppLayout>
};

export default TeamPage;
