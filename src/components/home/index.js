import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import socketIOClient from "socket.io-client";

import { EsquecameContext } from "../../contexts/esquecame";
import Version from "../version/version";

import styles from "./index.module.css";

export default function Home() {
  const contextData = useContext(EsquecameContext);

  function handleClick() {
    contextData.levelUp();
    console.log(contextData);
  }

  function socketLogin(pLogin, pMessage) {
    const socket = socketIOClient("https://push01.cloudrobot.com.br:3333/");
    socket.emit("login", "xxxxx");
    // socket.on("users", data => {
    //   console.log(JSON.parse(data))
    // })
  }

  return (
    <>
      <header>
        <div className={styles.tierHeader}>
          {/* <Image
            src="/fabiolarinaldi.png"
            alt="fabiola rinaldi"
            layout="intrinsic"
            width={437}
            height={90}
          /> */}
        </div>
      </header>

      <main className={styles.tierMain}>
        <session className={styles.tierLogo}>
          {/* <Image
            src="/anger-face.png"
            alt="esqueça-me"
            layout="intrinsic"
            width={182}
            height={228}
          /> */}
        </session>

        <session className={styles.tierTitle}>
          <h1>PERSONAL TRAINER</h1>
          <p>Cuidando do seu corpo e sua saúde</p>
          <p> </p>
          {/* <Link href="/">
            <a>MAIS INFORMAÇÕES</a>
          </Link> */}

          {/* <button id="a" onClick={handleClick}>
            testar context
          </button>

          <button id="b" onClick={socketLogin}>
            testar socket
          </button> */}

          <Version />
        </session>
      </main>
    </>
  );
}
