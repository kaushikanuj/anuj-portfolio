import Link from "next/link";
import HeroEmailIcon from "@/svg/home/HeroIcons/HeroEmailIcon";
import Facebook from "@/svg/icons/Facebook";
import InstagramIconFooter from "@/svg/home/FooterIcons/InstagramIconFooter";


// hero 01 social links
interface HeroDataType {
  id: number;
  link: string;
  icon: JSX.Element;
}

const hero_social_data: HeroDataType[] = [
  {
    id: 1,
    link: "mailto:anujkaushik380@gmail.com",
    icon: <HeroEmailIcon />,
  },
  {
    id: 2,
    link: "https://www.facebook.com/anuj.kaushik.353",
    icon: <Facebook />,
  },
  {
    id: 3,
    link: "https://www.instagram.com/anujkaushik83/",
    icon: <InstagramIconFooter />,
  }
]

export const HeroSocialLinks = () => {
  return (
    <>
      {hero_social_data.map((h_item, h_index) => (
        <Link
          key={h_index}
          href={h_item.link}
          target="_blank">
          {h_item.icon}
        </Link>
      ))}
    </>
  )
}



// hero social links home three
interface HDataType {
  id: number;
  link: string;
  title: string;
}
const hero_link_home_three: HDataType[] = [
  {
    id: 1,
    link: "https://www.facebook.com",
    title: "Facebook",
  },
  {
    id: 2,
    link: "https://www.twitter.com",
    title: "Twitter",
  },
  {
    id: 3,
    link: "https://www.dribble.com",
    title: "Dribble",
  },
  {
    id: 4,
    link: "https://www.instagram.com",
    title: "Instagram",
  }
]
export const HeroSocialLinksHomeThree = () => {
  return (
    <>
      {hero_link_home_three.map((h_item, h_index) => (
        <Link
          key={h_index}
          href={h_item.link}
          target="_blank">
          {h_item.title}
        </Link>
      ))}
    </>
  )

}


// copy right text 
type copy_right_text_type = {
  copy_right: JSX.Element;
}

const copy_right_text: copy_right_text_type = {
  copy_right: <>
    © {new Date().getFullYear()} Anuj Kaushik, All Rights Reserved • <span>Credits</span>
  </>
}

const { copy_right } = copy_right_text
export const CopyRight = () => {
  return (
    <> {copy_right}</>
  )
}


