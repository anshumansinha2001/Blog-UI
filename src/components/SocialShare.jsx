import React from "react";

const SocialShare = () => {
  const handleShare = (platform) => {
    alert(`Sharing on ${platform}`);
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={() => handleShare("Facebook")}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Facebook
      </button>
      <button
        onClick={() => handleShare("Twitter")}
        className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded"
      >
        Twitter
      </button>
      <button
        onClick={() => handleShare("LinkedIn")}
        className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded"
      >
        LinkedIn
      </button>
    </div>
  );
};

export default SocialShare;
