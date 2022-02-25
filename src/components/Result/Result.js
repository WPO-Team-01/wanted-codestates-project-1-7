import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const CoverBox = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  width: 100%;
  padding: 0.5rem;
`;

const NameBox = styled.div`
  font-size: 1.2rem;
`;

const ToggleBtn = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 8px;
  width: 2rem;
  height: 2rem;
`;

const DataBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  width: 100%;
`;

const TextDataBox = styled.div`
  word-break: keep-all;
  text-indent: 1rem;
`;

const ImgDataBox = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Result = ({ data }) => {
  const [isToggled, setIsToggled] = useState(false);
  const dataKeys = Object.keys(data).filter((key) => key !== "id");

  const onToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Container>
      <CoverBox>
        <NameBox>{data.name}</NameBox>
        <div>
          {!isToggled ? (
            <ToggleBtn onClick={onToggle}>▼</ToggleBtn>
          ) : (
            <ToggleBtn onClick={onToggle}>▲</ToggleBtn>
          )}
        </div>
      </CoverBox>
      {isToggled && (
        <>
          {dataKeys.map((key, index) => (
            <DataBox key={`${data.id}-${key}-${index}`}>
              <TextDataBox>{key}</TextDataBox>
              {typeof data[key] === "boolean" && (
                <TextDataBox>{data[key] ? "동의" : "미동의"}</TextDataBox>
              )}
              {typeof data[key] === "string" && (
                <TextDataBox>
                  {data[key].slice(0, 4) === "http" ? (
                    <ImgDataBox src={data[key]} alt={`${data.name}_img`} />
                  ) : (
                    data[key]
                  )}
                </TextDataBox>
              )}
            </DataBox>
          ))}
        </>
      )}
    </Container>
  );
};

export default Result;
