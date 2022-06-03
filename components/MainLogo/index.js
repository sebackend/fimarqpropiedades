import Image from "next/image";

export default function MainLogo({ width, height }) {
  return (
    // <Image
    //   src="/logo_white.jpg"
    //   width={width}
    //   height={height}
    //   alt="logo fimarq"
    // />
    <Image src="/logo.png" width={width} height={height} alt="logo fimarq" />
  );
}
