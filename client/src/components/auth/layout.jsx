import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <div className="flex min-h-screen">
            {/* Left side (hidden on small screens, shown on large screens) */}
            <div className="hidden lg:flex items-center justify-center bg-lime-500 w-1/2 px-12">
                <div className="max-w-md space-y-6 text-center text-primary-foreground">
                    <h1 className="text-4xl font-extrabold tracking-tight">
                        This is Just an Ordinary Welcome site for your purchase...
                    </h1>
                </div>
            </div>

            {/* Right side (shown on all screen sizes) */}
            <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
                <Outlet />
            </div>
        </div>
    );
}

export default AuthLayout;
