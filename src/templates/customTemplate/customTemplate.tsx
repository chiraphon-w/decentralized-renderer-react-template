import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CustomTemplateCertificate } from "../sample";
import { PrintWatermark } from "../../core/PrintWatermark";

const containerStyle = css`
  background-color: #ffffff;
  color: #000000;
  padding: 15px;
  margin: auto;
  width: 70%;
  height: 100%;
  text-align: center;
`;

export const CustomTemplate: FunctionComponent<
  TemplateProps<CustomTemplateCertificate> & { className?: string }
> = ({ document, className = "" }) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <PrintWatermark />
      <h1>{document.name}</h1>
      <div>This is to certify that</div>
      <h2>{document.recipient.name}</h2>
      <div>was admitted to the Drgree of</div>
      <h3>{document.recipient.dname}</h3>
      <div>in Computer Engineering</div>
      <div>on the 30th day of July in the year 2020</div>
    </div>
  );
};