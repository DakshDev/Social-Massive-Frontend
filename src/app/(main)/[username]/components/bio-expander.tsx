"use client";

import { useEffect, useState } from "react";

function BioExpander() {
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nobis unde provident exercitationem quidem voluptas ullam possimus corrupti sit perspiciatis"
  );
  let [expandBtn, setExpandBtn] = useState(true);

  useEffect(() => {
    if (bio.split("").length > 100) {
      setExpandBtn(true);
    }
    console.log(bio.split(""));
  });

  return (
    <>
      <p className="max-w-75">
        {bio.split("").splice(0, 100).join("")}{" "}
        {expandBtn && <button className="text-sm text-blue-500 hover:underline">Show More</button>}
      </p>
    </>
  );
}

export default BioExpander;
