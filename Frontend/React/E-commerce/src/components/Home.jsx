import ImageCarousel from "./ImageCarousel";  // Import the ImageCarousel component

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white text-center p-8">
      <h2 className="text-3xl font-bold text-green-600 mb-0">Welcome to the Home Page</h2>
      <div className="w-full h-screen mb-2">
        <ImageCarousel /> 
      </div>
    </div>
  );
};

export default Home;

  