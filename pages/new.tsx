import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { Controlled as CodeMirror } from 'react-codemirror2'

import newStyle from '../styles/New.module.css';

const New: React.FC = () => {
    const router = useRouter();
    const [openRightBar, setOpenRightBar] = useState<boolean>(true);
    return (
        <div className={newStyle.new}>
            <Head>
                <title>autumn | new</title>
            </Head>

            <div className={newStyle.back} onClick={() => router.back()}>
                ←
            </div>

            <Editor />

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
                        transition={{ duration: .3 }}
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
            <Image
                src={imgSrc}
                alt={title}
                width={16}
                height={16}
            />
            <motion.p
                animate={{
                    display: open ? 'block' : 'none'
                }}>
                {title}</motion.p>
        </div>
    )
}

interface EditorProp { }
const Editor: React.FC<EditorProp> = () => {
    const [code, setCode] = useState<string>('');
    return (
        <div id="editor" className={newStyle.editor}>
            <CodeMirror
                onBeforeChange={(editor, data, val) => {
                    setCode(val);
                }}
                value={code}
                onChange={(editor, data, val) => {
                    setCode(val);
                }}
                options={{
                    lineNumbers: true,
                    mode: 'javascript'
                }}
            />
        </div>
    )
}


export default New;