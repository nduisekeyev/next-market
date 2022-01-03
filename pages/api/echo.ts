export default function echo(req: any, res: any) {
  res.status(200);
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      message: req.query.message ?? "Base message",
    })
  );
}
