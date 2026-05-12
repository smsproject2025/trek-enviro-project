import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { LOGO_URL, NAV_LINKS, CONTACT_INFO } from "../data/mock";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top strip */}
      <div className="bg-[#0B4A7F] text-white text-xs">
        <div className="container-x flex items-center justify-between py-2">
          <div className="hidden md:flex items-center gap-5">
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-[#8BC34A] transition-colors">
              <Phone size={13} /> {CONTACT_INFO.phone}
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-[#8BC34A] transition-colors">
              <Mail size={13} /> {CONTACT_INFO.email}
            </a>
          </div>
          <div className="text-[11px] tracking-widest uppercase text-white/80">A Journey Towards Sustainability</div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`bg-white transition-shadow ${scrolled ? "shadow-md" : "shadow-sm"}`}>
        <div className="container-x flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Trek Enviro" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-[20px] font-bold tracking-wide">
                <span className="text-[#0B4A7F]">TREK</span>{" "}
                <span className="text-[#4CAF50]">ENVIRO</span>
              </div>
              <div className="text-[10px] text-slate-500 tracking-[0.18em] uppercase">Infrastructure Pvt Ltd</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                end
                className={({ isActive }) =>
                  `relative text-[14px] font-medium transition-colors ${isActive ? "text-[#0B4A7F]" : "text-slate-700 hover:text-[#0B4A7F]"}`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#4CAF50] transition-all ${isActive ? "w-full" : "w-0"}`}></span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-green">Get a Quote</Link>
          </div>

          <button className="lg:hidden p-2 text-slate-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-slate-100">
            <div className="container-x py-4 flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <NavLink key={l.path} to={l.path} end className={({ isActive }) => `py-2 text-[15px] font-medium ${isActive ? "text-[#0B4A7F]" : "text-slate-700"}`}>
                  {l.label}
                </NavLink>
              ))}
              <Link to="/contact" className="btn-green mt-2 w-max">Get a Quote</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
