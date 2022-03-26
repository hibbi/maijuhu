/**
 * @Author: Liha Leena
 * @Date:   2022-02-28 10:32:27
 * @Last Modified by:   Liha Leena
 * @Last Modified time: 2022-03-08 09:47:56
 */
import Link from 'next/link'
import { CMS_NAME, CMS_URL } from '../lib/constants'
import Navigation from './menu'

const Header = () => {
  return (
    <header className="site__header">
      <p className="site__title">
        <Link href="/">
        <a aria-label="Homepage of Artist Maiju Hukkanen">{CMS_NAME}</a>
        </Link>
        </p>
      <Navigation />
    </header>
  );
};

export default Header;