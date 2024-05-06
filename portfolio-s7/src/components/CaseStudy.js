export default function CaseStudy () {
    return (
        <div className="h-screen flex bg-gradient-to-b from-custom_lightblack to-custom_black">
        <div className="md:mr-8 mb-4 md:mb-0 w-48 h-48 bg-gray-300 rounded-lg" style={{ backgroundImage: 'url("./logo192.png")', backgroundSize: 'cover', }}></div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Case Study</h2>
          <h3 className="text-lg font-semibold mb-4">title case study</h3>
          <a className="text-blue-500 underline">Read more</a>
        </div>
      </div>
    );
  };
  