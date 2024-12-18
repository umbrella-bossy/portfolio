import { memo } from "react";
import "./index.css";



const Main = (
    {
        position,
        scrollTop
    }:
    {
        position: {x: number, y: number},
        scrollTop: number;
    }) =>
{
    return (
        <main
            id="home"
        >
            <div className="vignette"></div>
            <img
                src="/Container/assets/img/background.png"
                className="parallax bg-img"
                style={{
                    transform: `translate(calc(-50% + ${-position.x * 0.3}px), calc(-50% + ${position.y * 0.38}px))`
                }}
            />
            <img
                src="/Container/assets/img/fog_7.png"
                className="parallax fog-7"
                style={{
                    transform: `translate(calc(-50% + ${-position.x * 0.27}px), calc(-50% + ${position.y * 0.32}px))`
                }}
            />
            <img
                src="/Container/assets/img/mountain_10.png"
                className="parallax mountain-10"
                style={{
                    transform: `translate(calc(-50% + ${-position.x * 0.195}px), calc(-50% + ${position.y * 0.305}px))`
                }}
            />
            <img
                src="/Container/assets/img/fog_6.png"
                className="parallax fog-6"
                style={{
                    transform: `translate(calc(-50% + ${-position.x * 0.25}px), calc(-50% + ${position.y * 0.28}px))`
                }}
            />
            <img
                src="/Container/assets/img/mountain_9.png"
                className="parallax mountain-9"
                style={{
                    transform: `translate(calc(-50% + ${-position.x * 0.125}px), calc(-50% + ${position.y * 0.115}px))`
                }}
            />
            <img
                src="/Container/assets/img/mountain_8.png"
                className="parallax mountain-8"
                style={{
                    transform: `translate(calc(-50% + ${-position.x * 0.1}px), calc(-50% + ${position.y * 0.11}px))`
                }}
            />
            <img
                src="/Container/assets/img/fog_5.png"
                className="parallax fog-5"
                style={{
                    transform: `translate(calc(-50% + ${-position.x * 0.16}px), calc(-50% + ${position.y * 0.105}px))`
                }}
            />
            <img
                src="/Container/assets/img/mountain_7.png"
                className="parallax mountain-7"
                style={{
                    transform: `translate(calc(-50% + ${-position.x * 0.1}px), calc(-50% + ${position.y * 0.1}px))`
                }}
            />
            <div
                className="text parallax"
                style={{
                    transform: `translate(calc(-50% + ${-position.x * 0.07}px), calc(-50% + ${position.y * 0.07}px))`,
                    top: `calc(50% - ${130 - scrollTop}px)`,
                }}
            >
                <h2>IBO</h2>
                <h1>Umbrel</h1>
            </div>
            <img
                src="/Container/assets/img/mountain_6.png"
                className="parallax mountain-6"
                style={{
                    transform: `translate(calc(-50% + ${-position.x * 0.065}px), calc(-50% + ${position.y * 0.05}px))`
                }}
            />
            <img
                src="/Container/assets/img/fog_4.png"
                className="parallax fog-4"
                style={{
                    transform: `translate(calc(-50% + ${-position.x * 0.135}px), calc(-50% + ${position.y * 0.04}px))`
                }}
            />
            <img
                src="/Container/assets/img/mountain_5.png"
                className="parallax mountain-5"
                style={{
                    transform: `translate(calc(-50% + ${-position.x * 0.08}px), calc(-50% + ${position.y * 0.02}px))`
                }}
            />
            <img
                src="/Container/assets/img/fog_3.png"
                className="parallax fog-3"
                style={{
                    transform: `translate(calc(-50% + ${-position.x * 0.11}px), calc(-50% + ${position.y * 0.018}px))`
                }}
            />
            <img
                src="/Container/assets/img/mountain_4.png"
                className="parallax mountain-4"
                style={{
                    transform: `translate(calc(-50% + ${-position.x * 0.059}px), calc(-50% + ${position.y * 0.024}px))`
                }}
            />
            <img
                src="/Container/assets/img/mountain_3.png"
                className="parallax mountain-3"
                style={{
                    transform: `translate(calc(-50% + ${-position.x * 0.04}px), calc(-50% + ${position.y * 0.018}px))`
                }}
            />
            <img
                src="/Container/assets/img/fog_2.png"
                className="parallax fog-2"
                style={{
                    transform: `translate(calc(-50% + ${-position.x * 0.15}px), calc(-50% + ${position.y * 0.0115}px))`
                }}
            />
            <img
                src="/Container/assets/img/mountain_2.png"
                className="parallax mountain-2"
                style={{
                    transform: `translate(calc(-50% + ${-position.x * 0.0225}px), calc(-50% + ${position.y * 0.013}px))`
                }}
            />
            <img
                src="/Container/assets/img/mountain_1.png"
                className="parallax mountain-1"
                style={{
                    transform: `translate(calc(-50% + ${-position.x * 0.027}px), calc(-50% + ${position.y * 0.018}px))`
                }}
            />
            <img
                src="/Container/assets/img/sun_rays.png"
                className="sun-rays"
            />
            <img
                src="/Container/assets/img/black_shadow.png"
                className="black-shadow"
            />
            <img
                src="/Container/assets/img/fog_1.png"
                className="parallax fog-1"
                style={{
                    transform: `translate(calc(-50% + ${-position.x * 0.07}px), calc(-50% + ${position.y * 0.01}px))`
                }}
            />
        </main>
    );
};



export default memo(Main);