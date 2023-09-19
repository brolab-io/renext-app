import Link from "next/link";
import NavigationStyleWrapper from "./Navigation.style";
import Image from "next/image";
const menus = [
  {
    title: "Project Summary",
    url: "#projectSummary",
  },
  {
    title: "Schedule",
    url: "#schedule",
  },
  {
    title: "Comparison",
    url: "#comparison",
  },
  {
    title: "Tokenomics",
    url: "#tokenomics",
  },
  {
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    title: "Team Member",
    url: "#team",
  },
  {
    title: "Investors",
    url: "#investors",
  },
];

const Navigation = () => {
  return (
    <NavigationStyleWrapper>
      <div className="navigation_links">
        {menus?.map((menu, i) => (
          <Link key={i} href={menu.url} className="flex items-center">
            {menu.title}
            <Image
              src={"/assets/menu-image.png"}
              alt="shape"
              width={74}
              height={11}
            />
          </Link>
        ))}
      </div>
    </NavigationStyleWrapper>
  );
};

export default Navigation;
