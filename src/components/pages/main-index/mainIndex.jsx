import { React, useState } from "react";
import "./mainIndex.scss";
import InputFields from "../../molecules/input-fields/inputFields";
import ReportPdf from "../../molecules/report-pdf/reportPdf";

const Index = () => {
  let [accountInfo, setAccountInfo] = useState({
    accName: "",
    accLevel: 0,
    units: "",
    espers: "",
    vcs: "",
    gear: "",
  });
  let [maxedStats, setMaxedStats] = useState({
    maxUnits: 0,
    maxEspers: 0,
    maxVcs: 0,
    maxGear: 0,
  });
  let [veredictInfo, setveredictInfo] = useState({
    strenghts: "",
    weaknesses: "",
    improve: "",
  });
  return (
    <div className="p-index-container">
      <p>Nagis Test Tool</p>
      <div className="p-index-mainbody">
        <div className="p-index-mainbody--inputfields">
          <InputFields
            accountInfo={accountInfo}
            maxedStats={maxedStats}
            veredictInfo={veredictInfo}
            setveredictInfo={setveredictInfo}
            setAccountInfo={setAccountInfo}
            setMaxedStats={setMaxedStats}
          />
        </div>
        <div className="p-index-mainbody--reportpreview">
          <ReportPdf
            accountInfo={accountInfo}
            maxedStats={maxedStats}
            veredictInfo={veredictInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
