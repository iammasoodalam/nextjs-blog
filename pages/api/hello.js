export default function hello(req, res) {
  const email = req.body.email
  res.status(200).send(email)
}