import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const API =
  "https://us-central1-kiwi-api-327d0.cloudfunctions.net/kiwiFunctions/api/v1";

const BotCardBtn = ({
  status,
  id,
}: {
  status: "available" | "busy" | "reserved";
  id: string;
}) => {
  const navigate = useNavigate();
  const { deliveryId, setDeliveryId } = useContext(AppContext);

  const cardButtonColors = {
    pending: "bg-cyan-300",
    in_transit: "bg-green-300",
    delivered: "bg-green-300",
  };

  const assignBot = async () => {
    await axios.patch(`${API}/deliveries/${deliveryId}`, {
      bot_id: id,
      state: "in_transit",
    });
    await axios.patch(`${API}/bots/${id}`, {
      status: "busy",
    });
    setDeliveryId("");
    navigate("/deliveries");
  };

  if (status === "available") {
    return (
      <button
        className={`cardButton ${cardButtonColors.pending}`}
        onClick={assignBot}
      >
        Assign this Bot
      </button>
    );
  }
  if (status === "busy") {
    return (
      <button
        className={`cardButton ${cardButtonColors.in_transit} opacity-50 cursor-not-allowed`}
      >
        Busy Bot
      </button>
    );
  }
  if (status === "reserved") {
    return (
      <button
        className={`cardButton ${cardButtonColors.delivered} opacity-50 cursor-not-allowed`}
      >
        Bot Reserved
      </button>
    );
  } else {
    return <></>;
  }
};

export { BotCardBtn };
