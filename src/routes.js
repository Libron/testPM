import SlackPage from "./containers/SlackPage/SlackPage";
import GmailPage from "./containers/GmailPage/GmailPage";
import LogsPage from "./containers/LogsPage/LogsPage";
import SettingsPage from "./containers/SettingsPage/SettingsPage";

const ROUTES = [
    {
        path: "/slack",
        class: "slack",
        name: "Slack",
        component: SlackPage,
    },
    {
        path: "/gmail",
        class: "gmail",
        name: "Gmail",
        component: GmailPage
    },
    {
        path: "/gdrive",
        class: "gdrive",
        name: "Google Drive",
        component: null
    },
    {
        path: "/settings",
        class: "settings",
        name: "Settings",
        component: SettingsPage
    },
    {
        path: "/logs",
        class: "logs",
        name: "Logs",
        component: LogsPage
    }

];

export default ROUTES;