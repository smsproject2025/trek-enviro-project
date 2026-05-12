import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { LOGO_URL, NAV_LINKS, CONTACT_INFO } from "../data/mock";

const Footer = () => {
  return (
    <footer className="bg-[#071f33] text-slate-200 mt-20">
      <div className="container-x py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={LOGO_URL} alt="Trek Enviro" className="h-12 w-12 object-contain bg-white/5 rounded p-1" />
            <div>
              <div className="font-display text-xl font-bold">
                <span className="text-white">TREK</span>{" "}
                <span className="text-[#8BC34A]">ENVIRO</span>
              </div>
              <div className="text-[10px] text-slate-400 tracking-[0.18em] uppercase">A Journey Towards Sustainability</div>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Trek Enviro Infrastructure Pvt Ltd delivers advanced MBBR packaged sewage treatment plants for homes, industries, and communities across India.
          </p>
          <div className="flex items-center gap-3 mt-5">
            {[Facebook, Linkedin, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded border border-white/10 hover:border-[#8BC34A] hover:text-[#8BC34A] transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-[0.18em] uppercase text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-slate-400 hover:text-[#8BC34A] transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-[0.18em] uppercase text-white mb-4">Our Solutions</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Packaged MBBR STP</li>
            <li>Residential & Villa STP</li>
            <li>Industrial Wastewater</li>
            <li>Hospital & Institution STP</li>
            <li>O&M / AMC Services</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-[0.18em] uppercase text-white mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 text-[#8BC34A]" />{CONTACT_INFO.address1}</li>
                        <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 text-[#8BC34A]" />{CONTACT_INFO.address2}</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-[#8BC34A]" /><a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-[#8BC34A]">{CONTACT_INFO.phone}</a></li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-[#8BC34A]" /><a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#8BC34A]">{CONTACT_INFO.email}</a></li>
            <li className="flex items-center gap-3"><Clock size={16} className="text-[#8BC34A]" />{CONTACT_INFO.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} Trek Enviro Infrastructure Pvt Ltd. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-[#8BC34A]">Privacy Policy</a>
            <a href="#" className="hover:text-[#8BC34A]">Terms of Use</a>
            <a href="#" className="hover:text-[#8BC34A]">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
