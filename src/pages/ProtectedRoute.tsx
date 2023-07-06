import React from 'react';
import { Route, Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  path: string;
  component: React.ComponentType<any>;
  isAuthenticated: boolean;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;
