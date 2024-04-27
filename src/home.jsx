import React from "react";
import TypeWriterEffect from 'react-typewriter-effect'
import './home.css';



const HomePage = () =>{


    return(

        <div className="Home">
        <br></br>
        <br></br>

        <TypeWriterEffect
        textStyle={{
          fontFamily: 'sans-serif',
          color: 'White',
          fontWeight: 'bold',
          fontSize: '2em',
        }}
        startDelay={300}
        cursorColor="white"
        text="Let's Learn about Racial Disparities in the legal system ❗️❗️"
        typeSpeed={50}
      />
       <br></br>

  
       

        <img className = "home-img" 
        alt ="image" 
        src="https://www.judges.org/wp-content/uploads/2020/06/demonstration-show-me-climate-protection-strike-protest-crowd-demokratie-protests-human.jpg" 
        />

    

        /*  Image from: https://www.judges.org */


            
        <br></br>

        <h2 className="first-header">What obstacles do People of Color Face in the legal system?</h2>
        <ul className="list">
        
        <li><h3 className="text-list">{
        <TypeWriterEffect
        textStyle={{
          fontFamily: 'sans-serif',
          color: 'White',
          fontWeight: 'bold',
          fontStyle: 'italic',
          fontSize: '20px',
        }}
        startDelay={6500}
        cursorColor="white"
        text="Racially Profiled"
        typeSpeed={50}/>}
        </h3></li>

        <li><h3 className="text-list">{
        <TypeWriterEffect
        textStyle={{
          fontFamily: 'sans-serif',
          color: 'White',
          fontWeight: 'bold',
          fontStyle: 'italic',
          fontSize: '20px',
        }}
        startDelay={8000}
        cursorColor="white"
        text="Face Harsher Arrest"
        typeSpeed={50}
        />}
        </h3></li>
            
            
        <li><p className="text-list">
                
        <TypeWriterEffect
        textStyle={{
          fontFamily: 'sans-serif',
          color: 'White',
          fontWeight: 'bold',
          fontStyle: 'italic',
          fontSize: '20px',
        }}
        startDelay={9000}
        cursorColor="white"
        text="Harsher sentencing"
        typeSpeed={50}
        />    
        </p></li>



        <li><h3 className="text-list">{
                <TypeWriterEffect
                textStyle={{
                  fontFamily: 'sans-serif',
                  color: 'White',
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  fontSize: '20px',
                }}
                startDelay={10000}
                cursorColor="white"
                text="Lack of legal representation due to economic inequality "
                typeSpeed={50}
              />

            }</h3></li>
            
        </ul>



        <br></br>







        <img className = "home-img" 
        alt ="image" 
        src="https://www.aristotle.com/wp-content/uploads/2022/05/pexels-markus-spiske-2990644.jpg" 
        />

        /* Image from: www.aristotle.com */

            
        <h2 className="second-header">What can we do to solve this issue?</h2>

            

        

        <div className="what">
        <ul>
       <li><h3 className="text-list"> Use our voice to raise awareness and advocate for change.
        </h3></li>




        




        <li><h3 className="text-list">Use your privilege to support and uplift marginalized voices.
        </h3></li>



        <li><h3 className="text-list">
        Hold law enforcement, courts, and policymakers accountable for their practices and policies.
        </h3></li>




        </ul>
        </div>




        


        


        </div>

    );

}


export default HomePage;
