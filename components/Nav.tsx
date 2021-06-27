import navstyle from './Nav.module.css';
import { motion } from 'framer-motion';

const Nav: React.FC = () => {
    return (
        <motion.nav
            className={navstyle.nav}
            animate={{ top: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
        >
            <h1>Logo</h1>
        </motion.nav>
    )
}

export default Nav;