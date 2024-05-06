export default function Header() {
    return (
        <div>
            <header className="flex justify-between items-center p-8 px-32 text-black">
                <div className="text-3xl">Portfolio</div>
                <div className="flex">
                    <a href="#" className="ml-4">LinkedIn</a>
                    <a href="#" className="ml-4">Email</a>
                </div>
            </header>
        </div>
    );
};