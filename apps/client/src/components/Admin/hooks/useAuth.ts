import { Auth } from "aws-amplify";
import { useState, useEffect, useCallback } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import login from "@/pages/admin/login";

export const useAuth = () => {
  const [user, setUser] = useState<CognitoUser>();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  
  const getUser = async () => {
    try {

      const authUser: CognitoUser =
        (await Auth.currentAuthenticatedUser()) as CognitoUser;
      if (authUser) {
        setUser(authUser);
        setIsAuthenticated(true);
        setIsAuthorized(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (e) {
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  const login = () => Auth.federatedSignIn();

  return {
    user: user?.getSignInUserSession(),
    isAuthenticated,
    isAuthorized,
    logout: () => Auth.signOut(),
    isLoading,
    setUser,
    setIsAuthenticated,
    setIsAuthorized,
    login,
  };
};

export default useAuth;
