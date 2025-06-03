"use client";


const Footer = () => {
  return (
    <footer className="mt-6 py-6 bg-[#23232a] text-gray-400 text-sm text-center border-t border-gray-600">
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 px-4">
        <div>
          &copy; {new Date().getFullYear()} RevisionWebApp. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="/terms" className="hover:text-white underline">Terms of Service</a>
          <span>|</span>
          <a href="/privacy" className="hover:text-white underline">Privacy Policy</a>
          <span>|</span>
          <a href="/contact" className="hover:text-white underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;