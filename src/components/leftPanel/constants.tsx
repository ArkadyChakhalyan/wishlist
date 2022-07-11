import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import { messages } from "../app/constants";

export const LEFT_PANEL_MENU = [
    {
        tooltip: messages.leftPanel.home.tooltip,
        icon: <HomeRoundedIcon />,
        link: '/home'
    },
    {
        tooltip: messages.leftPanel.wishlists.tooltip,
        icon: <FormatListBulletedRoundedIcon />,
        link: '/wishlists',
        notifications: 4
    },
    {
        tooltip: messages.leftPanel.shared.tooltip,
        icon: <PeopleAltRoundedIcon />,
        link: '/shared',
        notifications: 2
    },
    {
        tooltip: messages.leftPanel.calendar.tooltip,
        icon: <DateRangeRoundedIcon />,
        link: '/calendar'
    },
    {
        tooltip: messages.leftPanel.info.tooltip,
        icon: <InfoRoundedIcon />,
        link: '/info'
    },
];
