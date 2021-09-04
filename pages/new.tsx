import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AceEditor from "react-ace";
import Select from 'react-select';
import { toPng } from 'html-to-image';

import newStyle from '../styles/New.module.css';

import "../helper/imports";


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

const themeOptions = [
    { value: "nord_dark", label: "Nord Dark" },
    { value: "idle_fingers", label: "Idle Fingers" },
    { value: "clouds_midnight", label: "Clouds Midnight" },
    { value: "pastel_on_dark", label: "Pastel On Dark" },
    { value: "mono_industrial", label: "Mono Industrial" },
    { value: "terminal", label: "Terminal" },
    { value: "tomorrow", label: "Tomorrow" },
    { value: "twilight", label: "Twilight" },
    { value: "tomorrow_night_eighties", label: "Tomorrow Night Eighties" },
    { value: "gob", label: "Gob" }
];

const bgs = {
    fireandice: "linear-gradient(-45deg, rgb(0, 0, 255), rgb(255, 0, 0))",
    candy: "linear-gradient(125deg, rgb(243, 8, 118), rgb(47, 0, 255))",
    candytoo: "linear-gradient(125deg, #7303c0, #ec38bc)",
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

const bgNames = ["fireandice", "candy", "candytoo", "educate", "pinotnoir", "plain", "royal", "sopink", "teal", "vanessa", "witching", "wine"];

const langOptions = [
    { value: 'cobol', label: 'Cobol', fileExtension: 'cbl' },
    { value: 'coffee', label: 'Coffee', fileExtension: 'coffee' },
    { value: 'csharp', label: 'C#', fileExtension: 'cs' },
    { value: 'css', label: 'CSS', ileExtension: 'css' },
    { value: 'c_cpp', label: 'C & Cpp', fileExtension: 'cpp' },
    { value: 'dart', label: 'Dart', fileExtension: 'dart' },
    { value: 'ejs', label: 'EJS', fileExtension: 'ejs' },
    { value: 'elixir', label: 'Elixir', fileExtension: 'ex' },
    { value: 'fortran', label: 'Fortran', fileExtension: 'f' },
    { value: 'fsharp', label: 'F#', fileExtension: 'fs' },
    { value: 'golang', label: 'Go', fileExtension: 'go' },
    { value: 'html', label: 'HTML', fileExtension: 'html' },
    { value: 'java', label: 'Java', fileExtension: 'java' },
    { value: 'javascript', label: 'JavaScript', fileExtension: 'js' },
    { value: 'json', label: 'JSON', fileExtension: 'json' },
    { value: 'json5', label: 'JSON5', fileExtension: 'json5' },
    { value: 'jsx', label: 'JSX', fileExtension: 'jsx' },
    { value: 'kotlin', label: 'Kotlin', fileExtension: 'kt' },
    { value: 'less', label: 'Less', fileExtension: 'less' },
    { value: 'markdown', label: 'Markdown', fileExtension: 'md' },
    { value: 'matlab', label: 'Matlab', fileExtension: 'm' },
    { value: 'mysql', label: 'MySQL', fileExtension: 'sql' },
    { value: 'objectivec', label: 'Objective-C', fileExtension: 'm' },
    { value: 'pascal', label: 'Pascal', fileExtension: 'pas' },
    { value: 'perl', label: 'Perl', fileExtension: 'pl' },
    { value: 'php', label: 'PHP', fileExtension: 'php' },
    { value: 'plain_text', label: 'Plain Text', fileExtension: 'txt' },
    { value: 'python', label: 'Python', fileExtension: 'py' },
    { value: 'r', label: 'R', fileExtension: 'r' },
    { value: 'ruby', label: 'Ruby', fileExtension: 'rb' },
    { value: 'rust', label: 'Rust', fileExtension: 'rs' },
    { value: 'sass', label: 'Sass', fileExtension: 'sass' },
    { value: 'scala', label: 'Scala', fileExtension: 'scala' },
    { value: 'scss', label: 'SCSS', fileExtension: 'scss' },
    { value: 'sql', label: 'SQL', fileExtension: 'sql' },
    { value: 'swift', label: 'Swift', fileExtension: 'swift' },
    { value: 'tcl', label: 'Tcl', fileExtension: 'tcl' },
    { value: 'text', label: 'Text', fileExtension: 'txt' },
    { value: 'tsx', label: 'TSX', fileExtension: 'tsx' },
    { value: 'typescript', label: 'TypeScript', fileExtension: 'ts' },
    { value: 'vbscript', label: 'VBScript', fileExtension: 'vbs' },
    { value: 'verilog', label: 'Verilog', fileExtension: 'v' },
    { value: 'vhdl', label: 'VHDL', fileExtension: 'vhdl' },
    { value: 'xml', label: 'XML', fileExtension: 'xml' },
    { value: 'yaml', label: 'YAML', fileExtension: 'yaml' },
];

const selectStyle = {
    control: (base: any) => {
        return {
            ...base,
            fontSize: "12px",
            fontWeight: 700,
            backgroundColor: "#242424",
            border: "none",
            borderRadius: "5px",
            "&:hover": {
                border: "none",
                boxShadow: "none",
            },
        }
    },
    input: styles => ({ ...styles, color: "white", fontWeight: 700, fontSize: "12px" }),
    singleValue: (styles) => ({
        ...styles,
        color: "white"
    }),
    option: (styles) => {
        return {
            ...styles,
            color: "black",
            fontSize: "12px",
            fontWeight: 700,
            border: "none",
            outline: "none",
            "&:hover": {
                border: "none",
                boxShadow: "none",
            },
        };
    },
}

const New: React.FC = () => {
    const [openRightBar, setOpenRightBar] = useState<boolean>(true);
    const [edWidth, setEdWidth] = useState<number>(1200);
    const [edHeight, setEdHeight] = useState<number>(720);

    const [code, setCode] = useState<string>(``);

    const [selLang, setSelLang] = useState<any>(langOptions[13]);
    const [selTheme, setSelTheme] = useState<any>(themeOptions[0]);

    const [fileName, setFileName] = useState<string>("untitled." + selLang.fileExtension);

    const [backgroundTheme, setBackgroundTheme] = useState<string>(bgNames[Math.floor(Math.random() * bgNames.length)]);
    return (
        <div className={newStyle.new}>
            <Head>
                <title>autumn | new</title>
            </Head>

            <EditorElem
                edWidth={edWidth}
                edHeight={edHeight}
                background={backgroundTheme}
                code={code}
                setCode={setCode}
                mode={selLang.value}
                theme={selTheme.value}
                ext={selLang.fileExtension}
                fileName={fileName}
                setFileName={setFileName}
            />

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
                        <h5>Background</h5>
                        {bgNames.map((bg, i) => {
                            return (
                                <div key={i} onClick={() => setBackgroundTheme(bg)}
                                    className={newStyle.bgOption}
                                    style={{
                                        background: bgs[bg],
                                        outline: backgroundTheme === bg ? "2px solid #fff" : "none",
                                    }}>
                                    {bg}
                                </div>
                            )
                        })}
                        <h5>Theme</h5>
                        <Select
                            className={newStyle.select}
                            value={selTheme}
                            onChange={(e) => {
                                setSelTheme(e);
                            }}
                            options={themeOptions}
                            styles={selectStyle}
                        />
                        <h5>Language</h5>
                        <Select
                            className={newStyle.select}
                            value={selLang}
                            onChange={(e) => {
                                setSelLang(e);
                                setFileName(fileName.split(".")[0] + "." + e.fileExtension);
                            }}
                            options={langOptions}
                            styles={selectStyle}
                        />
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
    mode: string,
    theme: string,
    ext: string,
    fileName: string,
    setFileName: React.Dispatch<React.SetStateAction<string>>,
}
const EditorElem: React.FC<EditorProps> = ({ edWidth, edHeight, background, code, setCode, mode, theme, ext, fileName, setFileName }) => {
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
                        placeholder={fileName}
                        onChange={(e) => {
                            setFileName(e.target.value);
                        }}
                        value={fileName}
                        onBlur={(e) => {
                            if (!e.target.value.includes(ext)) {
                                setFileName(e.target.value + "." + ext);
                            }
                        }}
                        autoComplete="off"
                        autoFocus={false}
                        spellCheck={false}
                        autoCorrect="off"
                        autoCapitalize="off" />
                    <div className={newStyle.topBuffer}></div>
                </div>
                <AceEditor
                    placeholder="Start typing..."
                    mode={mode}
                    theme={theme}
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
                        enableSnippets: false,
                        showLineNumbers: false,
                        tabSize: 4,
                    }} />
            </div>
        </div>
    );
}


export default New;