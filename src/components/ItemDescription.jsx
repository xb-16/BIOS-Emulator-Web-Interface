import { useSelector } from "react-redux";

export default function ItemDescription() {
  let desc = useSelector((state) => state.description);
  return (
    <div className="flex flex-col w-[30%] border-2">
      <div className="p-[7px] basis-[5%] text-center border-b-2">Item Specific Help</div>
      <div className="basis-[95%] px-[10px] py-[20px] !text-xl">{desc.description}</div>
    </div>
  );
}
