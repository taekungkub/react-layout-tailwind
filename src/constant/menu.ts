import { Drumstick } from "lucide-react";

export const menu = [
  { label: "Dashboard", icon: Drumstick, link: "/" },
  {
    label: "Market news",
    icon: Drumstick,
    initiallyOpened: false,
    links: [
      { label: "Overview", link: "/market-news/overview" },
      { label: "Forecasts", link: "/market-news/forecasts" },
      { label: "Outlook", link: "/market-news/outlook" },
      { label: "Real time", link: "/market-news/real-time" },
    ],
  },
  {
    label: "Releases",
    icon: Drumstick,
    initiallyOpened: false,
    links: [
      { label: "Upcoming releases", link: "/release/upcomming" },
      { label: "Previous releases", link: "/release/previous" },
      { label: "Releases schedule", link: "/release/schedule" },
    ],
  },
  { label: "Analytics", icon: Drumstick, link: "/analytics" },
  { label: "Contracts", icon: Drumstick, link: "/contracts" },
  { label: "Settings", icon: Drumstick, link: "/settings" },
  {
    label: "Security",
    icon: Drumstick,
    links: [
      { label: "Enable 2FA", link: "/security/2fa" },
      { label: "Change password", link: "/security/change-password" },
      { label: "Recovery codes", link: "/security/recovery-codes" },
    ],
  },
];
