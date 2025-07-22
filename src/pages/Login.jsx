import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-[#f3ece6] px-4">
      <div className="w-full max-w-md border border-[#e0d8d2]  shadow-2xl rounded-2xl p-8">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-[#5a4b41] text-center">Login</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-[#5a4b41] font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full border border-[#e0d8d2] px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-[#d2bba3] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#5a4b41] font-medium">Password</label>
                  <input
                    type="password"
                    className="w-full border border-[#e0d8d2] px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-[#d2bba3] focus:border-transparent transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#5a4b41] text-white py-2 rounded-md hover:bg-[#473b33] transition-all"
                >
                  Login
                </button>
              </form>
              <p className="text-sm mt-4 text-center text-[#5a4b41]">
                Don&apos;t have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-[#a97d5d] hover:underline"
                >
                  Sign up
                </button>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-[#5a4b41] text-center">Sign Up</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-[#5a4b41] font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full border border-[#e0d8d2] px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-[#d2bba3] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#5a4b41] font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full border border-[#e0d8d2] px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-[#d2bba3] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#5a4b41] font-medium">Password</label>
                  <input
                    type="password"
                    className="w-full border border-[#e0d8d2] px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-[#d2bba3] focus:border-transparent transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#5a4b41] text-white py-2 rounded-md hover:bg-[#473b33] transition-all"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-sm mt-4 text-center text-[#5a4b41]">
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-[#a97d5d] hover:underline"
                >
                  Login
                </button>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Login;
