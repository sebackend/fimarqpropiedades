import base64Str from "./base64src";
import Image from "next/image";

export default function WhatsappButton({ phoneNumber }) {
  let link = `https://wa.me/${phoneNumber}`;
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="wsp-button-wrapper">
        <div className="wsp-logo-container">
          <Image src={base64Str} width={"50%"} height={"50%"} alt="wsp logo" />
        </div>
      </div>
    </a>
  );
}
