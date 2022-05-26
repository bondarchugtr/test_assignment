import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";
// import { Button } from "../../common/Button/index";
// import { ValidationSchemaLogIn } from "../../common/ValidationSchemaLogIn";
// import { useDispatch } from "react-redux";
// import authOperations from "store/auth/auth-operations";
// import { Link } from "react-router-dom";
// import { ROUTES } from "lib";

const StyledFormRegistration = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 107px 20px 107px 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    max-width: 360px;
  }
  @media screen and (min-width: 768px) {
    width: 533px;
    padding: 40px 58px 66px 65px;
    border-radius: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 136px;
    margin-bottom: 116px;
    margin-left: 0;
    margin-right: 0;
  }
  button:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const StyleIconInput = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

const StyledInput = styled(Field)`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  padding-bottom: 8px;
  padding-left: 54px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  outline: none;
  &:-webkit-autofill {
    transition: background-color 5000s ease-in-out 0s;
  }
  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
  }
  button:not(:last-child) {
    margin-bottom: 0;
  }
`;

export const FormLogin = () => {
  //   const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      //   validationSchema={ValidationSchemaLogIn}
      onSubmit={(values, actions) => {
        // dispatch(authOperations.logIn(values));
        actions.resetForm({
          email: "",
          password: "",
        });
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <StyledFormRegistration>
          <StyleIconInput>
            <StyledInput
              id="email"
              type="text"
              name="email"
              required
              placeholder="E-mail"
              value={values.email}
            />
            <ErrorMessage name="email" />
          </StyleIconInput>
          <StyleIconInput>
            <StyledInput
              id="password"
              type="password"
              name="password"
              aria-label="Password"
              value={values.password}
              required
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password"
            />

            <ErrorMessage name="password" />
          </StyleIconInput>
          {/* <Button type="submit"> Log In</Button> */}
          {/* <Link to={`/${ROUTES.REGISTER}`}> */}
          {/* <Button color={false} type={"button"}> */}
          Registration
          {/* </Button> */}
          {/* </Link> */}
        </StyledFormRegistration>
      )}
    </Formik>
  );
};
