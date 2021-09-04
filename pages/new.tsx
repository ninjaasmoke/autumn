import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AceEditor from "react-ace";

import { toPng } from 'html-to-image';

import newStyle from '../styles/New.module.css';

import "../helper/imports";

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
    fireandice: "linear-gradient(-45deg, rgb(0, 0, 255), rgb(255, 0, 0))",
    candy: "linear-gradient(125deg, rgb(243, 8, 118), rgb(47, 0, 255))",
    candy2: "linear-gradient(125deg, #7303c0, #ec38bc)",
    educate: "linear-gradient(125deg, #0d324d, #7f5a83)",
    pinotnoir: "linear-gradient(90deg,#4b6cb7,#182848)",
    plain: "linear-gradient(90deg, #141418, #141418)",
    royal: "linear-gradient(90deg,#243B55,#141E30)",
    sopink: "linear-gradient(90deg,#ff0084,#33001b)",
    teal: "linear-gradient(125deg, rgb(0, 194, 194), rgb(0, 50, 80))",
    vanessa: "linear-gradient(125deg, #DA4453, #89216B)",
    witching: "linear-gradient(125deg, #c31432, #3d0000)",
    wine: "linear-gradient(125deg,#b38ac4, #2e033d)",
}

const bgNames = ["fireandice", "candy", "candy2", "educate", "pinotnoir", "plain", "royal", "sopink", "teal", "vanessa", "witching", "wine"];

const New: React.FC = () => {
    const [openRightBar, setOpenRightBar] = useState<boolean>(true);
    const [edWidth, setEdWidth] = useState<number>(1200);
    const [edHeight, setEdHeight] = useState<number>(720);

    const [code, setCode] = useState<string>("");

    const [backgroundTheme, setBackgroundTheme] = useState<string>(bgNames[Math.floor(Math.random() * bgNames.length)]);
    return (
        <div className={newStyle.new}>
            <Head>
                <title>autumn | new</title>
            </Head>

            <EditorElem edWidth={edWidth} edHeight={edHeight} background={backgroundTheme} code={code} setCode={setCode} />

            <motion.div
                className={newStyle.rightBar}
                initial={{ width: "52px" }}
                animate={{ width: openRightBar ? 240 : 52 }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
            >
                <div
                    className={newStyle.rEles}>

                    <div style={{
                        display: openRightBar ? "block" : "none",
                    }}>
                        <h4>Background</h4>
                        {bgNames.map((bg, i) => {
                            return (
                                <div key={i} onClick={() => setBackgroundTheme(bg)} className={newStyle.bgOption} style={{
                                    background: bgs[bg],
                                }}>
                                    {bg}
                                </div>
                            )
                        })}
                        <button
                            onClick={() => {
                                var edit = document.getElementById("editor");
                                toPng(edit).then(function (dataUrl) {
                                    var link = document.createElement('a');
                                    link.download = 'autumn-code.png';
                                    link.href = dataUrl;
                                    link.click();
                                })
                            }}
                        >Download</button>
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
    code: string,
    setCode: React.Dispatch<React.SetStateAction<string>>,
}
const EditorElem: React.FC<EditorProps> = ({ edWidth, edHeight, background, code, setCode }) => {
    return (
        <div
            id="editor"
            className={newStyle.editorWrapper}
            style={{
                width: edWidth, // 960 -> no padding
                height: edHeight, // 492 -> no padding
                background: bgs[background],
            }}
        >
            <div className={newStyle.editorPadding}>
                <div className={newStyle.topBar}>
                    <div className={newStyle.topButtons}>
                        <div className={newStyle.topBarButton} style={{ backgroundColor: "rgb(196, 5, 5)" }} />
                        <div className={newStyle.topBarButton} style={{ backgroundColor: "rgb(255, 217, 0)" }} />
                        <div className={newStyle.topBarButton} style={{ backgroundColor: "rgb(22, 209, 84)" }} />
                    </div>
                    <input type="text" name="filename" id="filename"
                        className={newStyle.filename}
                        placeholder="Untitled"
                        autoComplete="off"
                        autoFocus={false}
                        spellCheck={false}
                        autoCorrect="off"
                        autoCapitalize="off" />
                    <div className={newStyle.topBuffer}></div>
                </div>
                <AceEditor
                    placeholder="Start typing..."
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
                    wrapEnabled={true}
                    onChange={(newCode) => setCode(newCode)}
                    value={code}
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