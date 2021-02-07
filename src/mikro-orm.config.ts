import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

export default {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post],
    dbName: "unreddit_db",
    type: "postgresql",
    password: "1Ulla98Jurgen8",
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];