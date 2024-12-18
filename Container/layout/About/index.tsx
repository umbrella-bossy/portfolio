import { memo } from "react";
// import { CodeBlock, tomorrowNight } from "react-code-blocks";
import "./style.css";
// import { Paper } from "@mui/material";



const About = () =>
{
    return (
        <div
            id="about"
            className="About"
        >
            <div className="row">
                <div className="photo"></div>
                <div className="info">
                    <div className="name">IBO Umbrel</div>
                    <div className="bio">Passionate self-taught programmer and Software Engineering student with expertise in Frontend and React Native mobile development, plus REST API creation using Java and Node.js. Ready to bring innovative ideas to life.</div>
                </div>
                <div className="skills">
                    <h2
                        style={{
                            fontSize: 40
                        }}
                    >Skills</h2>
                    <div className="box">
                        <div className="skill">Web Development</div>
                        <div className="skill">Mobile Development</div>
                        <div className="skill">Rest API Development</div>
                        <div className="skill">PostgreSQL</div>
                        <div className="skill">JavaScript + Typescript</div>
                        <div className="skill">Java</div>
                        <div className="skill">Python</div>
                        <div className="skill">React</div>
                        <div className="skill">HTML</div>
                        <div className="skill">CSS</div>
                        <div className="skill">React-Native + Expo</div>
                        <div className="skill">Spring Boot Rest API</div>
                        <div className="skill">express.js (Node.js)</div>
                        <div className="skill">Fast API</div>
                        <div className="skill">Flask API</div>
                        <div className="skill">React-Native + Expo</div>
                    </div>
                </div>
                {/* <div className="skills">
                    <h2>Programming Languages</h2>
                    <div className="box">
                        <div className="skill">JavaScript + Typescript</div>
                        <div className="skill">Java</div>
                        <div className="skill">Python</div>
                    </div>
                </div> */}
                {/* <div className="skills">
                    <h2>Web Development</h2>
                    <div className="box">
                        <div className="skill">React</div>
                        <div className="skill">HTML</div>
                        <div className="skill">CSS</div>
                        <div className="skill">React-Native + Expo</div>
                    </div>
                </div>
                <div className="skills">
                    <h2>Rest API Development</h2>
                    <div className="box">
                        <div className="skill">Spring Boot Rest API</div>
                        <div className="skill">express.js (Node.js)</div>
                        <div className="skill">Fast API</div>
                        <div className="skill">Flask API</div>
                    </div>
                </div>
                <div className="skills">
                    <h2>Mobile Development</h2>
                    <div className="box">
                    <div className="skill">React-Native + Expo</div>
                    </div>
                </div> */}
                {/* <CodeBlock
                    language="JavaScript"
                    theme={tomorrowNight}
                    showLineNumbers
                    customStyle={{
                        borderRadius: "5px",
                        paddingRight: "10px",
                    }}
                    text={
`const nick_name = "IBO Umbrel";
const legal_name = "Ibrohimjon Toshtemirov";
const age = 18;
const occupation = "Frontend Engineer";
`}
                /> */}
            </div>
        </div>
    );
};



export default memo(About);