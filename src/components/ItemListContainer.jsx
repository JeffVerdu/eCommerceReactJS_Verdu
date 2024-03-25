import React from "react";

export default function ItemListContainer(props) {
  return (
    <div className="bg-amber-100 h-dvh font-black text-center text-2xl pt-10">
      {props.greeting}
    </div>
  );
}
