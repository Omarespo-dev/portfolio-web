//Header components
import HeaderWithResponsive from "../components/Layouts/Header/HeaderWithResponsive";

//Main components
import JumboTron from "../components/Layouts/Main/JumboTron";
import MySkills from "../components/Layouts/Main/MySkills";


export default function Homepage() {
    return (
        <>
            <HeaderWithResponsive />
            <JumboTron />
            <MySkills />
        </>
    )
}
