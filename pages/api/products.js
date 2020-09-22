import { getData } from "../../firebase"

export default async (req, res) => {
  if (req.method === 'GET') {
    const data = await getData()
    res.end(JSON.stringify(data))
  }
}
