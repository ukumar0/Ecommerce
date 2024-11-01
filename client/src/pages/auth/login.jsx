import { useState } from "react";
import CommonForm from "@/components/common/form";
import { LoginFormControls } from "@/config";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticateUser } from "@/store/auth-slice";

const initialState = {
    email: '',
    password: '',
};

function AuthLogin() {
    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function onSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const result = await dispatch(authenticateUser(formData));
            if (authenticateUser.fulfilled.match(result)) {
                navigate('/dashboard'); // Navigate to dashboard or preferred page
            } else {
                setError(result.error.message || 'Login failed.');
            }
        } catch (err) {
            setError('An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome</h1>
                <p>
                    Dont have an account?
                    <Link className="font-medium ml-2 text-primary hover:underline" to="/auth/register">
                        Register
                    </Link>
                </p>
            </div>
            {error && <div className="text-red-500 text-center">{error}</div>}
            <CommonForm
                formControls={LoginFormControls}
                buttonText={isLoading ? 'Signing In...' : 'Sign In'}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
            />
        </div>
    );
}

export default AuthLogin;
