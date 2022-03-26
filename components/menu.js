/**
 * @Author: Liha Leena
 * @Date:   2022-02-28 12:21:43
 * @Last Modified by:   Liha Leena
 * @Last Modified time: 2022-03-08 10:00:40
 */
 import Link from 'next/link'
 import { useRouter } from "next/router";
 import { navLinks } from '../src/queries/Menu'

 const Navigation = () =>  {
  const router = useRouter();
   return (
<nav className="site__navigation" aria-labelledby="mainmenulabel">
  <h2 id="mainmenulabel" className="visually-hidden">Main Menu</h2>
       <ul className="nav__list">
       { navLinks.map((item, index) => (
         <li key={index} className={router.asPath === item.path ? "nav__item_active nav__item" : "nav__item"}>
         <Link href={item.path} passHref>
           <a>{item.name}</a>
         </Link>
         </li>
       ))}
      </ul>
       </nav>
  );
};
export default Navigation;