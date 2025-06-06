import { Head } from "@inertiajs/react";
import SignInForm from "@/components/auth/SignInForm";
import AuthLayout from "@/layouts/AuthLayout";
function Login() {
    return (
        <>
            <Head title="Signin" />
            <AuthLayout>
                <SignInForm />
            </AuthLayout>
        </>
    );
}

export default Login;
