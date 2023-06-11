import React from 'react';


// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

export default function Header() {
    return (
        <header className="header" id="myHeader">
            <div className="header-titlebox">
                <h2>Golf Scorecard</h2>
            </div>
        </header>
    )
}
