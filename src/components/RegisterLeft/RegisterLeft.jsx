/** Dependencies */
import React from "react";
import clsx from "clsx";
/** Icons */
import PatikaDevIcon from "../../constant/Icons/patikaDev";
import LongLineIcon from "../../constant/Icons/LongLine";
import ShortLineIcon from "../../constant/Icons/shortLine";

/** Style */
import "./style.css";

/**Context */
import { useTheme } from "../../context/themeContext";

function RegisterLeft() {

  const { theme } = useTheme();

  return (
    <div className={clsx("RegisterLeftContainer",{'RegisterLeftContainer-dark':theme==='dark'})}>
      <div className="PatikaDevIcon">
        <PatikaDevIcon  />
      </div>
      <div className={clsx("HeaderYazilimPatikalari",{'HeaderYazilimPatikalari-dark':theme==='dark'})}>
        <div>YAZILIM PATİKALARI</div>
      </div>
      <div className="TextContainer">
        <p className={clsx("text",{'text-dark':theme==='dark'})}>
          Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir
          eğitim modelidir. Ekibini büyütmek isteyen şirketler bir bootcamp'lere
          sponsor olurlar. Teknik beceriler kazanmaya başlamış ancak işe girmeye
          hazır olmayan kişiler bootcamp'lere başvururlar. Seçilen adaylar 4-8
          haftalık ücretsiz ve yoğun eğitime kabul alırlar. Bootcamp'lerde
          başarılı olan öğrenciler sponsor şirkette ya da sektörde başka
          şirketlere işe yerleşirler.
        </p>
      </div>
      <div className="IconContainer">
      <div className="ShortLine">
        <ShortLineIcon color={
          theme === "light" ? "#444AFF" : "#FFBF5E"
        } />
      </div>
      <div className="LongLine">
        <LongLineIcon color={
          theme === "light" ? "#444AFF" : "#FFBF5E"
        } />
      </div>
      </div>
    </div>
  );
}

export default RegisterLeft;
