export default function CaseStudy() {
    return (
      <div className="h-screen flex justify-center items-center bg-gradient-to-b from-custom_lightblack to-custom_black">
        <div className="flex items-center space-x-8">
          <div className="w-48 h-48 bg-gray-300 rounded-lg" style={{ backgroundImage: 'url("")', backgroundSize: 'cover' }}></div>
          <div>
            <h2 className="font-serif text-2xl font-bold mb-2 text-white">Case Study</h2>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">title case study</h3>
            <a className="font-serif underline text-white">Read more</a>
          </div>
        </div>
      </div>
    );
  };
  