import { Navigate, Outlet } from 'react-router-dom';

// import { auth } from './firebase';

const PrivateRoute = () => {
   const auth = {'isLogged' : true};

  return (
    auth.isLogged ? <Outlet/> : <Navigate to = '/login'/> 
  );
};

export default PrivateRoute;
