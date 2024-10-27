import { memo, useEffect, useState } from "react";
import "./index.css";
import Header from "./layout/Header";
import Main from "./layout/Main";



const Container = () =>
{
    const [size, setSize] = useState({width: innerWidth, height: innerHeight});
    const [position, setPosition] = useState({x: 0, y: 0});


    const resize = () =>
    {
        setSize({
            width: innerWidth,
            height: innerHeight
        });
    };


    useEffect(() =>
    {
        resize();
    },[]);
    onresize = resize;

    
    return (
        <div
            id="container"
            className="container"
            style={{
                width: size.width,
                height: size.height
            }}
            onMouseMove={(event) =>
            {
                setPosition({
                    x: event.clientX - innerWidth / 2,
                    y: event.clientY - innerHeight / 2
                });
            }}
        >
            <Header/>
            <Main
                position={position}
            />
            <div
                style={{
                    zIndex: 99999,
                    position: "relative",
                    backgroundColor: "var(--background)",
                    borderTopWidth: 5,
                    padding: 20
                }}
                id="about"
            >
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
            </div>
        </div>
    );
};



export default memo(Container);