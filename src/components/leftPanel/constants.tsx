import { messagesEn } from "../../messages/messagesEn";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

export const menu = [
    {
        tooltip: messagesEn.leftPanel.home.tooltip,
        icon: <HomeRoundedIcon />,
        link: '/home'
    },
    {
        tooltip: messagesEn.leftPanel.wishLists.tooltip,
        icon: <FormatListBulletedRoundedIcon />,
        link: '/wishlists',
        notifications: 4
    },
    {
        tooltip: messagesEn.leftPanel.shared.tooltip,
        icon: <PeopleAltRoundedIcon />,
        link: '/shared',
        notifications: 2
    },
    {
        tooltip: messagesEn.leftPanel.calendar.tooltip,
        icon: <DateRangeRoundedIcon />,
        link: '/calendar'
    },
    {
        tooltip: messagesEn.leftPanel.info.tooltip,
        icon: <InfoRoundedIcon />,
        link: '/info'
    },
];
