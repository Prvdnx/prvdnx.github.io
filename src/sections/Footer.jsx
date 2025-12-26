import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="pt-7 pb-3 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-sm text-neutral-400">
        <div className="flex justify-center md:justify-start gap-2 text-white-500 order-2 md:order-1">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>

        <div className="flex justify-center gap-3 order-1 md:order-2">
          {mySocials.map((social, index) => (
            <a href={social.href} key={index} className="social-icon">
              <img src={social.icon} className="w-6 h-6" alt={social.name} />
            </a>
          ))}
        </div>

        <p className="text-white-500 text-center md:text-right order-3">© 2025. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
