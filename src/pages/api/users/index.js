import connectMongo from "database/conn";
import { deleteUsers, getUsers, postUsers, putUsers } from "database/controller";

export default function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "error while connecting..." }))

    const { method } = req;
    switch (method) {
        case "GET":
            getUsers(req, res)
            break;
        case "POST":
            postUsers(req, res)
            break;
        case "PUT":
            putUsers(req.res)
            break;
        case "DELETE":
            deleteUsers(req, res)
            break;
        default:
            res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
            res.status(405).end(`method${method} Not Allowed`)
    }

    //return res.status(200).json({ name: 'John Doe' })
}