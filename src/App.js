import "./App.css";
import ScheduleComponent from "./ScheduleComponent";
import bahrainCircuit from "./tracks/bahrain.png";
import jeddah from "./tracks/jeddah.png";
import melbourne from "./tracks/melbourne.png";
import imola from "./tracks/imola.png";
import miami from "./tracks/miami.png";
import catalunia from "./tracks/catalunia.png";
import monaco from "./tracks/monaco.png";
import baku from "./tracks/baku.png";
import montreal from "./tracks/montreal.png";
import silverstone from "./tracks/silverstone.png";
import austria from "./tracks/austria.png";
import france from "./tracks/france.png";
import hungaroring from "./tracks/hungaroring.png";
import belgium from "./tracks/belgium.png";
import zand from "./tracks/zand.png";
import monza from "./tracks/monza.png";
import sg from "./tracks/sg.png";
import suzuka from "./tracks/suzuka.png";
import austin from "./tracks/austin.png";
import mexico from "./tracks/mexico.png";
import brazil from "./tracks/brazil.png";
import abu from "./tracks/abu.png";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import useWindowDimensions from "./WindowDimension";

const raceDetails = {
  bahrain: {
    name: "FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2022",
    gpName: "Bahrain Grand Prix",
    country: "Bahrain",
    countryCode: "BH",
    circuitDetails: {
      name: "BAHRAIN INTERNATIONAL CIRCUIT",
      location: "Sakhir",
      circuitImage: bahrainCircuit,
      laps: 57,
      lapRecord: {
        time: "1:31.447",
        year: "2005",
        driver: "Pedro de la Rosa",
      },
    },
    confirmed: true,
    practice1: {
      start: "20220318T120000Z",
      end: "20220318T130000Z",
    },
    practice2: {
      start: "20220318T150000Z",
      end: "20220318T160000Z",
    },
    practice3: {
      start: "20220319T120000Z",
      end: "20220319T130000Z",
    },
    qualifying: {
      start: "20220319T150000Z",
      end: "20220319T160000Z",
    },
    grandprix: {
      start: "20220320T150000Z",
      end: "20220320T170000Z",
    },
  },
  saudi: {
    name: "FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2022",
    gpName: "Saudi Arabian Grand Prix",
    country: "Saudi Arabia",
    countryCode: "SA",
    circuitDetails: {
      name: "JEDDAH CORNICHE CIRCUIT",
      location: "Jeddah",
      circuitImage: jeddah,
      laps: 50,
      lapRecord: {
        time: "1:30.734",
        year: "2021",
        driver: "Lewis Hamilton",
      },
    },
    confirmed: true,
    practice1: {
      start: "20220325T140000Z",
      end: "20220325T150000Z",
    },
    practice2: {
      start: "20220325T170000Z",
      end: "20220325T180000Z",
    },
    practice3: {
      start: "20220326T140000Z",
      end: "20220326T150000Z",
    },
    qualifying: {
      start: "20220326T170000Z",
      end: "20220326T180000Z",
    },
    grandprix: {
      start: "20220327T170000Z",
      end: "20220327T190000Z",
    },
  },
  australia: {
    name: "FORMULA 1 HEINEKEN AUSTRALIAN GRAND PRIX 2022",
    gpName: "Australian Grand Prix",
    country: "Australia",
    countryCode: "AU",
    circuitDetails: {
      name: "MELBOURNE GRAND PRIX CIRCUIT",
      location: "Melbourne",
      circuitImage: melbourne,
      laps: 58,
      lapRecord: {
        time: "1:24.125",
        year: "2004",
        driver: "Michael Schumacher",
      },
    },
    confirmed: true,
    practice1: {
      start: "20220408T030000Z",
      end: "20220408T040000Z",
    },
    practice2: {
      start: "20220408T060000Z",
      end: "20220408T070000Z",
    },
    practice3: {
      start: "20220409T030000Z",
      end: "20220409T040000Z",
    },
    qualifying: {
      start: "20220409T060000Z",
      end: "20220409T070000Z",
    },
    grandprix: {
      start: "20220410T050000Z",
      end: "20220410T070000Z",
    },
  },
  italy: {
    name: "FORMULA 1 ROLEX GRAN PREMIO DELL'EMILIA ROMAGNA 2022",
    gpName: "Emilia Romagna Grand Prix",
    country: "Italy",
    countryCode: "IT",
    circuitDetails: {
      name: "AUTODROMO ENZO E DINO FERRARI",
      location: "Imola",
      circuitImage: imola,
      laps: 63,
      lapRecord: {
        time: "1:15.484",
        year: "2020",
        driver: "Lewis Hamilton",
      },
    },
    confirmed: false,
    practice1: {
      start: "20220422T120000Z",
      end: "20220422T130000Z",
    },
    practice2: {
      start: "20220423T110000Z",
      end: "20220423T120000Z",
    },
    practice3: {
      start: "",
      end: "",
    },
    sprint: {
      start: "",
      end: "",
    },
    qualifying: {
      start: "20220423T140000Z",
      end: "20220423T150000Z",
    },
    grandprix: {
      start: "20220424T130000Z",
      end: "20220424T150000Z",
    },
  },
  usa: {
    name: "FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2022",
    gpName: "Miami Grand Prix",
    country: "USA",
    countryCode: "US",
    circuitDetails: {
      name: "MIAMI INTERNATIONAL AUTODROME",
      location: "Miami",
      circuitImage: miami,
      laps: 57,
      lapRecord: {
        time: null,
        year: null,
        driver: null,
      },
    },
    confirmed: true,
    practice1: {
      start: "20220506T183000Z",
      end: "20220506T193000Z",
    },
    practice2: {
      start: "20220506T213000Z",
      end: "20220506T223000Z",
    },
    practice3: {
      start: "20220507T170000Z",
      end: "20220507T180000Z",
    },
    qualifying: {
      start: "20220507T200000Z",
      end: "20220507T210000Z",
    },
    grandprix: {
      start: "20220508T193000Z",
      end: "20220508T213000Z",
    },
  },
  spain: {
    name: "FORMULA 1 PIRELLI GRAN PREMIO DE ESPAÑA 2022",
    gpName: "Spanish Grand Prix",
    country: "Spain",
    countryCode: "ES",
    circuitDetails: {
      name: "CIRCUIT DE BARCELONA-CATALUNYA",
      location: "Catalunya",
      circuitImage: catalunia,
      laps: 66,
      lapRecord: {
        time: "1:18.149",
        year: "2021",
        driver: "Max Verstappen",
      },
    },
    confirmed: true,
    practice1: {
      start: "20220520T120000Z",
      end: "20220520T130000Z",
    },
    practice2: {
      start: "20220520T150000Z",
      end: "20220520T160000Z",
    },
    practice3: {
      start: "20220521T110000Z",
      end: "20220521T120000Z",
    },
    qualifying: {
      start: "20220521T140000Z",
      end: "20220521T150000Z",
    },
    grandprix: {
      start: "20220522T130000Z",
      end: "20220522T150000Z",
    },
  },
  monaco: {
    name: "FORMULA 1 GRAND PRIX DE MONACO 2022",
    gpName: "Monaco Grand Prix",
    country: "Monaco",
    countryCode: "MC",
    circuitDetails: {
      name: "CIRCUIT DE MONACO",
      location: "Monte Carlo",
      circuitImage: monaco,
      laps: 78,
      lapRecord: {
        time: "1:12.909",
        year: "2021",
        driver: "Lewis Hamilton",
      },
    },
    confirmed: true,
    practice1: {
      start: "20220527T120000Z",
      end: "20220527T130000Z",
    },
    practice2: {
      start: "20220527T150000Z",
      end: "20220527T160000Z",
    },
    practice3: {
      start: "20220528T110000Z",
      end: "20220528T120000Z",
    },
    qualifying: {
      start: "20220528T140000Z",
      end: "20220528T150000Z",
    },
    grandprix: {
      start: "20220529T130000Z",
      end: "20220529T150000Z",
    },
  },
  azerbaijan: {
    name: "FORMULA 1 AZERBAIJAN GRAND PRIX 2022",
    gpName: "Azerbaijan Grand Prix",
    country: "Azerbaijan",
    countryCode: "AZ",
    circuitDetails: {
      name: "BAKU CITY CIRCUIT",
      location: "Baku",
      circuitImage: baku,
      laps: 51,
      lapRecord: {
        time: "1:43.009",
        year: "2019",
        driver: "Charles Leclerc",
      },
    },
    confirmed: true,
    practice1: {
      start: "20220610T110000Z",
      end: "20220610T120000Z",
    },
    practice2: {
      start: "20220610T140000Z",
      end: "20220610T150000Z",
    },
    practice3: {
      start: "20220611T110000Z",
      end: "20220611T120000Z",
    },
    qualifying: {
      start: "20220611T140000Z",
      end: "20220611T150000Z",
    },
    grandprix: {
      start: "20220612T110000Z",
      end: "20220612T130000Z",
    },
  },
  canada: {
    name: "FORMULA 1 GRAND PRIX DU CANADA 2022",
    gpName: "Canadian Grand Prix",
    country: "Canada",
    countryCode: "CA",
    circuitDetails: {
      name: "CIRCUIT GILLES-VILLENEUVE",
      location: "Montreal",
      circuitImage: montreal,
      laps: 70,
      lapRecord: {
        time: "1:13.078",
        year: "2019",
        driver: "Valtteri Bottas",
      },
    },
    confirmed: true,
    practice1: {
      start: "20220617T180000Z",
      end: "20220617T190000Z",
    },
    practice2: {
      start: "20220617T210000Z",
      end: "20220617T220000Z",
    },
    practice3: {
      start: "20220618T170000Z",
      end: "20220618T180000Z",
    },
    qualifying: {
      start: "20220618T200000Z",
      end: "20220618T210000Z",
    },
    grandprix: {
      start: "20220619T180000Z",
      end: "20220619T200000Z",
    },
  },
  britain: {
    name: "FORMULA 1 BRITISH GRAND PRIX 2022",
    gpName: "British Grand Prix",
    country: "Britain",
    countryCode: "GB",
    circuitDetails: {
      name: "SILVERSTONE CIRCUIT",
      location: "Silverstone",
      circuitImage: silverstone,
      laps: 52,
      lapRecord: {
        time: "1:27.097",
        year: "2020",
        driver: "Max Verstappen",
      },
    },
    confirmed: true,
    practice1: {
      start: "20220701T120000Z",
      end: "20220701T130000Z",
    },
    practice2: {
      start: "20220701T150000Z",
      end: "20220701T160000Z",
    },
    practice3: {
      start: "20220702T110000Z",
      end: "20220702T120000Z",
    },
    qualifying: {
      start: "20220702T140000Z",
      end: "20220702T150000Z",
    },
    grandprix: {
      start: "20220703T140000Z",
      end: "20220703T160000Z",
    },
  },
  austria: {
    name: "FORMULA 1 GROSSER PREIS VON ÖSTERREICH 2022",
    gpName: "Austrian Grand Prix",
    country: "Austria",
    countryCode: "AT",
    circuitDetails: {
      name: "RED BULL RING",
      location: "Spielberg",
      circuitImage: austria,
      laps: 71,
      lapRecord: {
        time: "1:05.619",
        year: "2020",
        driver: "Carlos Sainz",
      },
    },
    confirmed: false,
    practice1: {
      start: "20220708T120000Z",
      end: "20220708T130000Z",
    },
    practice2: {
      start: "20220709T110000Z",
      end: "20220709T120000Z",
    },
    practice3: {
      start: "",
      end: "",
    },
    qualifying: {
      start: "20220709T140000Z",
      end: "20220709T150000Z",
    },
    grandprix: {
      start: "20220710T130000Z",
      end: "20220710T150000Z",
    },
  },
  france: {
    name: "FORMULA 1 GRAND PRIX DE FRANCE 2022",
    gpName: "French Grand Prix",
    country: "France",
    countryCode: "FR",
    circuitDetails: {
      name: "CIRCUIT PAUL RICARD",
      location: "Paul Ricard",
      circuitImage: france,
      laps: 53,
      lapRecord: {
        time: "1:32.740",
        year: "2019",
        driver: "Sebastian Vettel",
      },
    },
    confirmed: true,
    practice1: {
      start: "20220722T120000Z",
      end: "20220722T130000Z",
    },
    practice2: {
      start: "20220722T150000Z",
      end: "20220722T160000Z",
    },
    practice3: {
      start: "20220723T110000Z",
      end: "20220723T120000Z",
    },
    qualifying: {
      start: "20220723T140000Z",
      end: "20220723T150000Z",
    },
    grandprix: {
      start: "20220724T130000Z",
      end: "20220724T150000Z",
    },
  },
  hungary: {
    name: "FORMULA 1 MAGYAR NAGYDÍJ 2022",
    gpName: "Hungarian Grand Prix",
    track: "HUNGARORING",
    location: "Budapest",
    country: "Hungary",
    countryCode: "HU",
    circuitDetails: {
      name: "HUNGARORING",
      location: "Budapest",
      circuitImage: hungaroring,
      laps: 70,
      lapRecord: {
        time: "1:16.627",
        year: "2020",
        driver: "Lewis Hamilton",
      },
    },
    confirmed: true,
    practice1: {
      start: "20220729T120000Z",
      end: "20220729T130000Z",
    },
    practice2: {
      start: "20220729T150000Z",
      end: "20220729T160000Z",
    },
    practice3: {
      start: "20220730T110000Z",
      end: "20220730T120000Z",
    },
    qualifying: {
      start: "20220730T140000Z",
      end: "20220730T150000Z",
    },
    grandprix: {
      start: "20220731T130000Z",
      end: "20220731T150000Z",
    },
  },
  belgium: {
    name: "FORMULA 1 ROLEX BELGIAN GRAND PRIX 2022",
    gpName: "Belgian Grand Prix",
    country: "Belgium",
    countryCode: "BE",
    circuitDetails: {
      name: "CIRCUIT DE SPA-FRANCORCHAMPS",
      location: "Spa-Francorchamps",
      circuitImage: belgium,
      laps: 44,
      lapRecord: {
        time: "1:46.286",
        year: "2018",
        driver: "Valtteri Bottas",
      },
    },
    confirmed: true,
    practice1: {
      start: "20220826T120000Z",
      end: "20220826T130000Z",
    },
    practice2: {
      start: "20220826T150000Z",
      end: "20220826T160000Z",
    },
    practice3: {
      start: "20220827T110000Z",
      end: "20220827T120000Z",
    },
    qualifying: {
      start: "20220827T140000Z",
      end: "20220827T150000Z",
    },
    grandprix: {
      start: "20220828T130000Z",
      end: "20220828T150000Z",
    },
  },
  netherlands: {
    name: "FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2022",
    gpName: "Dutch Grand Prix",
    country: "Netherlands",
    countryCode: "NL",
    circuitDetails: {
      name: "CIRCUIT ZANDVOORT",
      location: "Zandvoort",
      circuitImage: zand,
      laps: 72,
      lapRecord: {
        time: "1:11.097",
        year: "2021",
        driver: "Lewis Hamilton",
      },
    },
    confirmed: true,
    practice1: {
      start: "20220902T120000Z",
      end: "20220902T130000Z",
    },
    practice2: {
      start: "20220902T150000Z",
      end: "20220902T160000Z",
    },
    practice3: {
      start: "20220903T110000Z",
      end: "20220903T120000Z",
    },
    qualifying: {
      start: "20220903T140000Z",
      end: "20220903T150000Z",
    },
    grandprix: {
      start: "20220904T130000Z",
      end: "20220904T150000Z",
    },
  },
  italy2: {
    name: "FORMULA 1 PIRELLI GRAN PREMIO D’ITALIA 2022",
    gpName: "Italian Grand Prix",
    country: "Italy",
    countryCode: "IT",
    circuitDetails: {
      name: "AUTODROMO NAZIONALE MONZA",
      location: "Monza",
      circuitImage: monza,
      laps: 53,
      lapRecord: {
        time: "1:21.046",
        year: "2004",
        driver: "Rubens Barrichello",
      },
    },
    confirmed: true,
    practice1: {
      start: "20220909T120000Z",
      end: "20220909T130000Z",
    },
    practice2: {
      start: "20220909T150000Z",
      end: "20220909T160000Z",
    },
    practice3: {
      start: "20220910T110000Z",
      end: "20220910T120000Z",
    },
    qualifying: {
      start: "20220910T140000Z",
      end: "20220910T150000Z",
    },
    grandprix: {
      start: "20220911T130000Z",
      end: "20220911T150000Z",
    },
  },
  singapore: {
    name: "FORMULA 1 SINGAPORE GRAND PRIX 2022",
    gpName: "Singapore Grand Prix",
    country: "Singapore",
    countryCode: "SG",
    circuitDetails: {
      name: "MARINA BAY STREET CIRCUIT",
      location: "Singapore",
      circuitImage: sg,
      laps: 70,
      lapRecord: {
        time: "1:41.905",
        year: "2018",
        driver: "Kevin Magnussen",
      },
    },
    confirmed: true,
    practice1: {
      start: "20220930T100000Z",
      end: "20220930T110000Z",
    },
    practice2: {
      start: "20220930T133000Z",
      end: "20220930T143000Z",
    },
    practice3: {
      start: "20221001T100000Z",
      end: "20221001T110000Z",
    },
    qualifying: {
      start: "20221001T130000Z",
      end: "20221001T140000Z",
    },
    grandprix: {
      start: "20221002T120000Z",
      end: "20221002T140000Z",
    },
  },
  japan: {
    name: "FORMULA 1 JAPANESE GRAND PRIX 2022",
    gpName: "Japanese Grand Prix",
    country: "Japan",
    countryCode: "JP",
    circuitDetails: {
      name: "SUZUKA INTERNATIONAL RACING COURSE",
      location: "Suzuka",
      circuitImage: suzuka,
      laps: 53,
      lapRecord: {
        time: "1:30.983",
        year: "2019",
        driver: "Lewis Hamilton",
      },
    },
    confirmed: true,
    practice1: {
      start: "20221007T040000Z",
      end: "20221007T050000Z",
    },
    practice2: {
      start: "20221007T080000Z",
      end: "20221007T090000Z",
    },
    practice3: {
      start: "20221008T040000Z",
      end: "20221008T050000Z",
    },
    qualifying: {
      start: "20221008T070000Z",
      end: "20221008T080000Z",
    },
    grandprix: {
      start: "20221009T050000Z",
      end: "20221009T070000Z",
    },
  },
  usa2: {
    name: "FORMULA 1 ARAMCO UNITED STATES GRAND PRIX 2022",
    gpName: "United States Grand Prix",
    country: "USA",
    countryCode: "US",
    circuitDetails: {
      name: "CIRCUIT OF THE AMERICAS",
      location: "Austin",
      circuitImage: austin,
      laps: 56,
      lapRecord: {
        time: "1:36.169",
        year: "2019",
        driver: "Charles Leclerc",
      },
    },
    confirmed: true,
    practice1: {
      start: "20221021T190000Z",
      end: "20221021T200000Z",
    },
    practice2: {
      start: "20221021T220000Z",
      end: "20221021T230000Z",
    },
    practice3: {
      start: "20221022T190000Z",
      end: "20221022T200000Z",
    },
    qualifying: {
      start: "20221022T220000Z",
      end: "20221022T230000Z",
    },
    grandprix: {
      start: "20221023T190000Z",
      end: "20221023T210000Z",
    },
  },
  mexico: {
    name: "FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2022",
    gpName: "Mexico City Grand Prix",
    country: "Mexico",
    countryCode: "MX",
    circuitDetails: {
      name: "AUTÓDROMO HERMANOS RODRÍGUEZ",
      location: "Mexico City",
      circuitImage: mexico,
      laps: 71,
      lapRecord: {
        time: "1:17.774",
        year: "2021",
        driver: "Valtteri Bottas",
      },
    },
    confirmed: true,
    practice1: {
      start: "20221028T180000Z",
      end: "20221028T190000Z",
    },
    practice2: {
      start: "20221028T210000Z",
      end: "20221028T220000Z",
    },
    practice3: {
      start: "20221029T170000Z",
      end: "20221029T180000Z",
    },
    qualifying: {
      start: "20221029T200000Z",
      end: "20221029T210000Z",
    },
    grandprix: {
      start: "20221030T200000Z",
      end: "20221030T220000Z",
    },
  },
  brazil: {
    name: "FORMULA 1 HEINEKEN GRANDE PRÊMIO DE SÃO PAULO 2022",
    gpName: "Brazilian Grand Prix",
    country: "Brazil",
    countryCode: "BR",
    circuitDetails: {
      name: "AUTÓDROMO JOSÉ CARLOS PACE",
      location: "Sao Paulo",
      circuitImage: brazil,
      laps: 71,
      lapRecord: {
        time: "1:10.540",
        year: "2018",
        driver: "Valtteri Bottas",
      },
    },
    confirmed: true,
    practice1: {
      start: "20221111T160000Z",
      end: "20221111T170000Z",
    },
    practice2: {
      start: "20221112T160000Z",
      end: "20221112T170000Z",
    },
    practice3: {
      start: "20221112T200000Z",
      end: "20221112T200000Z",
    },
    qualifying: {
      start: "20221112T190000Z",
      end: "20221112T200000Z",
    },
    grandprix: {
      start: "20221113T180000Z",
      end: "20221113T200000Z",
    },
  },
  abudhabi: {
    name: "FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2022",
    gpName: "Abu Dhabi Grand Prix",
    country: "UAE",
    countryCode: "AE",
    circuitDetails: {
      name: "Abu Dhabi Grand Prix",
      location: "Yas Marina",
      circuitImage: abu,
      laps: 58,
      lapRecord: {
        time: "1:26.103",
        year: "2021",
        driver: "Max Verstappen",
      },
    },
    confirmed: true,
    practice1: {
      start: "20221118T100000Z",
      end: "20221118T110000Z",
    },
    practice2: {
      start: "20221118T130000Z",
      end: "20221118T140000Z",
    },
    practice3: {
      start: "20221119T110000Z",
      end: "20221119T120000Z",
    },
    qualifying: {
      start: "20221119T140000Z",
      end: "20221119T150000Z",
    },
    grandprix: {
      start: "20221120T130000Z",
      end: "20221120T150000Z",
    },
  },
};

