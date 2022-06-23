import Image from "next/image";

export default function MainLogo({ width, height, props }) {
  return (
    <Image
      src="/logo2.png"
      width={width}
      height={height}
      alt="logo fimarq"
      {...props}
    />
  );
}
