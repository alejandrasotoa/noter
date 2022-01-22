import { useNavigate } from "react-router-dom";

export const useRedirectToDashboard = () => {
    let navigate = useNavigate();

    const redirectToDashboard = (event) => {
        event.preventDefault();
        return navigate("/dashboard", { replace: true });
    };

    return { redirectToDashboard };
};
