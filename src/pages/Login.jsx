// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   register,
//   signin,
//   onAuthStateChangedListener,
// } from "../authApi/authService";
// import { FaUser, FaLock, FaRegUserCircle } from "react-icons/fa";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChangedListener((currentUser) => {
//       setUser(currentUser);
//       localStorage.setItem("user", JSON.stringify(currentUser));
    
//       if (currentUser) {
//         if (currentUser?.email == "mergul@hotmail.com") {
//           navigate("/dashboard");
//         } else {
//           navigate("/user-dashboard");
//         }
//       }else {
//         navigate("/");
//       }
//     });
//     return () => unsubscribe();
//   }, [navigate]);

//   const handleRegister = async () => {
//     try {
//       setError("");
//       await register(email, password);
//     } catch (error) {
//       console.error("Registration error:", error);
//       setError(error.message);
//     }
//   };

//   const handleSignin = async () => {
//     try {
//       setError("");
//       await signin(email, password);
//     } catch (error) {
//       console.error("Sign in error:", error);
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen text-white bg-[url('/bg_sql.jpg')] bg-no-repeat bg-cover bg-center">
//       <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-80">
//         <div className="flex justify-center mb-6">
//           <FaRegUserCircle size={48} />
//         </div>
//         {error && (
//           <div className="bg-red-500 text-white p-2 rounded mb-4">{error}</div>
//         )}
//         <div className="mb-4">
//           <div className="flex items-center bg-gray-700 rounded p-2">
//             <FaUser className="text-gray-400 mr-2" />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="bg-transparent text-white w-full focus:outline-none"
//             />
//           </div>
//         </div>
//         <div className="mb-6">
//           <div className="flex items-center bg-gray-700 rounded p-2">
//             <FaLock className="text-gray-400 mr-2" />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="bg-transparent text-white w-full focus:outline-none"
//             />
//           </div>
//         </div>
//         <div className="flex justify-between">
//           <button
//             onClick={handleSignin}
//             className="bg-[#106E49] hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
//           >
//             Giriş Yap
//           </button>
//           <button
//             onClick={handleRegister}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
//           >
//             Üye Ol
//           </button>
//         </div>
//       </div>
//       {user && <p className="mt-4 text-green-400">Welcome, {user.email}</p>}
//     </div>
//   );
// };

// export default LoginPage;
