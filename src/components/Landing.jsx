import React from "react";
import UndrawBook from '../assets/Undraw_Books.svg'

const Landing = () => {
return(
<section id="landing">
<header>
<div className="header__container">
<div className="header__description">
    <h1> Americas most awardded online library platform  </h1>
    <h2> Your Dream Book <span className="purple"> Library</span>  </h2>
<a href="#features">
<button className="btn"> Browse Books</button>
</a>
</div>
<figure className="header__img--wrapper">
<img src={UndrawBook} alt="" />
</figure>
</div>
</header>

</section>

)

}

export default Landing