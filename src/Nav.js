import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []); 

    return ( 
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
                <img 
                    className='nav_logo'
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
                    alt='' 
                />
                
                <img 
                    className='nav_avatar'
                    src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQHBhITBxIQExIUEBASFRIRDRUPDxUQFRIWFxUWExUYHSggGBolGxUVITEhJSorLi4uFx8zODMtNygtLisBCgoKDg0ODw8PDysZFR0rKysrKzctKy0tKzc3KystKys3KysrKystKystKy0rKystKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAQADAQEAAAAAAAAAAAAABQQBAwYCB//EADYQAQABAwEEBggGAgMAAAAAAAABAgQRAwUhMVESIkFxgcETIzJhcqGx0RQzQpGS4TRSJGKC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD9LyZBpkyZADJkAMmQAyZADJkAMmQAyZADJkAMmQAyZADJkAMmQAyZADIAAAAAAAAAAERmdwDRoWVev7MYjnO6G+y2fGnGdbfVy7Ib01cT9LZcR+ZMz3boaKLOijhTHjvaBFdfoKf9af4w6dWwo1I4YnnG5qAefurabbUxXw7J7JdL0F3ofiNGYnj2TylM1NmV0x1Zpn5S1qMQ5qpmirFUYnlLgQAAAAAAAAAAAAAAAAAAU9k2366/D7ptFPTriKeMzEPR6dEaenEU8IjBVj6AZUAAAAABmvbWLjT3e1HCfKUKYxO96ZG2tpdC4zH6o+cLErEAqAAAAAAAAAAAAAAAANWzKOndx7syuJGx49fV8PmrpVgAigAAAAACftiPU0z7/JQYdr/4v/qCCOA0yAAAAAAAAAAAAAAAAobG/Nq7o+qsjbInFzPvplZSrABFAAAAAAGHa8/8aPihuTtsz6qnvn6EEoBpkAAAAAAAAAAAAAAABW2baRTRFc5zP7YUHRYzmzo+GPk72WgAAAAAAABnu7WLmnrTMTGcNADzMxid4+tac61XxT9Xy0yAAAAAAAAAAAAAAAAs7Jr6VrjlMx5tqFYXP4bV63szx+63RXGpTmicxPalWPoBFAAAAAAHzqV+j05meyJl9JW0r2K6ejoznnPZ3AnceIDTIAAAAAAAAAAAAAAAAr7Ir6VvMcp+qQ2bK1fR3GJ/VGPHsKq0AyoAAAAADquq/R29U+6f3eeV9r6vR0YpjjM/KEhqJQAQAAAAAAAAAAAAAAAAInE7gBcsbr8Rp9b2o4/dqefsv8ujH+z0CVYAIoAA+NXUjS05mvhD7T9sx6mn4vIE251p19WaqvCOUOsGmQAAAAAAAAAAAAAAAAAAAGnZsZvafGfkuo+yKM3Ezyp+qwlWACKAAMW1oza91UNrPf0dO0q7s/sCCA0yAAAAAAAAAAAAAAAAAAFMdKcU755Q029lVr8IxHOfKFW1tKbeOrvnnPE1XFjbfh9HrcZ3z9mkGVAAAAHExmN7kBBvbabbU/6zwnyZ3pK6I1KcVxmEy52ZMb7ff7p4+ErqYnDmqmaKsVxMTylwqAAAAAAAAAAAAA7re2quJ9XG7nO6FS22fTpb6+tPv4eEGqm29nVr+zGI5zuj+1O3sKdHj1p5z5Q1iaoAgAAAAAAAAAA69bRp1qcakZ+qbcbMmnfob45Tx/tWAeaqp6M4q3T73D0Ovb068esjx7Uy52bVp79LrRy/V/bWowhMYneCAAAAAOaaelVEU8Z3AU09KrFO+VO02bjfcfx7PFosrSLenfvq7Z8oak1ccUx0Y6rkEUAAAAAAAAAAAAAAAAABnubOm4jfunnHH+0e5tqrerr8OyY4S9A+dSiNSnFcZhdHmxpvbX8Nqbt9M8J8pZlQAEFLZGhmZrq7o8016C00/RW1Me75yVY7gGVAAAAAAAAAAAAAAAAAAAAAAdVzo+n0ZifDveemOjOJemQ9pafo7ucduJ+6xKygKjasU+yCVXICKAAAAAAAAAAAAAAAAAAAAAAMG0PzY7vMFgygKj//2Q==' 
                    alt='' 
                />
            </div>
        </div>
    );
}

export default Nav;