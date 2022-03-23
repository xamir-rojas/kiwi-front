import { BotCardBtn } from "./BotCardBtn";
import "./styles.css";

interface BotCardProps {
  cardType: string;
  status: "available" | "busy" | "reserved";
  id: string;
  zone_id: string;
}

const BotCard = ({ cardType, status, id, zone_id }: BotCardProps) => {
  return (
    <div className="cardContainer">
      <h1 className="cardTitle">{cardType}!</h1>
      <div className="cardStatusBarContainer">
        <p className="cardStatusTitle">Status: {status}</p>
        <div className="w-full font-bold text-3xl flex justify-around items-end border-black border-4 ">
          <div>
            <h1 className="text-4xl"> . </h1>
          </div>
          <div>
            <h1> {"<"} </h1>
          </div>
        </div>
      </div>
      <div className="cardInfoContainer">
        <ul className="list-disc">
          <li>id: {id}</li>
          <li>zone id: {zone_id}</li>
        </ul>
      </div>
      <BotCardBtn status={status} id={id} />
    </div>
  );
};

export { BotCard };
