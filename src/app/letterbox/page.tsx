import { Button, CardContent } from "@mui/material";

import style from "./page.module.scss";

const Home = () => {
  return (
    <div>
      <div className={style.card}>
        <CardContent>
          <Button variant="contained" className={style.button}>
            보낸 편지함
          </Button>
        </CardContent>
        <CardContent>
          <Button variant="contained" className={style.button}>
            받은 편지함
          </Button>
        </CardContent>
        <CardContent>
          <Button variant="contained" className={style.button}>
            편지 쓰기
          </Button>
        </CardContent>
      </div>
      {/* <List>
        <li>편지 1</li>
        <li>편지 2</li>
        <li>편지 3</li>
      </List> */}
    </div>
  );
};

export default Home;
