const Card = () => {
  return (
    <div className="mx-auto container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full bg-white p-4">
        <div className="p-6 md:p-10 rounded-xl bg-blue-50">


          <h3 className="mt-4 text-base md:text-xl font-medium text-gray-800">
          Auto-Editing & AI Suggestions
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-600">
          Smart auto-editing that perfects videos through AI-driven suggestions, saving time and ensuring professional results.
          </p>
        </div>

        <div className="p-6 md:p-10 rounded-xl bg-blue-50">

          <h3 className="mt-4 text-base md:text-xl font-medium text-gray-800">
          Object and Scene Recognition
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-600">
          Advanced computer vision identifies and tags objects, scenes, and people for precise and efficient editing.
          </p>
        </div>

        <div className="p-6 md:p-10 rounded-xl bg-blue-50">

          <h3 className="mt-4 text-base md:text-xl font-medium text-gray-800">
          Automatic Transcription and Subtitling
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-600">
          Seamless integration of speech recognition for automatic transcription and subtitling.        </p>
        </div>


        <div className="p-6 md:p-10 rounded-xl bg-blue-50">

          <h3 className="mt-4 text-base md:text-xl font-medium text-gray-800">
          Voice Command Integration
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-600">
          Hands-free editing with voice command integration, offering an intuitive and futuristic editing experience.
          </p>
        </div>
        <div className="p-6 md:p-10 rounded-xl bg-blue-50">


          <h3 className="mt-4 text-base md:text-xl font-medium text-gray-800">
          Emotion Analysis & Mood-based Editing
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-600">
          Sentiment analysis for mood-aware editing, allowing users to align edits with the emotional tone of the content.
          </p>
        </div>

        <div className="p-6 md:p-10 rounded-xl bg-blue-50">

          <h3 className="mt-4 text-base md:text-xl font-medium text-gray-800">
          Style Transfer for Videos
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-600">
          AI-driven style transfer algorithms that apply artistic styles to videos, adding a unique visual flair.

          </p>
        </div>

        <div className="p-6 md:p-10 rounded-xl bg-blue-50">

          <h3 className="mt-4 text-base md:text-xl font-medium text-gray-800">
          Dynamic Background Removal
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-600">
          Dynamic background removal or replacement for instant scene transformations.
          </p>
        </div>


        <div className="p-6 md:p-10 rounded-xl bg-blue-50">

          <h3 className="mt-4 text-base md:text-xl font-medium text-gray-800">
          Gesture Recognition
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-600">
          Intuitive editing through gesture recognition, bringing a natural and interactive element to the creative process.
          </p>
        </div>

      </div>
      
    </div>
  );
};

export default Card;
