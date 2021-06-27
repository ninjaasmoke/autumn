import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import newStyle from '../styles/New.module.css';

const New: React.FC = () => {
    const [openRightBar, setOpenRightBar] = useState<boolean>(false);
    return (
        <div className={newStyle.new}>
            <Head>
                <title>autumn | new</title>
            </Head>

            <motion.div
                className={newStyle.rightBar}
                initial={{ width: "52px" }}
                animate={{ width: openRightBar ? 150 : 52 }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
            >
                <div
                    className={newStyle.rEles}>
                    <RightElem imgSrc="/icons/theme.png" title="Theme" open={openRightBar} />
                </div>

                <div className={newStyle.rEle}
                    style={{ padding: '12px 0px' }}
                    onClick={() => setOpenRightBar(!openRightBar)} >
                    <motion.img
                        src="/icons/collapse.png"
                        alt="Collapse"
                        animate={{ rotateZ: openRightBar ? 0 : 180 }}
                    />
                    <motion.p
                        animate={{
                            display: openRightBar ? 'block' : 'none'
                        }}
                    >Collapse</motion.p>
                </div>

            </motion.div>

        </div>
    )
}

interface RightElemProp {
    imgSrc: string,
    title: string,
    open: boolean
}
const RightElem: React.FC<RightElemProp> = ({ imgSrc, title, open }) => {
    return (
        <div className={newStyle.rEle}>
            <img
                src={imgSrc}
                alt="Collapse"
            />
            <motion.p
                animate={{
                    display: open ? 'block' : 'none'
                }}>
                {title}</motion.p>
        </div>
    )
}

const Editor: React.FC = () => (
    <div></div>
)


export default New;