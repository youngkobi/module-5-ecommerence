import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlights"

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 classname="section__title">
            Why choose <span className="purple"> Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight 
            icon={<FontAwesomeIcon icon="bolt"/>} 
            title = "Easy and Quick"
            para= "Get access to the book you purchased online instanly"
            />
            <Highlight 
            icon={<FontAwesomeIcon icon="book-open"/>} 
            title = "10,000+ Books"
            para= "library has books in all your favorite categories"
            />
            <Highlight 
            icon={<FontAwesomeIcon icon="tags"/>} 
            title = "Affordable"
            para= "Get access to books as litlle as 10$"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights