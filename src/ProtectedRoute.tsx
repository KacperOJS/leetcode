// ProtectedRoute.tsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  path: string;
  isAuthenticated: boolean;
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  path,
  isAuthenticated,
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      path={path}
      element={isAuthenticated ? children : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;
