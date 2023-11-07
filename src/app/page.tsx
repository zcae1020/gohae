import { Card } from "@mui/material";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Card>
        <h1>Home</h1>
        <Link href="/dashboard">마이 페이지</Link>
      </Card>
      <Card>
        <h1>Home</h1>
        <Link href="/write">편지쓰기</Link>
      </Card>
    </>
  );
};

export default Home;
