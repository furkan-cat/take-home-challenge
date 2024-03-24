import { CheckIcon, OctIcon } from "@/public/svg";


const tableHeaderLeftLinks = [
  {
    icon: <OctIcon />,
    text: "Open",
    to: "https://github.com/vercel/next.js/issues?q=is%3Aopen+is%3Aissue",
  },
  {
    icon: <CheckIcon />,
    text: "Closed",
    to: "https://github.com/vercel/next.js/issues?q=is%3Aissue+is%3Aclosed",
  },
];

const tableHeaderRightLinks = [
  {
    icon: null,
    text: "Projects",
  },
  {
    icon: null,
    text: "Milestones",
  },
  {
    icon: null,
    text: "Assignee",
  },
  {
    icon: null,
    text: "Sort",
  },
];

export { tableHeaderLeftLinks, tableHeaderRightLinks };
