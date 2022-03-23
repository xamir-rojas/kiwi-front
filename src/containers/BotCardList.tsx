import React, { useEffect, useState } from "react";
import axios from "axios";
import { BotCard } from "../components/BotCard";

type Bot = {
  id: string;
  status: "available" | "busy" | "reserved";
  zone_id: string;
};

type BotDB = Bot[];

const BotCardList = () => {
  const API =
    "https://us-central1-kiwi-api-327d0.cloudfunctions.net/kiwiFunctions/api/v1/bots/";

  const [bots, setBots] = useState<BotDB>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(API);

        let newBots: BotDB = response.data.data.map((item: any) => {
          let newBot: Bot = {
            id: item.id,
            status: item.status,
            zone_id: item.zone_id,
          };
          return newBot;
        });
        setBots(newBots);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const cardListContainer = `flex  p-2
  items-stretch justify-start 
  bg-black
  overflow-auto
  h-full w-full
  `;

  return (
    <div className={cardListContainer}>
      {bots.map((bot) => {
        return (
          <BotCard
            key={bot.id}
            cardType="Bot"
            status={bot.status}
            id={bot.id}
            zone_id={bot.zone_id}
          />
        );
      })}
    </div>
  );
};

export { BotCardList };
