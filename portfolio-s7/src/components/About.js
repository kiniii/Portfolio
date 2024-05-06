export default function About() {
    return (
        <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start p-8 shadow-lg rounded-lg">
          <div className="md:mr-8 mb-4 md:mb-0 w-48 h-48 bg-gray-300 rounded-lg" style={{ backgroundImage: 'url("./pfp.png")', backgroundSize: 'cover', }}></div>
          
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Kinlok Lau</h1>
            <h2 className="text-xl font-semibold mb-4">ICT Media Student</h2>
            <p className="text-lg">bio</p>
          </div>
        </div>
      </div>
    )
}