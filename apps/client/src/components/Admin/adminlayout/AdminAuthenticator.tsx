import { ComponentType, FC, useEffect } from "react";
import useAuth from "../hooks/useAuth";
// import { Login } from "../containers/login";

export const withAuthenticationRequired = <P extends Record<string, unknown>>(
  Component: ComponentType<P>
): FC<P> =>
  function WithAuthenticationRequired(props: P): JSX.Element {
    const { isAuthenticated, isLoading, user } = useAuth();
    console.log("isAuthenticated", isAuthenticated);

    useEffect(() => {
      if (!isAuthenticated && !isLoading) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        window.location.replace("/admin/login");
      }
    }, [isAuthenticated, isLoading]);

    return <>{isAuthenticated && <Component {...props} />}</>;
  };

export default withAuthenticationRequired;
