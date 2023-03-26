import React from "react";
import styled from "styled-components";

const Button = styled.div`
  position: absolute;
  padding: 0px;
  bottom: 20px;
  left: calc(50% - 73.5px);
  width: 145px;
  height: 39px;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #d5d0d0;
  border-radius: 100px;
  font-weight: 600;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const LoadMore = (props: { onClick: () => void; loading: boolean }) => {
  return (
    <Button onClick={props.onClick}>
      {props.loading ? "Loading..." : "Load more"}
    </Button>
  );
};

export default React.memo(LoadMore);
