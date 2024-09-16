import { IConfigFromPlugins } from "@/.umi/core/pluginConfig";

export const defaultRoutes: IConfigFromPlugins['routes'] = [
    { path: "/", component: "index" },
    { path: "/user", component: "user" },
]