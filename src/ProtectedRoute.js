import { Navigate, Outlet } from 'react-router-dom';

import { getAuth, onAuthStateChanged } from "firebase/auth";



const PrivateRoute = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    user ? <Outlet /> : <Navigate to='/login' />
  );
};

export default PrivateRoute;
