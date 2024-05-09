export default function Header() {
    return (
        <div>
            <header className="flex justify-between items-center p-8 px-32 text-black">
                <div className="text-3xl font-serif">Portfolio</div>
                <div className="flex font-serif">
                    <a href="#" className="ml-4">LinkedIn</a>
                    <a href="#" className="ml-4">CV</a>
                    <a href="#" className="ml-4">Instagram</a>
                </div>
            </header>
        </div>
    );
};