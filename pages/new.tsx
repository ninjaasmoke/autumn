import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AceEditor from "react-ace";

import newStyle from '../styles/New.module.css';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-nord_dark";

const New: React.FC = () => {
    const [openRightBar, setOpenRightBar] = useState<boolean>(true);
    return (
        <div className={newStyle.new}>
            <Head>
                <title>autumn | new</title>
            </Head>

            <EditorElem />

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

interface EditorProps { }
const EditorElem: React.FC<EditorProps> = () => {
    return (
        <div className={newStyle.editorWrapper}>
            <div className={newStyle.editorPadding}>
               <div className={newStyle.topBar}>
                   <div className={newStyle.topButtons}>
                       <div className={newStyle.topBarButton} style={{backgroundColor: "rgb(196, 5, 5)"}} />
                       <div className={newStyle.topBarButton} style={{backgroundColor: "rgb(255, 217, 0)"}} />
                       <div className={newStyle.topBarButton} style={{backgroundColor: "rgb(22, 209, 84)"}} />
                   </div>
                   <input type="text" name="filename" id="filename" className={newStyle.filename} placeholder="Untitled" autoComplete="off" autoFocus={false} autoCorrect="off" />
                   <div className={newStyle.topBuffer}></div>
               </div>
                <AceEditor
                    placeholder="Type something..."
                    mode="javascript"
                    theme="nord_dark"
                    name="blah2"
                    width="912px"
                    height="480px"
                    className={newStyle.editor}
                    style={{
                        padding: '12px 0px'
                    }}
                    fontSize={14}
                    showPrintMargin={false}
                    showGutter={false}                                    
                    highlightActiveLine={false}
                    value={`
    function hello() {
        console.log("Hello World!");
    }`}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        tabSize: 4,
                    }} />
            </div>
        </div>
    );
}


export default New;