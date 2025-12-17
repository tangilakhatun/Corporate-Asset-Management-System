import { motion } from "framer-motion";
import { BarChart3, Briefcase, ClipboardList, Package, ShieldCheck, Users,Phone, Mail, MapPin } from "lucide-react";

import { Building2, Boxes } from "lucide-react";
import { useEffect, useState } from "react";
import { getPackages } from "../../services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade ,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    role: "HR Manager",
    image: "https://i.ibb.co.com/Wv30PyJQ/ri2.jpg",
    review:
      "AssetVerse has transformed the way our company manages assets. Everything is smooth and efficient!",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Employee",
    image: "https://i.ibb.co.com/4R5Hzb5j/ri1.avif",
    review:
      "I love how easy it is to request assets and track them. Highly recommended for any company!",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Team Lead",
    image: "https://i.ibb.co.com/Kzr9wwm5/ri-one.avif",
    review:
      "The dashboard and analytics are really helpful. I can see top requested assets instantly.",
  },
];

const steps = [
  {
    title: "Register Company",
    desc: "Create your company profile in just a few clicks",
    icon: Building2,
  },
  {
    title: "Add Assets",
    desc: "Easily add and organize all company assets",
    icon: Boxes,
  },
  {
    title: "Manage & Track",
    desc: "Track asset status and performance in real-time",
    icon: BarChart3,
  },
];
const Home = () => {
 
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    getPackages().then(res => setPackages(res.data));
  }, []);
  
 const slides = [
{
bg: "https://i.ibb.co.com/hxmfhSSC/bg-im.jpg",
text: "Manage Assets Smartly",
},
{
bg: "https://i.ibb.co.com/BVFQZ61Q/bg-3.jpg",
text: "Track Employees Easily",
},
{
bg: "https://i.ibb.co.com/gcM8q79/bg-2.jpg",
text: "All-in-One HR Solution",
},
];
  return (
    <div >

      {/* HerO Section */}
      <section className="relative min-h-[85vh] w-full overflow-hidden">
<Swiper
modules={[Autoplay, EffectFade]}
effect="fade"
autoplay={{ delay: 3500, disableOnInteraction: false }}
loop
className="h-full"
>
{slides.map((slide, index) => (
<SwiperSlide key={index}>
<div
className="relative min-h-[85vh] w-full bg-cover bg-center"
style={{ backgroundImage: `url(${slide.bg})` }}
>

<div className="absolute inset-0 bg-black/50" />
<div className="relative z-10 flex items-center justify-center min-h-[85vh] px-6">
<div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">

<motion.div
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="text-white"
>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
{slide.text}
<span className=" bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent"> AssetVerse</span>
</h1>


<p className="mt-4 text-lg text-gray-200 max-w-xl">
A modern HR & asset management platform designed for growing companies.
</p>


<div className="mt-8 flex flex-col sm:flex-row gap-4">
<a
href="/register/employee"
className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-400 text-black font-semibold shadow-xl"
>
Join as Employee
</a>
<a
href="/register/hr"
className="px-6 py-3 rounded-2xl border border-white text-white font-semibold backdrop-blur-md"
>
Join as HR Manager
</a>
</div>
</motion.div>

<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="grid grid-cols-2 gap-4"
>
<div className="bg-white/15 backdrop-blur-lg rounded-2xl p-5 text-white shadow-xl border border-white/20 flex flex-col items-center">
<Package className="w-10 h-10 text-cyan-500 mb-2" />
<h4 className="font-semibold text-lg">Asset Tracking</h4>
<p className="text-sm text-gray-200 mt-1 text-center">Monitor all company assets in real-time.</p>
</div>
<div className="bg-white/15 backdrop-blur-lg rounded-2xl p-5 text-white shadow-xl border border-white/20 flex flex-col items-center">
<Users className="w-10 h-10 text-indigo-500 mb-2" />
<h4 className="font-semibold text-lg">Employee Management</h4>
<p className="text-sm text-gray-200 mt-1 text-center">Assign and manage assets per employee.</p>
</div>
<div className="bg-white/15 backdrop-blur-lg rounded-2xl p-5 text-white shadow-xl border border-white/20 flex flex-col items-center">
<ClipboardList className="w-10 h-10 text-indigo-500 mb-2" />
<h4 className="font-semibold text-lg">Request System</h4>
<p className="text-sm text-gray-200 mt-1 text-center">Employees can request assets easily.</p>
</div>
<div className="bg-white/15 backdrop-blur-lg rounded-2xl p-5 text-white shadow-xl border border-white/20 flex flex-col items-center">
<BarChart3 className="w-10 h-10 text-cyan-500 mb-2" />
<h4 className="font-semibold text-lg">Analytics & Reports</h4>
<p className="text-sm text-gray-200 mt-1 text-center">Get insights with powerful dashboards.</p>
</div>
</motion.div>
</div>
</div>
</div>
</SwiperSlide>
))}
</Swiper>
</section>
    
{/* About Section */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <div className="text-center mb-14">
    <h2
      className="text-3xl md:text-4xl font-bold 
      bg-gradient-to-r from-indigo-500 to-cyan-400 
      bg-clip-text text-transparent"
    >
      Why Choose AssetVerse?
    </h2>
    <p className="mt-4 text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
      AssetVerse helps organizations efficiently manage assets, employees,
      and accountability with a modern, centralized system.
    </p>
  </div>

  {/* Cards */}
  <div className="grid gap-8 md:grid-cols-3">
    {[
      {
        title: "Centralized Asset Tracking",
        desc: "Track all company assets in one centralized platform with real-time availability and history.",
      },
      {
        title: "Employee Accountability",
        desc: "Know exactly which employee is using which asset to reduce loss and improve responsibility.",
      },
      {
        title: "Data-Driven Decisions",
        desc: "Analyze asset usage trends and requests to make smarter, data-driven business decisions.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300"
      >
        <div className="card-body items-center text-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center 
            bg-gradient-to-r from-indigo-500 to-cyan-400 text-white mb-4"
          >
            <ShieldCheck className="w-7 h-7" />
          </div>

          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm opacity-80 mt-2">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>
{/* package  */}
<section className="py-16 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Packages
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <div key={pkg.name} className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <p className="text-3xl font-bold my-4">
                ${pkg.price}
              </p>
              <p className="mb-4">
                Employee Limit: {pkg.employeeLimit}
              </p>

              <ul className="space-y-2">
                {pkg.features.map((f, i) => (
                  <li key={i}> {f}</li>
                ))}
              </ul>

              <button className="btn mt-6 border-none text-white
                bg-gradient-to-r from-indigo-500 to-cyan-400">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

{/* Features Section */}
<section className="max-w-7xl mx-auto px-6 py-20">
 
  <div className="text-center mb-14">
    <h2
      className="text-3xl md:text-4xl font-bold
      bg-gradient-to-r from-indigo-500 to-cyan-400
      bg-clip-text text-transparent"
    >
      Key Features of AssetVerse
    </h2>
    <p className="mt-4 text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
      Everything your organization needs to manage assets, employees,
      and operations efficiently.
    </p>
  </div>

  {/* Feature Cards */}
  <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
    {[
      {
        icon: Briefcase,
        title: "Asset Control",
        desc: "Centralized tracking and management of all company assets in real time.",
      },
      {
        icon: Users,
        title: "Employee Management",
        desc: "Easily manage employees, teams, and asset assignments across companies.",
      },
      {
        icon: BarChart3,
        title: "Smart Analytics",
        desc: "Visual dashboards and insights to help make data-driven decisions.",
      },
      {
        icon: ShieldCheck,
        title: "Secure Access",
        desc: "Role-based access ensures security, accountability, and data protection.",
      },
    ].map((f, i) => (
      <div
        key={i}
        className="card bg-base-100 shadow-md hover:shadow-xl
        transition-all duration-300 text-center"
      >
        <div className="card-body items-center">
          {/* Icon */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center
            bg-gradient-to-r from-indigo-500 to-cyan-400 text-white mb-4"
          >
            <f.icon className="w-8 h-8" />
          </div>

          {/* Title */}
          <h4 className="text-lg font-semibold">{f.title}</h4>

          {/* Description */}
          <p className="text-sm opacity-80 mt-2">{f.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Stats */}
<section className="bg-gray-100 py-20">
 
  <div className="max-w-6xl mx-auto px-6 text-center mb-14">
    <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
      Our Achievements
    </h2>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      We are proud to showcase our impact and dedication. Here are some key metrics that highlight our success.
    </p>
  </div>

  {/* Cards */}
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
    
    {/* Card 1 */}
    <div className="relative bg-white rounded-3xl p-10 
    shadow-md hover:shadow-xl transition-all duration-300
    hover:-translate-y-2">
      <h3 className="text-5xl font-extrabold text-gray-900 mb-2">
        100+
      </h3>
      <p className="text-gray-600 font-medium">
        Companies Trust Us
      </p>
    </div>

    {/* Card 2 */}
    <div className="relative bg-white rounded-3xl p-10 
    shadow-md hover:shadow-xl transition-all duration-300
    hover:-translate-y-2">
      <h3 className="text-5xl font-extrabold text-gray-900 mb-2">
        10k+
      </h3>
      <p className="text-gray-600 font-medium">
        Assets Managed
      </p>
    </div>

    {/* Card 3 */}
    <div className="relative bg-white rounded-3xl p-10 
    shadow-md hover:shadow-xl transition-all duration-300
    hover:-translate-y-2">
      <h3 className="text-5xl font-extrabold text-gray-900 mb-2">
        99.9%
      </h3>
      <p className="text-gray-600 font-medium">
        Uptime
      </p>
    </div>

  </div>
</section>

{/* How It Works */}
<section className="max-w-7xl mx-auto px-6 py-24 relative">
   
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold">
          How It Works
        </h2>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Just three simple steps to get started
        </p>
      </div>

      
      <div className="hidden md:block absolute top-[55%] left-1/2 -translate-x-1/2 w-[70%]">
  <div className="w-full h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"></div>
</div>

   
      <div className="grid md:grid-cols-3 gap-12 relative z-10">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="text-center bg-base-200 p-8 rounded-3xl shadow-md hover:shadow-xl transition-all"
          >
            
           <div className="relative mx-auto mb-6 w-20 h-20 rounded-full 
bg-gradient-to-r from-indigo-500 to-cyan-400 
flex items-center justify-center shadow-lg">

  <step.icon className="w-9 h-9 text-white" />

 
  <span className="absolute -top-2 -right-2 
  bg-gradient-to-r from-indigo-500 to-cyan-400 
  text-white w-7 h-7 rounded-full text-sm font-bold 
  flex items-center justify-center shadow">
    {i + 1}
  </span>
</div>

            <h4 className="text-xl font-semibold">{step.title}</h4>
            <p className="mt-2 text-gray-500 text-sm">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
{/* review  */}
<section className="max-w-6xl mx-auto py-20 px-4">

  <div className="text-center mb-14">
    <h2 className="text-4xl font-bold mb-3">
      What Our <span className="text-indigo-500">Users Say</span>
    </h2>
    <p className="text-gray-500 text-lg">
      Trusted by 100+ companies worldwide
    </p>
  </div>

  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{ delay: 3000 }}
    pagination={{ clickable: true }}
    spaceBetween={30}
    className="pb-12"
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
  >
    {reviews.map((r) => (
      <SwiperSlide key={r.id} className="h-auto">
        <div className="relative h-full bg-white rounded-3xl p-8 
        shadow-lg hover:shadow-2xl transition-all duration-300
        hover:-translate-y-2 overflow-hidden">

          <div className="absolute -top-10 -right-10 w-32 h-32 
          bg-gradient-to-r from-indigo-500 to-cyan-400 
          rounded-full blur-3xl opacity-20"></div>

          <div className="absolute -bottom-10 -left-10 w-32 h-32 
          bg-gradient-to-r from-cyan-400 to-indigo-500 
          rounded-full blur-3xl opacity-20"></div>

        
          <div className="absolute -top-5 right-6 w-10 h-10 
          rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 
          flex items-center justify-center text-white text-xl shadow-md">
            ❝
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
          
            <img
              src={r.image || "https://i.pravatar.cc/150?img=32"}
              alt={r.name}
              className="w-20 h-20 rounded-full mb-4
              ring-4 ring-indigo-400 ring-offset-4 object-cover"
            />

            <h3 className="text-xl font-semibold text-gray-800">
              {r.name}
            </h3>
            <p className="text-sm text-gray-500 mb-3">{r.role}</p>

     
            <div className="flex gap-1 mb-4">
              {[1,2,3,4,5].map(i => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>

            <p className="text-gray-600 italic leading-relaxed">
              “{r.review}”
            </p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>




{/* Contact CTA  */}


<section className="bg-gradient-to-r from-indigo-600 to-cyan-500 py-24 px-6 text-gray-900">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    <div className="space-y-6 text-white">
      <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
        Ready to Transform Your Business?
      </h2>
      <p className="text-lg md:text-xl text-white/90">
        Join thousands of companies that have streamlined their asset management with Asset Sync
      </p>

      <div className="flex flex-wrap gap-4">
        <button className="btn bg-white text-indigo-600 font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
          Start Free Trial
        </button>
        <button className="btn bg-white/20 border border-white text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-white/30 transition">
          Schedule Demo
        </button>
      </div>
    </div>

    
    <div className="grid gap-6">  
<div className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-6 flex items-start gap-4">
  <Phone className="w-6 h-6 text-indigo-400 mt-1"/>
  <div>
    <h3 className="font-semibold text-lg text-white">Call Us</h3>
    <p className="text-white/90 text-sm">Reach our team directly for any questions</p>
    <p className="text-white/70 text-xs">Available Mon-Fri, 9AM-6PM EST</p>
  </div>
</div>


<div className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-6 flex items-start gap-4">
  <Mail className="w-6 h-6 text-indigo-400 mt-1"/>
  <div>
    <h3 className="font-semibold text-lg text-white">Email Us</h3>
    <p className="text-white/90 text-sm">Send us your inquiries anytime</p>
    <p className="text-white/70 text-xs">24/7 email support available</p>
  </div>
</div>


<div className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-6 flex items-start gap-4">
  <MapPin className="w-6 h-6 text-indigo-400 mt-1"/>
  <div>
    <h3 className="font-semibold text-lg text-white">Visit Us</h3>
    <p className="text-white/90 text-sm">Our headquarters in New York City</p>
    <p className="text-white/90 text-sm">123 Business Ave, NY 10001</p>
  </div>
</div>


    </div>
  </div>
</section>


{/* FAQ */}
<section className="bg-gradient-to-b from-base-200 to-base-100 py-20">
  <div className="max-w-5xl mx-auto px-6">
    
    
    <div className="text-center mb-14">
      <h2 className="text-4xl font-extrabold text-base-content mb-3">
        Frequently Asked Questions
      </h2>
      <p className="text-base-content/70 max-w-xl mx-auto">
        Everything you need to know about AssetVerse and how it works
      </p>
    </div>

    
    <div className="space-y-6">
      
      <div className="collapse collapse-arrow bg-base-100 rounded-2xl shadow-md hover:shadow-xl transition">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-semibold flex items-center gap-3">
          <span className="text-primary text-xl">🔒</span>
          Is AssetVerse secure?
        </div>
        <div className="collapse-content text-base-content/80 leading-relaxed">
          Yes, AssetVerse uses secure authentication, role-based access control,
          and best security practices to protect your data.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 rounded-2xl shadow-md hover:shadow-xl transition">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-semibold flex items-center gap-3">
          <span className="text-primary text-xl">⬆️</span>
          Can I upgrade packages later?
        </div>
        <div className="collapse-content text-base-content/80 leading-relaxed">
          Absolutely! You can upgrade or change your package anytime from your
          dashboard without losing existing data.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 rounded-2xl shadow-md hover:shadow-xl transition">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-semibold flex items-center gap-3">
          <span className="text-primary text-xl">💼</span>
          Is AssetVerse suitable for small businesses?
        </div>
        <div className="collapse-content text-base-content/80 leading-relaxed">
          Yes, AssetVerse is designed to scale—from small teams to large
          enterprises—so you only pay for what you need.
        </div>
      </div>

    </div>
  </div>
</section>
    </div>
  );
};

export default Home;
