import classNames from "classnames";

export const NavButton = () => {
  return (
    <div
      className={classNames(
        "w-[147px]",
        "h-[46px]",

        "flex",
        "justify-center",
        "items-center",

        "bg-black",

        "rounded-md",

        "hover:bg-opacity-80",
        "transition-all",
        "duration-200",

        "text-white",
        "text-[14px]",
        "font-bold",

        "cursor-pointer"
      )}
      onClick={() => {
        alert("아직 작성할 수 없습니다!");
      }}
    >
      바로 작성하기
    </div>
  );
};
