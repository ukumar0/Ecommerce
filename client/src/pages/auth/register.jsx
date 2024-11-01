import { useState } from "react";
import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "@/store/auth-slice";

const initialState = {
    userName: '',
    email: '',
    password: '',
};

function AuthRegister() {
    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function onSubmit(event) {
        event.preventDefault();
        setError(null);

        try {
            const result = await dispatch(registerUser(formData));
            if (registerUser.fulfilled.match(result)) {
                navigate('/auth/login');
            } else if (registerUser.rejected.match(result)) {
                setError(result.error.message || 'Registration failed.');
            }
        } catch {
            setError('An unexpected error occurred.');
        }
    }

    return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new Account</h1>
                <p>
                    Already have an account?
                    <Link className="font-medium ml-2 text-primary hover:underline" to="/auth/login">
                        Login
                    </Link>
                </p>
            </div>
            {error && <div className="text-red-500 text-center">{error}</div>}
            <CommonForm
                formControls={registerFormControls}
                buttonText={'Create Account'}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
            />
        </div>
    );
}

export default AuthRegister;
