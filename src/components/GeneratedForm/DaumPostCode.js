import React from "react";
import DaumPostcode from "react-daum-postcode";

const DaumPost = ({ setAddress }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    //fullAddress -> 전체 주소반환
    setAddress(fullAddress);
  };
  return (
    <DaumPostcode
      onComplete={handleComplete}
      style={{ width: "800px", height: "600px" }}
      className="post-code"
    />
  );
};
export default DaumPost;
