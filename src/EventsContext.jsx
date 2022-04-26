import { createContext, useState } from "react";

export const EventsContext = createContext();

export const EventsProvider = (props) => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "PROJECT 360",
      desc: "Project 360 is a technical event in which the participants have to present the project ideas. Innovative project presentations and idea presentations are to be showcased with the help of ppt.",
      organiser: [
        "Lorem - 9876543210",
        "Lorem - 9876543210",
        "Lorem - 9876543210",
      ],
      Hall: "200",
      posterImg: "./assets/Ad Zap.png",
      timing: "NA",
      date: "6/05/2022",
      tech: "Technical Event",
      criteria:
        "Judgement is precisely based on the rank of scores obtained by the participants.",

      cardLogo: "../../assets/super1.png",
      cardDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore optio itaque ullam excepturi reprehenderit sequi quidem volupta",
      rounds: [""],
    },
    {
      id: 2,
      title: "HUNKY BRAINS",
      desc: "Hunky Brains is to check the participant's cognitive thinking skills aptitude, verbal and reasoning problems within a given time. The participants are required to solve the given simple questions that are related to general aptitude.",

      organiser: [
        "Lorem - 9876543210",
        "Lorem - 9876543210",
        "Lorem - 9876543210",
      ],

      Hall: "200",
      posterImg: "../../assets/img.jpeg",
      timing: "1 pm",
      date: "05/05/2022",
      tech: "Technical Event",
      cardLogo: "../../assets/super1.png",
      cardDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore optio itaque ullam excepturi reprehenderit sequi quidem volupta",
    },
    {
      id: 3,
      title: "Event 3",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      organiser: [
        "Lorem - 9876543210",
        "Lorem - 9876543210",
        "Lorem - 9876543210",
      ],
      Hall: "200",
      posterImg: "../../assets/img.jpeg",
      timing: "1 pm",
      date: "05/05/2022",
      tech: "Technical Event",
      cardLogo: "../../assets/super1.png",
      cardDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore optio itaque ullam excepturi reprehenderit sequi quidem volupta",
    },
    {
      id: 4,
      title: "Event 4",
      desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      organiser: [
        "Lorem - 9876543210",
        "Lorem - 9876543210",
        "Lorem - 9876543210",
      ],
      Hall: "200",
      posterImg: "../../assets/img.jpeg",
      timing: "1 pm",
      date: "05/05/2022",
      tech: "Technical Event",
      cardLogo: "../../assets/super1.png",
      cardDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore optio itaque ullam excepturi reprehenderit sequi quidem volupta",
    },
    {
      id: 5,
      title: "Event 5",
      desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      organiser: [
        "Lorem - 9876543210",
        "Lorem - 9876543210",
        "Lorem - 9876543210",
      ],
      Hall: "200",
      posterImg: "../../assets/img.jpeg",
      timing: "1 pm",
      date: "05/05/2022",
      tech: "Technical Event",
      cardLogo: "../../assets/super1.png",
      cardDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore optio itaque ullam excepturi reprehenderit sequi quidem volupta",
    },
    {
      id: 6,
      title: "Event 6",
      desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      organiser: [
        "Lorem - 9876543210",
        "Lorem - 9876543210",
        "Lorem - 9876543210",
      ],
      Hall: "200",
      posterImg: "../../assets/img.jpeg",
      timing: "1 pm",
      date: "05/05/2022",
      tech: "Technical Event",
      cardLogo: "../../assets/super1.png",
      cardDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore optio itaque ullam excepturi reprehenderit sequi quidem volupta",
    },
  ]);

  return (
    <EventsContext.Provider value={events}>
      {props.children}
    </EventsContext.Provider>
  );
};
