import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="pt-7 pb-3 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-sm text-neutral-400">
        <div className="flex gap-2 text-white-500">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>

        <div className="flex gap-3">
          {mySocials.map((social, index) => (
            <a href={social.href} key={index} className="social-icon">
              <img src={social.icon} className="w-6 h-6" alt={social.name} />
            </a>
          ))}
        </div>

        <p className="text-white-500">© 2025. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
