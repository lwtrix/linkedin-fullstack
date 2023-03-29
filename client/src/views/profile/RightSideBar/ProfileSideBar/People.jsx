import React from "react";
import "./people.css";
import { Person } from "./Person";
export const People = () => {
  return (
    <div className="peopleBody">
      <p>People you may know</p>

      <Person
        name="Tomasz Bednarz"
        description="HR Partner / Specjalista ds. Rekrutacji IT"
        imagen="https://media.licdn.com/dms/image/C5603AQHNNcd44gOK9Q/profile-displayphoto-shrink_200_200/0/1517507293764?e=1676505600&v=beta&t=dqfxEcTlpZiARA6-rtmQpnFMlkCpYIeMnqXGUubjsOU"
      />
      <div className="someBorder">
        <Person
          name="Marta Ziółkowska"
          description="HR || People Partner at OpsTalent"
          imagen="https://media.licdn.com/dms/image/C4D03AQHH5PrY_q18uQ/profile-displayphoto-shrink_200_200/0/1595113064529?e=1676505600&v=beta&t=AcC4ZnTB-sKgJg6-D5rmppi-7Rfgd41cFECbDL4LTNU"
        />
      </div>
      <div className="someBorder">
        <Person
          name="Sara Dudek"
          description="Doradca finansowy w Green Finance"
          imagen="https://media.licdn.com/dms/image/C5603AQHw8vDgw9NDkw/profile-displayphoto-shrink_200_200/0/1586871055279?e=1676505600&v=beta&t=1DNniOc77ENrFz2-9H2Wlk9tOVdbSkDqrnhdUOfmF4Q"
        />
      </div>
      <div className="someBorder">
        <Person
          name="Bill Gates"
          description="Co-chair, Bill & Melinda Gates FoundationCo"
          imagen="https://media.licdn.com/dms/image/C5603AQERTD_EeJiGlA/profile-displayphoto-shrink_200_200/0/1661816468423?e=1676505600&v=beta&t=tgsB0jL9Gg28LgWJdrxKcL7mn5XkpoMrSrOcbrGKfiM"
        />
      </div>
    </div>
  );
};
