import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AceEditor from "react-ace";

import newStyle from '../styles/New.module.css';

import "ace-builds/src-noconflict/mode-javascript";

import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-idle_fingers";
import "ace-builds/src-noconflict/theme-clouds_midnight";
import "ace-builds/src-noconflict/theme-pastel_on_dark";
import "ace-builds/src-noconflict/theme-mono_industrial";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-noconflict/theme-gob";

const bgs = {
    blue: "linear-gradient(125deg, rgb(0, 0, 255), rgb(255, 0, 0))",
    candy: "linear-gradient(125deg, rgb(243, 8, 118), rgb(47, 0, 255))",
    candy2: "linear-gradient(125deg, #7303c0, #ec38bc)",
    candy3: "linear-gradient(125deg, rgb(243, 8, 118), rgb(47, 0, 255))",
    pinotnoir: "linear-gradient(90deg,#4b6cb7,#182848)",
    plain: "linear-gradient(90deg, #141418, #141418)",
    sopink: "linear-gradient(90deg,#ff0084,#33001b)",
    royal: "linear-gradient(90deg,#243B55,#141E30)",
    teal: "linear-gradient(125deg, rgb(0, 194, 194), rgb(0, 50, 80))",
    vanusa: "linear-gradient(125deg, #DA4453, #89216B)",
    witching: "linear-gradient(125deg, #c31432, #3d0000)",
    wine: "linear-gradient(125deg,#b38ac4, #2e033d)",
}

const New: React.FC = () => {
    const [openRightBar, setOpenRightBar] = useState<boolean>(true);
    const [edWidth, setEdWidth] = useState<number>(1200);
    const [edHeight, setEdHeight] = useState<number>(720);

    const [backgroundTheme, setBackgroundTheme] = useState<string>(bgs.vanusa);
    return (
        <div className={newStyle.new}>
            <Head>
                <title>autumn | new</title>
            </Head>

            <EditorElem edWidth={edWidth} edHeight={edHeight} background={backgroundTheme} />

            <motion.div
                className={newStyle.rightBar}
                initial={{ width: "52px" }}
                animate={{ width: openRightBar ? 240 : 52 }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
            >
                <div
                    className={newStyle.rEles}>

                    <div style={{
                        display: openRightBar? "block" : "none",
                    }}>
                        <h4>Background</h4>
                    </div>
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

interface EditorProps {
    edWidth: number,
    edHeight: number,
    background: string,
 }
const EditorElem: React.FC<EditorProps> = ({edWidth, edHeight, background}) => {
    return (
        <div className={newStyle.editorWrapper}
            style={{
                width: edWidth, // 960 -> no padding
                height: edHeight, // 492 -> no padding
                background: background,
            }}
        >
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
                    name="editor"
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