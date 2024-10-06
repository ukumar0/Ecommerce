import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
    const location = useLocation();

    // Redirect to login if not authenticated and not on login/register page
    if (!isAuthenticated && !(location.pathname.includes('/login') || location.pathname.includes('/register'))) {
        return <Navigate to='/auth/login' />;
    }

    // Redirect to respective dashboard if authenticated and trying to access login/register
    if (isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register'))) {
        if (user?.role === 'admin') {
            return <Navigate to='/admin/dashboard' />;
        } else {
            return <Navigate to='/shop/home' />;
        }
    }

    // Prevent non-admin users from accessing admin routes
    if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('admin')) {
        return <Navigate to='/unauth-page' />;
    }

    // Prevent admin users from accessing user routes
    if (isAuthenticated && user?.role === 'admin' && location.pathname.includes('shop')) {
        return <Navigate to='/admin/dashboard' />;
    }

    // Render children if all checks pass
    return <>{children}</>;
}

export default CheckAuth;
