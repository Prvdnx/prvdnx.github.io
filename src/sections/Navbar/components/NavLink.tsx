export type NavLinkProps = {
  href: string;
  title: string;
  iconSrc: string;
  label: string;
  isActive?: boolean;
};

export const NavLink = (props: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = props.href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Dynamically get navbar height
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 64;
      const offset = 20; // Additional spacing
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (props.href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a
      href={props.href}
      title={props.title}
      onClick={handleClick}
      className={`group items-center box-border caret-transparent gap-x-2 inline-flex gap-y-2 px-4 py-2 hover:bg-blue-600/10 hover:text-blue-500 rounded-lg transition-colors ${props.isActive ? "bg-neutral-900/50" : ""
        }`}
    >
      {props.iconSrc && (
        <img
          src={props.iconSrc}
          alt=""
          className="h-5 w-5 transition-all group-hover:[filter:brightness(0)_saturate(100%)_invert(42%)_sepia(93%)_saturate(1352%)_hue-rotate(202deg)_brightness(97%)_contrast(96%)]"
        />
      )}
      <span className="text-sm font-medium box-border caret-transparent block leading-5">
        {props.label}
      </span>
    </a>
  );
};
