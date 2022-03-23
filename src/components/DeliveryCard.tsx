import React, { useEffect, useState } from "react";
import { DeliveryCardBtn } from "./DeliveryCardBtn";
import "./styles.css";

interface DeliveryCardProps {
  cardType: string;
  status: "pending" | "assigned" | "in_transit" | "delivered";
  id: string;
  creation_date: Date;
  zone_id: string;
}

const DeliveryCard = ({
  cardType,
  status,
  id,
  creation_date,
  zone_id,
}: DeliveryCardProps) => {
  const [progress, setProgress] = useState("w-1/4");
  const [deliveryStatus, setDeliveryStatus] = useState(status);

  useEffect(() => {
    switch (deliveryStatus) {
      case "pending":
        setProgress("w-1/4");
        break;
      case "assigned":
        setProgress("w-2/4");
        break;
      case "in_transit":
        setProgress("w-3/4");
        break;
      case "delivered":
        setProgress("w-auto");
        break;
    }
  }, [deliveryStatus, progress]);

  return (
    <div className="cardContainer">
      <h1 className="cardTitle">{cardType}!</h1>
      <div className="cardStatusBarContainer">
        <p className="cardStatusTitle">Status: {deliveryStatus}</p>
        <div className="cardStatusBarBackground">
          <div
            className={`bg-blue-500 w-1/4 h-full rounded-lg shadow-md ${progress}`}
          ></div>
        </div>
      </div>
      <div className="cardInfoContainer">
        <ul className="list-disc">
          <li>id: {id}</li>
          <li>creation date: {creation_date.toString()}</li>
          <li>zone id: {zone_id}</li>
        </ul>
      </div>
      <DeliveryCardBtn
        deliveryStatus={deliveryStatus}
        id={id}
        setDeliveryStatus={setDeliveryStatus}
      />
    </div>
  );
};

export { DeliveryCard };
