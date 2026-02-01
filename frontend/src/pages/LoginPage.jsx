import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
            {/* Back to Home Button */}
            <button
                onClick={() => navigate('/')}
                className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
                <span>←</span>
                <span>Back Home</span>
            </button>

            <div className="w-full max-w-md px-8">
                {/* Logo */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">SM</span>
                    </div>
                    <span className="text-white text-2xl font-bold">SocialHub</span>
                </div>

                {/* Form Container */}
                <div className="bg-gray-800 rounded-lg shadow-xl p-8">
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-300 text-sm font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300 text-sm font-semibold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 mt-6"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center text-gray-400 mt-6">
                        Don't have an account?{' '}
                        <button
                            onClick={() => navigate('/register')}
                            className="text-blue-500 hover:text-blue-400 font-semibold transition-colors"
                        >
                            Sign up here
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
