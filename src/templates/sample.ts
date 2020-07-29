import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface CustomTemplateCertificate extends Document {
  name: string;
  recipient: {
    name: string,
    dname: string
  };
}

export const customTemplateCertificate: CustomTemplateCertificate = {
  name: "SURANAREE UNIVERSITY OF TECHNOLOGY",
  recipient: {
    name: "test 1",
    dname: "Bachelor of Engineering Program"
  },
  $template: {
    name: "COC",
    type: "EMBEDDED_RENDERER",
    url: "http://localhost:3000"
  }
};