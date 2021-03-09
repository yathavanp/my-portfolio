import stickImg from "../images/Stick.png";
import somlImg from "../images/soml.png";
import foodbookImg from "../images/foodbook.png";
import todoImg from "../images/todo.png";

const Data = [
  {
    title: "Stick",
    description:
      "A mock Google Keep note-taking web application, saving user data on personalized accounts. On Stick, user accounts use Passport with data stored on MongoDB Cloud Atlas. With Stick's simple and modern UI, take pleasure in jotting your notes!",
    technologies: ["React", "Node.js", "Express", "Passport", "MongoDB"],
    site: "https://stick-note.herokuapp.com/",
    github: "https://github.com/yathavanp/Stick",
    img: "Stick.png",
    imgReact: stickImg,
  },
  {
    title: "Story of My Life",
    description:
      "An anonymous blog posting web application that shares user stories in random order, inspired from Reddit r/FML and Whisper. Story of My Life uses Passport and Google OAuth API to encrypt login information.",
    technologies: ["EJS", "Node.js", "Express", "Passport", "MongoDB"],
    site: "https://dry-retreat-29280.herokuapp.com/",
    github: "https://github.com/yathavanp/Story-of-My-Life",
    img: "soml.png",
    imgReact: somlImg,
  },
  {
    title: "Todo List",
    description:
      "An easily accessible to-do list application right on your browser to help keep track of your daily thoughts. Create your own custom lists and check them off as you go! Designed with Bootstrap alongside custom CSS.",
    technologies: ["EJS", "Node.js", "Express", "MongoDB"],
    site: "https://evening-citadel-89023.herokuapp.com/",
    github: "https://github.com/yathavanp/To-Do-List",
    img: "todo.png",
    imgReact: todoImg,
  },
  {
    title: "Foodbook",
    description:
      "Foodbook like facebook, is a social media application for food enthusiasts! With data being stored on MongoDB Cloud Atlas, users can read or share eachothers recipes, tips and tricks used in the kictchen.",
    technologies: ["EJS", "Node.js", "Express", "MongoDB"],
    site: "https://immense-cliffs-38281.herokuapp.com/",
    github: "https://github.com/yathavanp/Foodbook",
    img: "foodbook.png",
    imgReact: foodbookImg,
  },
];

export default Data;
