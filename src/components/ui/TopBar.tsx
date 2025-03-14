"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function TopBar(): JSX.Element {
  return (
    <div className="w-full bg-[#0F4C5C] text-white text-sm py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Address & Phone */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt color="#9FE870" />
            <span>123, Main Street, City, Country</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt color="#9FE870" />
            <span>+1 234 567 890</span>
          </div>
        </div>

        {/* Right: Social Media Icons */}
        <div className="flex items-center space-x-4">
          <Link href="https://facebook.com" target="_blank" className="hover:text-[#9FE870] transition">
            <FaFacebook size={20} />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="hover:text-[#9FE870] transition">
            <FaInstagram size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
