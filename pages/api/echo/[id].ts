export default function getById(req: any, res: any) {
  //   res.status(200);
  //   res.setHeader("Content-Type", "application/json");
  //   res.end(req.query.id);

  res.json({ id: req.query.id });
}
