
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Dartemiss",
  title: "Hi everyone, I'm Enrique",
  subTitle: emoji("A passionate Game Developer C++ programmer 🚀who enjoys developing and playing fun games. I'm a graduate student of Bachelor's Degree in Computer Science at the Universitat Politècnica de Catalunya (UPC), and currently I'm a student of the Master's Degree in Advanced Programming for AAA Video Games at UPC School."),
  resumeLink: "https://drive.google.com/file/d/1u3fihKdIJ8EduR5g1QmywKfewECLGf4K/view?usp=sharing",
  portfolioLink: "https://drive.google.com/file/d/1KfhenB2OYaMkZHnGeoPcBXQgkAnl5yW_/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Dartemiss",
  linkedin: "https://www.linkedin.com/in/enrique-gonzález-sequeira/",
  gmail: "egonzalezsequeira@gmail.com",
  twitter: "https://twitter.com/RiquiGS"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE GAME DEVELOPER WHO WANTS TO LEARN ALL NEW GAMEPLAY TECHNIQUES",
  skills: [
    "⚡ Develop clear and well-structured C++ code while bearing in mind performance, maintenance and compatibility requirements",
    "⚡ Knowledge of 3D math",
    "⚡ Ability to optimize and debug",
    "⚡ Knowledge of Object Oriented Programming, particulary C++",
    "⚡ Develop all kind of fun and different mechanics"
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "code",
    fontAwesomeClassname: "fas fa-code-branch"
  },
  {
    skillName: "c++",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "git",
    fontAwesomeClassname: "far fa-file-code"
  }
]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "C++ Programming",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Gameplay Programming",
      progressPercentage: "75%"
    },
    {
      Stack: "Engine Programming",
      progressPercentage: "65%"
    },
    {
      Stack: "C# Programming",
      progressPercentage: "60%"
    }

  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Gameplay & Engine C++ Programmer",  
      company: "OnionGalaxy",
      companylogo: require("./assets/images/oniongalaxy.jpg"),
      date: "January 2020 – Present",
      desc: "Developer of our own studio on the AAA Videogames Programming master degree, where I've work on the development of our own engine and the gameplay of the game Twinlight Souls.",
      descBullets: [
        "Developed AI, Undo/Redo, Resource Managment of scenes systems of the Engine",
        "Gameplay of the beat em up Twinlight Souls, warp mechanic, combos."
      ]
    },
    {
      role: "Junior Java Developer",   
      company: "Sopra Steria",
      companylogo: require("./assets/images/sopra-icon.jpg"),
      date: "February 2019 – October 2019",
      desc: "Working on an international project for an important french client (LaPoste), testing and fixing bugs on a TMA team. On this project I have used JIRA for managing all the stages of the bug correction, also I have been managing databases and Java code."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "dartemiss", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "All the projects where I have been working as a gamedev.",
  projects: [
    {
      image: require("./assets/images/lemmings.png"),
      link: "https://github.com/Dartemiss/CloudLemmings",
      description: "Lemmigs 3 : Dragon Witcher",
      divname: "lemmings-div"

    },
    {
      image: require("./assets/images/dragonengine.gif"),
      link: "https://github.com/Dartemiss/DragonEngine",
      description: "Dragon Engine",
      divname: "dragonengine-div"
    },
    {
      image: require("./assets/images/fixitstewie.gif"),
      link: "https://github.com/JorxSS/FixIt-Stewie",
      description: "Fix it Stewie",
      divname: "fixitstewie-div"
    },
    {
      image: require("./assets/images/falloutgo.gif"),
      link: "https://github.com/Dartemiss/Vj-3D-FalloutGO",
      description: "Fallout GO",
      divname: "falloutgo-div"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image:
        "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "For any question or comments don't hesitate to contact me.",
  number: "+34-638165561",
  email_address: "egonzalezsequeira@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
