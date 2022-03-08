import logo from "./logo.svg";
import "./App.css";
import ScheduleComponent from "./ScheduleComponent";

const raceDetails = {
  bahrain: {
    name: "FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2022",
    gpName: "Bahrain Grand Prix",
    track: "BAHRAIN INTERNATIONAL CIRCUIT",
    location: "Sakhir",
    country: "Bahrain",
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
    track: "JEDDAH CORNICHE CIRCUIT",
    location: "Jeddah",
    country: "Saudi Arabia",
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
    track: "MELBOURNE GRAND PRIX CIRCUIT",
    location: "Melbourne",
    country: "Australia",
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
    track: "AUTODROMO ENZO E DINO FERRARI",
    location: "Imola",
    country: "Italy",
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
    track: "MIAMI INTERNATIONAL AUTODROME",
    location: "Miami",
    country: "USA",
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
    track: "CIRCUIT DE BARCELONA-CATALUNYA",
    location: "Catalunya",
    country: "Spain",
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
    track: "CIRCUIT DE MONACO",
    location: "Monte Carlo",
    country: "Monaco",
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
    track: "BAKU CITY CIRCUIT",
    location: "Baku",
    country: "Azerbaijan",
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
    track: "CIRCUIT GILLES-VILLENEUVE",
    location: "Montreal",
    country: "Canada",
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
    track: "SILVERSTONE CIRCUIT",
    location: "Silverstone",
    country: "Britain",
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
    track: "RED BULL RING",
    location: "Spielberg",
    country: "Austria",
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
    track: "CIRCUIT PAUL RICARD",
    location: "Paul Ricard",
    country: "France",
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
    track: "CIRCUIT DE SPA-FRANCORCHAMPS",
    location: "Spa-Francorchamps",
    country: "Belgium",
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
    track: "CIRCUIT ZANDVOORT",
    location: "Zandvoort",
    country: "Netherlands",
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
    track: "AUTODROMO NAZIONALE MONZA",
    location: "Monza",
    country: "Italy",
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
    track: "MARINA BAY STREET CIRCUIT",
    location: "Singapore",
    country: "Singapore",
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
    track: "SUZUKA INTERNATIONAL RACING COURSE",
    location: "Suzuka",
    country: "Japan",
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
    track: "CIRCUIT OF THE AMERICAS",
    location: "Austin",
    country: "USA",
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
    track: "AUTÓDROMO HERMANOS RODRÍGUEZ",
    location: "Mexico City",
    country: "Mexico",
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
    track: "AUTÓDROMO JOSÉ CARLOS PACE",
    location: "Sao Paulo",
    country: "Brazil",
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
    track: "YAS MARINA CIRCUIT",
    location: "Yas Marina",
    country: "Abu Dhabi",
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

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {Object.keys(raceDetails).map((key) => (
          <ScheduleComponent raceDetails={raceDetails[key]} key={key} />
        ))}
      </div>
    </div>
  );
}

export default App;
