import { Card } from "@mui/material";
import Link from "next/link";

const Home = () => {
    return (
        <div>
            <Card>
                <Link href="/dashboard">마이 페이지</Link>
            </Card>
            <Card>
                <Link href="/letterbox">편지함</Link>
            </Card>
            <Card>
                <Link href="/write">편지쓰기</Link>
            </Card>
            <Card>
                <Link href="/letterbox">상점</Link>
            </Card>
            <Card>
                <Link href="/letterbox">더보기</Link>
            </Card>
        </div>
    );
};

export default Home;
