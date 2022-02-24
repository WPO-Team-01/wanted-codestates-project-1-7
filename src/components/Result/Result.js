import React, { useState } from "react";

const Result = ({ formInfo, data, dataType }) => {
  const [isToggled, setIsToggled] = useState(false);
  const dataKeys = Object.keys(data).filter((key) => dataType.includes(key));

  console.log(dataKeys);
  return (
    <div>
      <div>{data.name}</div>
      <div>
        {!isToggled ? <button>더보기</button> : <button>최소화</button>}
      </div>
      {!isToggled && (
        <>
          {dataKeys.map((key, index) => (
            <div key={`${data.id}-${key}-${index}`}>
              <span>{key}</span>
              <span>{data[key]}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Result;
