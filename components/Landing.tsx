import { motion } from 'framer-motion';
import React from 'react';
import { useRouter } from 'next/router';
import landingStyle from './Landing.module.css';
import utils from '../styles/utils.module.css';

const Landing: React.FC = () => {
    const router = useRouter();
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.3,
            }
        }
    }
    const slideItem = {
        hidden: {
            opacity: 0,
            y: '24px'
        },
        show: {
            opacity: 1,
            y: '0',
            transition: {
                ease: "easeOut",
            }
        }
    }
    const opItem = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                ease: "easeOut",
            }
        }
    }

    return (
        <div className={landingStyle.landing}>
            <motion.div
                className={landingStyle.landingLeft}
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.div
                    className={landingStyle.head}
                    variants={slideItem}>
                    Beautify code,<br />
                    with <span>Autumn</span>
                </motion.div>
                <motion.div
                    className={landingStyle.deats}
                    variants={slideItem}>
                    Autumn is kind of an online code editor.
                    {/* ⚡  */}
                </motion.div>
                <motion.div
                    className={landingStyle.deats}
                    variants={slideItem}>
                    Code & save images of the code or the code it self!
                </motion.div>
                <div className={landingStyle.btnSpc} />
                <motion.button
                    className={utils.outlinedBtn}
                    variants={opItem}
                    onClick={() => {
                        router.push('/new')
                    }}
                >
                    Get started
                </motion.button>
            </motion.div>
        </div>
    )
}

export default Landing;