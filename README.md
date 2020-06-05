# React-Portfolio

### DEPLOYED LINK:


## Introduction 
The react portfolio was created with Reactjs, a javavscript framework that is declarable, component based, and easy to use. The components on this application are all stateless and function, i.e they do not manage state. The app consists of the Navbar component, the About Page, the Portofolio page that is built with the Portfolio card component, the HomePage, and a Footer which contains the Social Component. 
The portfolio sites gives the visitor a list of skills and projects completed by me. It stays up to date as my skill set improves and increases. For a glance of the application home page, please see photo below. 


## App Photos

![app](https://github.com/Jules-Boogie/react-portfolio/blob/master/FRONTEND/portfolio/Capture.PNG)

## Technology Used
| [React](https://reactjs.org/)                |   A declarative, component based Javascript library for building interactive user interface                 |
| [Bootstrap](https://reactjs.org/)                |  Front-end open-source design toolkit                |





## Code Snippet
The code below illustrates how a Single Page Application(SPA) such as React renders different pages to the DOM. 
```
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

<Router>
    <div  >
        <Navbar />
        <Switch>
          <main style={style} >
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
          </main>
          
        </Switch>
        <Footer/>
    </div>
  </Router>

```
## Clone Repository
 - Clone this repo to your local machine using ```git@github.com:Jules-Boogie/react-portfolio.git ``` with terminal in the directory of your choice. 



## Installation Procedures
create application with 
```
npx create-react-app react-portfolio
```

install dependencies:
```
npm install react
npm install react-bootstrap
npm install react-router-dom
```






**Author:**
Juliet George

**Contact:**
[LinkedIn](https://www.linkedin.com/in/juliet-george-864950b8/)


