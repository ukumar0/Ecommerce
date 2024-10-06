import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashBoard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminFeatures from "./pages/admin-view/features";
import AdminOrders from "./pages/admin-view/order";
import ShoppingLayout from "./components/user-view/layout";
import Notfound from "./pages/not-found/notfound";
import ShoppingHome from "./pages/user-view/home";
import ShoppingListing from "./pages/user-view/listing";
import ShoppingAccount from "./pages/user-view/account";
import ShoppingCheckout from "./pages/user-view/checkout";
import CheckAuth from "./components/common/check-auth";
import UnAutherisedAccess from "./pages/unauth-page";

function App() {
  const isAuthenticated = false;
  const user = null;

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* Auth Routes */}
        <Route path="/auth" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><AuthLayout /></CheckAuth>}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><AdminLayout /></CheckAuth>}>
          <Route path="dashboard" element={<AdminDashBoard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="order" element={<AdminOrders />} />
        </Route>

        {/* Shopping Routes */}
        <Route path="/shop" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><ShoppingLayout /></CheckAuth>}>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
        </Route>

        {/* Catch-all Route */}
        <Route path="*" element={<Notfound />} />
        <Route path="/unauth-page" element={<UnAutherisedAccess/>}/>
      </Routes>
    </div>
  );
}

export default App;
