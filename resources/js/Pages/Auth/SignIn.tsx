import { Head } from "@inertiajs/react";
import SignInForm from "@/components/auth/SignInForm";
import AuthLayout from "@/layouts/AuthLayout";
function Login() {
    return (
        <>
            <Head>
                <title>Signin</title>
                <meta name="description" content="Access your account to manage appointments, prescriptions, and more." />
            </Head>
            <AuthLayout>
                <SignInForm canResetPassword={true} status="heh" />
            </AuthLayout>
        </>
    );
}

export default Login;
