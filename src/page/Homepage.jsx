//Header components
import HeaderWithResponsive from "../components/Layouts/Header/HeaderWithResponsive";


//Main components
import JumboTron from "../components/Layouts/Main/JumboTron";
import MySkills from "../components/Layouts/Main/MySkills";
import AboutMe from "../components/Layouts/Main/AboutMe";
import MyProject from "../components/Layouts/Main/MyProject";

export default function Homepage() {
    return (
        <>
            <HeaderWithResponsive />
            <JumboTron />
            <MySkills />
            <AboutMe />
            <MyProject />
        </>
    )
}
