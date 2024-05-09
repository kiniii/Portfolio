export default function About() {
    return (
        <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start p-8">
          <div className="md:mr-8 mb-4 md:mb-0 w-72 h-72 bg-gray-300 rounded-lg" style={{ backgroundImage: 'url("./pfp.png")', backgroundSize: 'cover', }}></div>
          
          <div>
            <h1 className="text-7xl mb-2 text-white font-serif">About me</h1>
            <p className="text-lg text-gray-300">Lorem ipsum</p>
          </div>
        </div>
      </div>
    )
}