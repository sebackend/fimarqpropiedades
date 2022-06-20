import MainLogo from "../MainLogo";

export default function LogoHeader() {
  return (
    <div className="logo-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <MainLogo width={220} height={220} className="mx-auto d-block" />
          </div>
        </div>
      </div>
    </div>
  );
}
