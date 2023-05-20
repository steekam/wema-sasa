import axios from "axios";

export const HEALTHCLOUD_BASE_URL = 'https://accounts.multitenant.slade360.co.ke'

export async function setupHealthCloudAccessToken() {
    const data = {
        grant_type: 'password',
        client_id: import.meta.env.VITE_HEALTHCLOUD_CLIENT_ID,
        client_secret: import.meta.env.VITE_HEALTHCLOUD_SECRET_KEY,
        username: import.meta.env.VITE_HEALTHCLOUD_USERNAME,
        password: import.meta.env.VITE_HEALTHCLOUD_PASSWORD,
    };

    try {
        const res = await axios.post(`${HEALTHCLOUD_BASE_URL}/oauth2/token/`, data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        });

        localStorage.setItem("healthcloud_access_token", res.data.access_token);

        return res.data;
    } catch (error) {
        console.error(error.response);
        throw new Error("Couldn't Authorize Healthcloud requests.")
    }
}

export function checkMemberEligibility(data) {

}
