import Header from "./Header";
import ArrowDown from "./ArrowDown";

export default function Homepage() {
    return (
        <div>
            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url("./IMG_2577.png")', backgroundSize: 'cover', }}>
                <Header />
                <div>
                    <ArrowDown />
                </div>
            </div>
        </div>
    );
};