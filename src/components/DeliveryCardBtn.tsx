import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const API =
  "https://us-central1-kiwi-api-327d0.cloudfunctions.net/kiwiFunctions/api/v1";

const DeliveryCardBtn = ({
  deliveryStatus,
  id,
  setDeliveryStatus,
}: {
  deliveryStatus: "pending" | "assigned" | "in_transit" | "delivered";
  id: string;
  setDeliveryStatus: Function;
}) => {
  const navigate = useNavigate();
  const { setDeliveryId } = useContext(AppContext);
  const cardButtonColors = {
    pending: "bg-cyan-300",
    in_transit: "bg-green-300",
    delivered: "bg-green-300",
  };

  const goToSelectBot = () => {
    setDeliveryId(id);
    navigate("/bots");
  };

  const updateDelivery = async () => {
    await axios.patch(`${API}/deliveries/${id}`, {
      state: "delivered",
    });
    setDeliveryStatus("delivered");
  };

  const buttonToRender = () => {
    switch (deliveryStatus) {
      case "pending":
        return (
          <button
            className={`cardButton ${cardButtonColors.pending}`}
            onClick={goToSelectBot}
          >
            Assign a Bot
          </button>
        );
      case "in_transit":
        return (
          <button
            className={`cardButton ${cardButtonColors.in_transit}`}
            onClick={updateDelivery}
          >
            Mark as Delivered
          </button>
        );
      case "delivered":
        return (
          <button
            className={`cardButton ${cardButtonColors.delivered} opacity-50 cursor-not-allowed`}
          >
            Already Delivered
          </button>
        );
    }
  };
  return <>{buttonToRender()}</>;
};

export { DeliveryCardBtn };
