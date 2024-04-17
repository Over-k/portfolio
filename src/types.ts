export type Routes = {
  name: string;
  path: string;
}[];
export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
};
export type SkillsObjects = {
  name: SkillsNames;
  active: boolean;
  icon: string;
}[];
export type SkillsNames =
  | "HTML"
  | "CSS"
  | "Javascript"
  | "Typescript"
  | "React"
  | "Tailwind"
  | "MySQL"
  | "Git"
  | "Bootstrap"
  | "Docker"
  | "Figma"
  | "Java"
  | "C"
  | "C#"
  | "Python";
export type SocialObjects = {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
  icon: string;
}[];
export type SocialIcons = {
  [social in SocialMedia]: string;
};

export type SocialMedia =
  | "Github"
  | "Facebook"
  | "Instagram"
  | "LinkedIn"
  | "Mail"
  | "Twitter"
  | "Twitch"
  | "YouTube"
  | "WhatsApp"
  | "Snapchat"
  | "Pinterest"
  | "TikTok"
  | "CodePen"
  | "Discord"
  | "GitLab"
  | "Reddit"
  | "Skype"
  | "Steam"
  | "Telegram"
  | "Mastodon";

export type CMDs = {
  name: string;
  desc: string;
  content: string;
}[];
export type ReposType = {
  name: string;
  html_url: string;
  description: string;
  language: string;
}[];
export type PostsType = {
  title: string;
  cover_image: string;
  url: string;
  description: string;
  published_at: string;
  public_reactions_count: number;
  comments_count: number;
  reading_time_minutes: number;
}[];