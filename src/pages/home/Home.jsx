import { motion } from "framer-motion";



const Home = () => {
 
  return (
    <div >

      {/* HERO SECTION */}

<section className="min-h-[80vh] relative bg-gradient-to-r from-blue-50 via-white to-blue-50 flex items-center overflow-hidden">

  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-20 animate-pulse -z-10"></div>
  <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-10 animate-pulse -z-10"></div>

  <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
    
   
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center md:text-left"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
      >
        Manage Your Company Assets Efficiently With  
        <span className="text-teal-400"> AssetVerse</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-4 text-md sm:text-lg md:text-xl text-gray-600"
      >
        A modern and intelligent platform for HR teams to track 
        physical assets, employees, and requests.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
      >
        <motion.a
          whileHover={{ scale: 1.05, backgroundColor: "#38b2ac", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          className="btn bg-teal-400 transition-transform"
          href="/register/employee"
        >
          Join as Employee
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#0ea5e9", borderColor: "#0ea5e9" }}
          whileTap={{ scale: 0.95 }}
          className="btn bg-white transition-transform"
          href="/register/hr"
        >
          Join as HR Manager
        </motion.a>
      </motion.div>

   
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 text-gray-500 text-sm flex items-center justify-center md:justify-start gap-2"
      >
    
      </motion.div>
    </motion.div>

    
    <motion.img
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="rounded-xl shadow-2xl w-full max-w-lg mx-auto md:mx-0"
      src="https://i.ibb.co.com/pr0MvdX7/bussnis.avif"
      alt="hero"
    />
  </div>
</section>

    
    </div>
  );
};

export default Home;
