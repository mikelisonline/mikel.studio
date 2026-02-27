import Container from "./Container";

const dashes = "—".repeat(80);

export default function Divider() {
  return (
    <Container className="font-mono truncate text-base tracking-widest text-text-muted/30 select-none">
      {dashes}
    </Container>
  );
}
