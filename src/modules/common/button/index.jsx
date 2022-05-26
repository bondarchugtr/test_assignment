import styled from "styled-components";

const StyleButton = styled.button`
  width: 100px;
  height: 34px;
  background: #f4e041;
  border-radius: 80px;
  padding: 4px 16px;
  cursor: pointer;
  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const Button = ({
  color = true,
  children,
  type = "button",
  ariaLabel,
  onClickButton,
  style,
}) => {
  return (
    <>
      <StyleButton
        type={type}
        aria-label={ariaLabel}
        onClick={onClickButton}
        style={style}
      >
        {children}
      </StyleButton>
    </>
  );
};
