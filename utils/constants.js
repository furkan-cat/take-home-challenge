import { CaretDownIcon, CheckIcon, OctIcon } from "@/public/svg";

const headerConstant = {
  leftLinks: [
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
  ],
  rightLinks: [
    {
      icon: <CaretDownIcon />,
      text: "Projects",
      showOnMobile: false,
    },
    {
      icon: <CaretDownIcon />,
      text: "Milestones",
      showOnMobile: false,
    },
    {
      icon: <CaretDownIcon />,
      text: "Assignee",
      showOnMobile: true,
    },
    {
      icon: <CaretDownIcon />,
      text: "Sort",
      showOnMobile: true,
    },
  ],
};

const itemData = [
  {
    title: "lorem ipsum",
    id: "#123123",
    name: "furkancat",
    created: "024-03-24T07:40:09Z",
  },
  {
    title: "kerem ipsum",
    id: "#555223",
    name: "danabramov",
    created: "024-03-24T14:39:52Z",
  },
];

export { headerConstant, itemData };
