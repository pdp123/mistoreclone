import React from 'react'
import "../styles/PreNavbar.css"


const car_icon = <svg
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
  fill="currentColor"
/>
<path
  d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
  fill="currentColor"
/>
<path
  d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
  fill="currentColor"
/>
</svg>


const PreNavbar = () => {
  return (
    <div className="preNav">
         <div>
             <a  href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
             <a  href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
             <a  href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span>|</span>
             <a  href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE</a>
         </div>
         <div>
         <a  href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
             <a  href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a> <span>|</span>
             <a  href="https://store.mi.com/in/site/login">{car_icon}CART (0)</a>
         </div>
        
    </div>
  )
}

export default PreNavbar