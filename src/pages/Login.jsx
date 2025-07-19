import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
      <AnimatePresence mode="wait">
        {isLogin ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" className="w-full border px-4 py-2 rounded-md mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <input type="password" className="w-full border px-4 py-2 rounded-md mt-1" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Login</button>
            </form>
            <p className="text-sm mt-4 text-center">
              Don't have an account? <button onClick={() => setIsLogin(false)} className="text-blue-600 hover:underline">Sign up</button>
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
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input type="text" className="w-full border px-4 py-2 rounded-md mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" className="w-full border px-4 py-2 rounded-md mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <input type="password" className="w-full border px-4 py-2 rounded-md mt-1" />
              </div>
              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">Sign Up</button>
            </form>
            <p className="text-sm mt-4 text-center">
              Already have an account? <button onClick={() => setIsLogin(true)} className="text-green-600 hover:underline">Login</button>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
  )
}

export default Login