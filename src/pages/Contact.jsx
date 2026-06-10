import { useState } from "react";
import PageHero from "../components/PageHero";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { CONTACT_INFO, IMAGES } from "../data/mock";
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", capacity: "", facility: "", location: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main>

    <Helmet>
  <title>Contact Trek Enviro | Get STP & Wastewater Solutions</title>

  <meta
    name="description"
    content="Contact Trek Enviro for sewage treatment plant installation, wastewater treatment consultation, site assessment, and custom STP solutions across India."
  />

  <meta
    name="keywords"
    content="contact Trek Enviro, STP consultation, wastewater treatment contact, sewage treatment plant quote"
  />

  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="https://trekenviro.in/contact" />
</Helmet>

      <PageHero
        title="Let's protect water together."
        subtitle="Ready to optimize your wastewater management? Contact us for a free site assessment and custom proposal."
        image="./images/savewater.webp"
        crumbs={["Contact"]}
      />

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-100 p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">Get a Quote</h2>
            <p className="text-slate-600 mt-2 text-sm">Tell us about your project — capacity, location, and facility type. Our engineers will respond with a tailored proposal.</p>

            <form action="https://formsubmit.co/trekenviro@gmail.com"  method="POST" className="mt-8 grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-slate-600">Full Name *</label>
                <input name="name" value={form.name} onChange={handleChange} className="mt-2 w-full border border-slate-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#0B4A7F] focus:ring-2 focus:ring-[#0B4A7F]/10" placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-slate-600">Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} className="mt-2 w-full border border-slate-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#0B4A7F] focus:ring-2 focus:ring-[#0B4A7F]/10" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-slate-600">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="mt-2 w-full border border-slate-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#0B4A7F] focus:ring-2 focus:ring-[#0B4A7F]/10" placeholder="+91" />
              </div>
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-slate-600">Location</label>
                <input name="location" value={form.location} onChange={handleChange} className="mt-2 w-full border border-slate-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#0B4A7F] focus:ring-2 focus:ring-[#0B4A7F]/10" placeholder="City / State" />
              </div>
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-slate-600">Capacity Needed</label>
                <select name="capacity" value={form.capacity} onChange={handleChange} className="mt-2 w-full border border-slate-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#0B4A7F] focus:ring-2 focus:ring-[#0B4A7F]/10 bg-white">
                  <option value="">Select capacity</option>
                  <option>5–10 KLD (Small)</option>
                  <option>15–50 KLD (Medium)</option>
                  <option>50+ KLD (Large / Modular)</option>
                  <option>Not sure — need assessment</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-slate-600">Facility Type</label>
                <select name="facility" value={form.facility} onChange={handleChange} className="mt-2 w-full border border-slate-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#0B4A7F] focus:ring-2 focus:ring-[#0B4A7F]/10 bg-white">
                  <option value="">Select facility</option>
                  <option>Residential</option>
                  <option>Commercial / Hotel</option>
                  <option>Institutional</option>
                  <option>Industrial</option>
                  <option>Government</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-semibold tracking-wider uppercase text-slate-600">Message *</label>
                <textarea name="message" rows={5} value={form.message} onChange={handleChange} className="mt-2 w-full border border-slate-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#0B4A7F] focus:ring-2 focus:ring-[#0B4A7F]/10" placeholder="Tell us about your project..." />
              </div>
              <div className="md:col-span-2">
                <button disabled={loading} className="btn-primary disabled:opacity-60">
                  <Send size={15} /> {loading ? "Sending..." : "Submit Enquiry"}
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-4">
            {[
              { icon: MapPin, title: "Address", value: CONTACT_INFO.address1 + ", " + CONTACT_INFO.address2 },
              { icon: Phone, title: "Phone", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
              { icon: Mail, title: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
              { icon: MessageCircle, title: "WhatsApp", value: CONTACT_INFO.whatsapp, href: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, "")}` },
              { icon: Clock, title: "Business Hours", value: CONTACT_INFO.hours },
            ].map((c, i) => {
              const Icon = c.icon;
              const inner = (
                <div className="bg-white border border-slate-100 rounded-xl p-5 flex items-start gap-4 card-hover">
                  <div className="h-11 w-11 rounded bg-[#E3F2FD] text-[#0B4A7F] grid place-items-center shrink-0"><Icon size={18} /></div>
                  <div>
                    <div className="text-[11px] tracking-[0.18em] uppercase text-[#4CAF50] font-semibold">{c.title}</div>
                    <div className="text-slate-900 font-semibold text-sm mt-1">{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? <a key={i} href={c.href} target="_blank" rel="noreferrer">{inner}</a> : <div key={i}>{inner}</div>;
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
