import MainLogo from "../MainLogo";

export default function LogoHeader() {
  return (
    <div className="logo-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <MainLogo width={280} height={280} className="mx-auto d-block" />
          </div>
        </div>
      </div>
    </div>
  );
}