function App({ current }) {
  const [currentRaceID, setCurrentRaceID] = useState(null);
  const [nextRaceID, setNextRaceID] = useState(null);

  const { width } = useWindowDimensions();

  const getIDofCurrentRace = (next = false) => {
    const currentDate = new Date(new Date().toISOString());
    for (let race in raceDetails) {
      const year = raceDetails[race].practice1.start.substring(0, 4);
      const month = raceDetails[race].practice1.start.substring(4, 6);
      const date = raceDetails[race].practice1.start.substring(6, 8);
      const HH = raceDetails[race].practice1.start.substring(9, 11);
      const mm = raceDetails[race].practice1.start.substring(11, 13);
      const dateString = new Date(Date.UTC(year, month - 1, date, HH, mm));
      const daysLeft = (dateString - currentDate) / (1000 * 60 * 60 * 24);
      // find ongoing race
      if (!next) {
        if (daysLeft > -3 && daysLeft < 1) {
          // console.log("Found the current race");
          const raceID = raceDetails[race].gpName.replaceAll(" ", "");
          // console.log(raceID);
          setCurrentRaceID(raceID);
          break;
        }
      } else {
        // find upcoming race
        if (daysLeft > 0) {
          // console.log("Found the next upcoming race");
          const raceID = raceDetails[race].gpName.replaceAll(" ", "");
          // console.log(raceID);
          setNextRaceID(raceID);
          break;
        }
      }
    }
  };

  useEffect(() => {
    getIDofCurrentRace();
    getIDofCurrentRace(true);
    if (current === "true") {
      // console.log("Focussing to the current race");
      // console.log(currentRaceID);
      if (currentRaceID != null) {
        document
          .getElementById(currentRaceID)
          .scrollIntoView({ top: 0, behavior: "smooth" });
      }
    }
  }, [currentRaceID, nextRaceID, current]);

  return (
    <div className="App">
      <Header />
      <nav>
        {/* <div className="grid grid-cols-6">
          {Object.keys(raceDetails).map((key) => (
            <div className="shrink-0 snap-center" key={key}>
              <a
                href={`#${raceDetails[key].gpName.replaceAll(" ", "")}`}
                title={raceDetails[key].gpName}
              >
                {raceDetails[key].gpName}
              </a>
            </div>
          ))}
        </div> */}
        {currentRaceID !== null ? (
          <button
            type="button"
            title="Current Race"
            className="event__link"
            onClick={() => {
              document
                .getElementById(currentRaceID)
                .scrollIntoView({ top: 0, behavior: "auto" });
            }}
          >
            Current Race
          </button>
        ) : null}
        {nextRaceID !== null ? (
          <button
            type="button"
            title="Next Race"
            className="event__link"
            onClick={() => {
              document
                .getElementById(nextRaceID)
                .scrollIntoView({ top: 0, behavior: "auto" });
            }}
          >
            Next Race
          </button>
        ) : null}
      </nav>
      {width > 1200 ? (
        <div className="grid grid-cols-3 ml-10 mr-10">
          {Object.keys(raceDetails).map((key) => (
            <ScheduleComponent
              raceDetails={raceDetails[key]}
              key={key}
              currentRaceID={currentRaceID}
            />
          ))}
        </div>
      ) : (
        <div className="flex overflow-x-auto gap-1 snap-x snap-mandatory before:w-[1vw] before:shrink-0 after:w-[10vw] after:shrink-0">
          {Object.keys(raceDetails).map((key) => (
            <ScheduleComponent
              raceDetails={raceDetails[key]}
              key={key}
              currentRaceID={currentRaceID}
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
