import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Admissions",
      
    },
    {
      id: 2,
      day: "departments",
      
    },
    {
      id: 3,
      day: "facilities",
      
    },
    {
      id: 4,
      day: "student life",
      
    },
    {
      id: 5,
      day: "research",
     
    },
    {
      id: 6,
      day: "Alumini",
      
    },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            <img src="/book.png" alt="logo" className="logo-img"/>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Admission</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Academic</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>999-999-9999</span>
            </div>
            <div>
              <MdEmail />
              <span>Haipme@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>uiliu, uzbakistan</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;