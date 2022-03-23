import React, { useEffect, useState, useContext } from "react";
import { DeliveryCard } from "../components/DeliveryCard";
import axios from "axios";

import { AppContext } from "../context/AppContext";

type Delivery = {
  id: string;
  creation_date: Date;
  state: "pending" | "assigned" | "in_transit" | "delivered";
  zone_id: string;
};

type DeliveryDB = Delivery[];

const API =
  "https://us-central1-kiwi-api-327d0.cloudfunctions.net/kiwiFunctions/api/v1/deliveries/";

const DeliveriesCardList = () => {
  const [deliveries, setDeliveries] = useState<DeliveryDB>([]);
  const { asc } = useContext(AppContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(API);

        let newDeliveries: DeliveryDB = response.data.data.map(
          (item: any, index: number) => {
            let date = new Date();
            date.setDate(date.getDate() + index);
            let newDelivery: Delivery = {
              id: item.id,
              creation_date: date,
              state: item.state,
              zone_id: item.zone_id,
            };
            return newDelivery;
          }
        );

        newDeliveries.sort((a: Delivery, b: Delivery) => {
          return b.creation_date.getTime() - a.creation_date.getTime();
        });
        if (!asc) {
          newDeliveries.reverse();
        }
        setDeliveries(newDeliveries);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [asc]);

  const cardListContainer = `flex  p-2
  items-stretch justify-start 
  bg-black
  overflow-auto
  h-full w-full
  `;

  return (
    <div className={cardListContainer}>
      {deliveries.map((delivery) => {
        return (
          <DeliveryCard
            key={delivery.id}
            cardType="Delivery"
            status={delivery.state}
            id={delivery.id}
            creation_date={delivery.creation_date}
            zone_id={delivery.zone_id}
          />
        );
      })}
    </div>
  );
};

export { DeliveriesCardList };
