import { Dispatch } from "react";
import styled from "styled-components";
import { useState } from "react";

const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`;

const SelectLabelButton = styled.button`
  padding: 0.3rem 0.5rem;

  width: 145px;
  height: 39px;
  font-weight: 500;
  background-color: #fff;
  border: none;
  border-radius: 100px;
  color: #111;
  align-items: center;
  justify-content: space-between;
  border: 1px solid slategrey;
  cursor: pointer;
  box-shadow: 0 1px 4px 0 #ccc;
  margin-bottom: 15px;
  &:hover {
    background-color: #eee;
  }
  @media (max-width: 380px) {
    width: 240px;
  }
`;

const DropdownStyle = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  max-height: 40vmax;
  min-width: 9rem;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: #fafafa;
  border: 1.5px solid slategrey;
  z-index: 100;
  ${(p) =>
    p.isVisible !== true &&
    `
      max-height: 40px;
      visibility: hidden;
    `}
`;

const DropdownItem = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0.15rem 0;
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
  font-weight: 400;
  color: #333;
  border-radius: 0.3rem;
  cursor: pointer;
  ${(p) =>
    p.active &&
    `
      color: #166edc;
      font-weight: 500;
    `}
  &:hover, :focus, :focus:hover {
    background-color: #166edc;
    color: #fafafa;
    outline: none;
  }
`;
const Select = ({
  values,
  onChange,
  label,
}: {
  values: string[];
  onChange: Dispatch<React.SetStateAction<string>>;
  label: string;
}) => {
  const [currentValue, setCurrentValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleValueChange = (value: string) => {
    setCurrentValue(value);
  };
  const handleChange = (value: string) => {
    handleValueChange(value);
    // call method, if it exists
    if (onChange) onChange(value);
    // close, after all tasks are finished
    handleClose();
  };
  return (
    <SelectContainer>
      <SelectLabelButton onClick={handleOpen}>
        {currentValue !== "" ? currentValue : label}
      </SelectLabelButton>
      <DropdownStyle isVisible={open}>
        {values.map((value, index) => (
          <DropdownItem
            onClick={() => handleChange(value === "all" ? "" : value)}
            active={value === currentValue}
            key={index}
          >
            {value}
          </DropdownItem>
        ))}
      </DropdownStyle>
    </SelectContainer>
  );
};

export default Select;
