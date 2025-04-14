'use client';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <div className="flex flex-col items-center space-y-4">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-300 object-cover"
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">Sajib Hossen</h2>
            <p className="text-sm text-gray-500">Frontend Developer</p>
          </div>
          <div className="w-full">
            <div className="text-sm text-gray-600 space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Email:</span>
                <span>sajibbabu751@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Phone:</span>
                <span>+8801XXXXXXXXX</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Location:</span>
                <span>Jashore, Bangladesh</span>
              </div>
            </div>
          </div>
          <button className="mt-6 w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
