const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-purple-900 to-pink-900 border-t border-white/10 text-gray-300 py-10">

      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">

        {/* Logo + Tagline */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">
            CoDuo 🧑‍💻
          </h2>
          <p className="text-sm bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Code. Collaborate. Grow.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">

          {/* Twitter */}
          <a className="text-gray-400 hover:text-blue-400 transition duration-300 hover:scale-110">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.5.58-2.24.69a3.92 3.92 0 001.72-2.15 7.72 7.72 0 01-2.45.94 3.88 3.88 0 00-6.6 3.54A11 11 0 013 4.79a3.88 3.88 0 001.2 5.18 3.83 3.83 0 01-1.75-.48v.05a3.88 3.88 0 003.11 3.8 3.9 3.9 0 01-1.75.07 3.88 3.88 0 003.63 2.7A7.78 7.78 0 012 18.57 11 11 0 008 20c7.55 0 11.68-6.26 11.68-11.68v-.53A8.36 8.36 0 0022.46 6z" />
            </svg>
          </a>

          {/* YouTube */}
          <a className="text-gray-400 hover:text-red-500 transition duration-300 hover:scale-110">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M19.6 3H4.4A3.4 3.4 0 001 6.4v11.2A3.4 3.4 0 004.4 21h15.2a3.4 3.4 0 003.4-3.4V6.4A3.4 3.4 0 0019.6 3zM9 17V7l8 5-8 5z" />
            </svg>
          </a>

          {/* Facebook */}
          <a className="text-gray-400 hover:text-blue-500 transition duration-300 hover:scale-110">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H7.9V12h2.6V9.8c0-2.56 1.52-3.98 3.84-3.98 1.11 0 2.27.2 2.27.2v2.5h-1.28c-1.26 0-1.65.78-1.65 1.57V12h2.8l-.45 2.88h-2.35v6.99A10 10 0 0022 12z" />
            </svg>
          </a>

        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs text-center">
          © {new Date().getFullYear()} CoDuo. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;