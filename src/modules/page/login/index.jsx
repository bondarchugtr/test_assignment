import { FormLogin } from "../../components/FormLogin";
import { StyledLoginPage } from "../../components/formPage";

import { useSelector } from "react-redux";
import { authSelectors } from "store/auth/auth-selectors";
import { StyledTitle } from "../../components/svgFormPage/svgFormPage";

const Login = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {/* {!isLoggedIn && ( */}
      <StyledLoginPage>
        <StyledTitle>Hello</StyledTitle>

        <FormLogin />
      </StyledLoginPage>
      {/* )} */}
    </>
  );
};

export default Login;
