import { Mail, Phone, ShieldCheck, Clock, HelpCircle } from "lucide-react";

const Support = () => {
  return (
    <div className="bg-base-200  min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-base-100 pt-50">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            How can we help you?
          </h1>

          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-10">
            Search our help center or contact AssetVerse support for assistance.
          </p>

          <div className="max-w-xl mx-auto">
            <div className="join w-full shadow-lg">
              <input
                type="text"
                placeholder="Search help articles, FAQs, or issues..."
                className="input input-bordered join-item w-full"
              />
              <button className="btn join-item text-white border-none bg-gradient-to-r from-indigo-500 to-cyan-400 hover:opacity-90">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT HIGHLIGHTS */}
      <section className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* CARD */}
        <div className="card bg-white dark:bg-white shadow-md hover:shadow-xl transition-all duration-300">
          <div className="card-body items-center text-center">
            <Clock className="w-10 h-10 text-indigo-500 dark:text-cyan-400 mb-2" />
            <h3 className="font-semibold text-lg text-gray-800">Fast Response</h3>
            <p className="text-sm text-gray-600">Our support team usually replies within 24 hours.</p>
          </div>
        </div>

        {/* CARD */}
        <div className="card bg-white dark:bg-white shadow-md hover:shadow-xl transition-all duration-300">
          <div className="card-body items-center text-center">
            <ShieldCheck className="w-10 h-10 text-indigo-500 dark:text-cyan-400 mb-2" />
            <h3 className="font-semibold text-lg text-gray-800">Secure & Reliable</h3>
            <p className="text-sm text-gray-600">Enterprise-grade security for all your data and requests.</p>
          </div>
        </div>

        {/* CARD */}
        <div className="card bg-white dark:bg-white shadow-md hover:shadow-xl transition-all duration-300">
          <div className="card-body items-center text-center">
            <HelpCircle className="w-10 h-10 text-indigo-500 dark:text-cyan-400 mb-2" />
            <h3 className="font-semibold text-lg text-gray-800">Expert Guidance</h3>
            <p className="text-sm text-gray-600">Professional help from the AssetVerse support team.</p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-white dark:bg-white shadow">
            <input type="radio" name="faq" defaultChecked />
            <div className="collapse-title font-medium text-gray-800">
              How do employees request assets?
            </div>
            <div className="collapse-content text-gray-600">
              <p>Employees can request assets from their dashboard. HR approval is required.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white dark:bg-white shadow">
            <input type="radio" name="faq" />
            <div className="collapse-title font-medium text-gray-800">
              Why can’t I add more employees?
            </div>
            <div className="collapse-content text-gray-600">
              <p>Your current package has reached its employee limit. Please upgrade your plan.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white dark:bg-white shadow">
            <input type="radio" name="faq" />
            <div className="collapse-title font-medium text-gray-800">
              How does the upgrade package work?
            </div>
            <div className="collapse-content text-gray-600">
              <p>HR managers can upgrade packages securely using Stripe payments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-base-100">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* CONTACT INFO */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Support</h2>
            <p className="opacity-80 mb-8">Still need help? Our team is always ready to assist you.</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-indigo-500">
                <Mail />
                <span>support@assetverse.com</span>
              </div>
              <div className="flex items-center gap-3 text-indigo-500">
                <Phone />
                <span>+880 1234 567 890</span>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="card bg-white dark:bg-white shadow-lg">
            <div className="card-body">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Send us a message</h3>

              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="input input-bordered w-full" required />
                <input type="email" placeholder="Email Address" className="input input-bordered w-full" required />
                <textarea className="textarea textarea-bordered w-full" rows="4" placeholder="Describe your issue" required />

                <button className="btn w-full text-white border-none bg-gradient-to-r from-indigo-500 to-cyan-400 hover:opacity-90">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
