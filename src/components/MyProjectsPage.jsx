import React from 'react';
import './Project.css';
import ProjectSection from './ProjectSection';
import RockPaperScissors from "../assets/images/rock-paper-scissors.png"
import Sketchpad from "../assets/images/sketchpad.png"
import RyanGodling from "../assets/images/ryan-godling.png"
import NavBar from './NavBar';

function MyProjectsPage() {
  const dataAnalyticsProjects = [
    {
      id: 'hanoi-housing',
      title: 'Predicting Hanoi, Vietnam housing price using Artificial Neural Network (ANN) and Random Forest (RF) models for Regression',
      content: (
        <>
            <p>
                A Kaggle notebook in which I attempted to predict Hanoi - the capital of my homecountry Vietnam - housing price using two regression models: a simple, one layer artifical neural network (ANN) and a simple random forest
                (RF). As noted in the notebook itself, this project is just for me to learn more about various machine learning models and showcase my understanding through something that I am familiar with.
            </p>
            <p>
                The ANN and and RF models perform quite well on the dataset, which contains around 7,000 observations and a large number of variables, with accuracies around 82-83%. One understanding that I have been able to gain after
                the project is that the RF model will be much better for smaller datasets since it is much simpler but gives similar results compared to the much more complex ANN model.
            </p>
            <p>Click <a href="https://www.kaggle.com/code/kwonhoang/predicting-hanoi-housing-price-ann-rf" target="_blank" rel="noreferrer">here</a> to go to the full project page.</p>
        </>
      ),
    },
    {
      id: 'africa-happiness',
      title: "Africa's Journey of Happiness",
      content: (
        <>
            <p>
                This is a joint project by me with two other students at University of New South Wales (UNSW) to compete in an event known as the Tableau Dataviz Hackathon, organized by the UNSW Marketing Analytics Society together with
                the Data School. The goal of the competition is to use data from the <a href="https://worldhappiness.report/" target="_blank" rel="noreferrer">World Happiness Report</a> to showcase knowledge and expertise in processing and visualizing data.
            </p>
            <p>
                Since the topic is open, our team chose to focus on African countries and explore the correlations between happiness and factors like corruption, freedom to make life choices, and social support.Thanks to (mostly) our 
                outstanding design and insights, we won First place in the competition.
            </p>
          <p>Click <a href="https://public.tableau.com/app/profile/hoang.tung.quan/viz/AfricasJourneyofHappiness/Dashboard1" target="_blank" rel="noreferrer">here</a> to go to the full project page.</p>
        </>
      ),
    },
    {
      id: 'comm-2501',
      title: 'COMM 2501 Final Assignment: Africa Happiness Report',
      content: (
        <div className='content-container'>
            <div>
                <p>
                    For term 3 2022 in the University of New South Wales (UNSW) schoolyear, I took a course called COMM2501: Data Visualization and Communication - which teaches students data visualization techniques and tools like R Studio and Tableau.
                    For the final assignment of the course, students were asked to explore and visualize data from any topic and tell a story through them. My topic choice is an old friend - the World Happiness Report, and more specifically data on 
                    the happiness index of African countries.
                </p>
                <p>
                    Unlike the other project with the same topic, this set of visualizations gives a general overview of the happiness situation in Africa and concludes that the reason why African countries are unhappy
                    is simply because of low living standards and low life expectancy.
                </p>
            </div>
            <iframe title='africa-report' src="https://onedrive.live.com/embed?resid=A3DBFDB26C4DBFF%21142&amp;authkey=!AEX0wd_ue52tWec&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1" width="500vh" height="300vh" frameborder="0">This is an embedded <a target="_blank" href="https://office.com" rel="noreferrer">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps" rel="noreferrer">Office</a>.</iframe>
        </div>
      ),
    },
  ];

  const webDevelopmentProjects = [
    {
      id: 'rock-paper-scissors',
      title: 'Rock, Paper, Scissors',
      content: (
        <div className='content-container'>
            <div>
                <p>
                    As a way to improve my skills in computer science (and to put more stuff onto my resume), I decided to follow a friend's advice and follow <a href="https://www.theodinproject.com/" target="_blank" rel="noreferrer">The Odin Project</a> - a website to learn web Development.
                    As I follow the courses, I find that I really like this website and its courses mainly because it offers so many projects to practice my skills and to decorate my GitHub page.
                </p>
                <p>
                    Rock, Paper, Scissors is simply a website to play, well, rock, paper, and scissors. It is a playground for me to practice applying simple JavaScript logics to a website.
                </p>
                <p>
                    Click <a href="https://tungquanhoang.github.io/Rock-Paper-Scissors/" target="_blank" rel="noreferrer">here</a> to play the game.
                </p>
                <p>
                    Click <a href="https://github.com/tungquanhoang/Rock-Paper-Scissors" target="_blank" rel="noreferrer">here</a> to go to the full project page.
                </p>
            </div>
            <img src={RockPaperScissors} width="400vh" alt='rock-paper-scissors'></img>
        </div>
      ),
    },
    {
        id: 'sketchpad-at-home',
        title: 'Sketchpad at Home',
        content: (
            <div className='content-container'>
                <div>
                    <p>
                        Similar to Rock, Paper, Scissors, the Sketchpad at Home is simply a (slightly) worse version of a real drawing board, hence the name (which comes from this <a href="https://knowyourmeme.com/memes/we-have-food-at-home" target="_blank" rel="noreferrer">meme)</a>. The pro is that you can draw
                        in any color you want. The con is that you have to draw with a mouse (unless you have a drawing tablet like a Wacom). To be honest, I quite like this project since I had quite a lot of fun practicing my CSS and JavaScript skills.
                    </p>
                    <p>
                        Click <a href="https://tungquanhoang.github.io/sketch-pad-at-home/" target="_blank" rel="noreferrer">here</a> to try and draw something.
                    </p>
                    <p>
                        Click <a href="https://github.com/tungquanhoang/sketch-pad-at-home" target="_blank" rel="noreferrer">here</a> to go to the full project page.
                    </p>
                </div>
                <img src={Sketchpad} width="400vh" alt='sketchpad'></img>
            </div>
        ),
    },
    {
        id: 'ryan-godling',
        title: 'A Ryan Gosling Subscription',
        content: (
            <div className='content-container'>
                <div>
                    <p>
                        An entry for the Terrible Hackathon 2023 (Sydney). Together with two other ladies, we came up with a (terrible) idea, which is a subscription to the actor Ryan Gosling that is incredibly hard to cancel. The user, after "willingly" subcribe the Ryan Gosling, will have to face 
                        a series of minigames and challenges in order to cancel the subscription. The idea is that the user will be so frustrated that they will not want to cancel the subscription anymore.
                    </p>
                    <p>Click <a href="https://github.com/katherinesutarlim/ryangodling" target="_blank" rel="noreferrer">here</a> to go to the full project page.</p>
                </div>
                <img src={RyanGodling} width="400vh" alt="ryan-godling"></img>
            </div>
        ),
    },
    {
        id: 'grocer-free',
        title: 'Grocer-Free',
        content: (
            <>
                <p>
                    An entry for the Unihack 2022. The idea for the website was originally from me, which is to make a website that help the common people to find the cheapest groceries in their area. At the time, I did not know much about web development so I left most of the work
                    to my very talented friends and only helped with the documentations, styling of the website, and did the pitch myself. Unfortunately, we did not win any prize, but it was still a valuable experience for me as it was the first time I get involved deeply with web development and
                    the MERN stack.
                </p>
                <p>Click <a href="https://github.com/hoangnamtrinh/Grocer-Free" target="_blank" rel="noreferrer">here</a> to go to the full project page.</p>
            </>
        ),
    },
  ];

  return (
    <>
        <NavBar />
        <div id="my-projects">
            <ProjectSection id="data-analytics" title="Data Analytics" projects={dataAnalyticsProjects} />
            <ProjectSection id="web-development" title="Web Development" projects={webDevelopmentProjects} />
        </div>
    </>
  );
}

export default MyProjectsPage;
