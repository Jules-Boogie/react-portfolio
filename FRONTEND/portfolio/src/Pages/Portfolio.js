import React from 'react'
import ProjectCard from "../Components/PortFolioCard/Card"
import test from "../../public/assets"


function portfolioPage(){


    const Projects =[
        {
            Title:"Password Generator",
            Image:"../../public/assets/password.PNG",
            deployedLink:"https://jules-boogie.github.io/password-generator/",
            Gitlink:"https://github.com/Jules-Boogie/password-generator",
        },
        {
            Title:"Timed Code Quiz",
            Image:"../../public/assets/Capture.PNG",
            deployedLink:"https://jules-boogie.github.io/code-quiz/main.html",
            Gitlink:"https://github.com/Jules-Boogie/code-quiz",
        },
        {
            Title:"Work-Day Planner",
            Image:"../../public/assets/wordday.PNG",
            deployedLink:"https://jules-boogie.github.io/work-day-scheduler/",
            Gitlink:"https://github.com/Jules-Boogie/work-day-scheduler",
        },
        {
            Title:"Covid-19 Tracker",
            Image:"../../public/assets/covid 19.png",
            deployedLink:"https://jules-boogie.github.io/covid19-tracker/",
            Gitlink:"https://github.com/Jules-Boogie/covid19-tracker",
        },
        {
            Title:"Weather Dashboard",
            Image:"../../public/assets/Capture1.PNG",
            deployedLink:"https://jules-boogie.github.io/weather-dashboard/",
            Gitlink:"https://github.com/Jules-Boogie/weather-dashboard",
        },
        {
            Title:"ReadMe Generator",
            Image:"https://github.com/Jules-Boogie/readme-generator/blob/master/Develop/Capture.PNG?raw=true",
            deployedLink:"#",
            Gitlink:"https://github.com/Jules-Boogie/readme-generator",
        },
        {
            Title:"Employee Summary",
            Image:"https://github.com/Jules-Boogie/employee-summary/blob/master/Assets/Capture.PNG?raw=true",
            deployedLink:"#",
            Gitlink:"https://github.com/Jules-Boogie/employee-summary",
        },
        {
            Title:"Note Taker",
            Image:"https://github.com/Jules-Boogie/notetaker/blob/master/public/assets/Capture.PNG?raw=true",
            deployedLink:"https://jg-notetaker.herokuapp.com/",
            Gitlink:"https://github.com/Jules-Boogie/notetaker",
        },
        {
            Title:"Employee Tracker - Nodejs",
            Image:"https://github.com/Jules-Boogie/Employee-Tracker/blob/master/Assets/Capture1.PNG?raw=true",
            deployedLink:"#",
            Gitlink:"https://github.com/Jules-Boogie/Employee-Tracker",
        },
        {
            Title:"ThriftStore",
            Image:"https://github.com/Jules-Boogie/thrift-store/blob/master/assets/Capture.PNG?raw=true",
            deployedLink:"https://thrift-store.herokuapp.com/",
            Gitlink:"https://github.com/Jules-Boogie/thrift-store",
        },
        {
            Title:"JobTrek",
            Image:"https://github.com/Jules-Boogie/P2-JobTrek/blob/master/assets/Capture.PNG",
            deployedLink:"https://jobtrek.herokuapp.com/",
            Gitlink:"https://github.com/Jules-Boogie/P2-JobTrek",
        },
        {
            Title:"Fitness Tracker",
            Image:"../../public/assets",
            deployedLink:"",
            Gitlink:"https://github.com/Jules-Boogie/fitness-tracker",
        },
        {
            Title:"Employee Directory",
            Image:"https://github.com/Jules-Boogie/employee-directory/blob/master/public/usersbyname.PNG?raw=true",
            deployedLink:"https://jules-boogie.github.io/employee-directory/",
            Gitlink:"https://github.com/Jules-Boogie/employee-directory",
        },
        {
            Title:"Savoire Faire-Clothing Store",
            Image:"",
            deployedLink:"",
            Gitlink:"https://github.com/Jules-Boogie/savoir-faire",
        },
        {
            Title:"Mern Book Search API",
            Image:"https://github.com/Jules-Boogie/Books-API/blob/master/assets/Capture.PNG?raw=true",
            deployedLink:"",
            Gitlink:"https://github.com/Jules-Boogie/Books-API",
        },

    ];
    


    return (

        <ProjectCard projects={Projects}
        />


    )
}


export default portfolioPage;