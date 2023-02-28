import connectMongo from "database/conn";
import { deleteUser, getUser, putUser } from "database/controller";


export default function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "error while connecting..." }))
    const { method } = req;

    switch (method) {
        case "GET":
            getUser(req, res)
            break;
        case "PUT":
            putUser(req, res)
            break;
        case "DELETE":
            deleteUser(req, res)
            break;
    }


}