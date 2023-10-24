import styles from './page.module.css'
import {Box, Button} from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Box>
        <Button
            variant={"contained"}
            component={Link}
            href={"/1"}
        >
          Navigate to SPA page
        </Button>
      </Box>
    </main>
  )
}
