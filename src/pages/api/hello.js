// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "database/conn"

export default function handler(req, res) {
  connectMongo().catch(() => res.status(404).json({ error: "err" }))
  console.log(req)
  res.status(200).json({ name: 'John Doe' })
}
