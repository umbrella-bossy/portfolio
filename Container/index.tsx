import { memo, useEffect, useState } from "react";
import "./index.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import About from "./layout/About";



const Container = () =>
{
    const [size, setSize] = useState({width: innerWidth, height: innerHeight});
    const [position, setPosition] = useState({x: 0, y: 0});
    const [scrollTop, setScrollTop] = useState(0);


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
            onScroll={(event) =>
            {
                setScrollTop(event.currentTarget.scrollTop);
            }}
        >
            <Header/>
            <Main
                position={position}
                scrollTop={scrollTop}
            />
            <About/>
        </div>
    );
};



export default memo(Container);