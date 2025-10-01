"use client";

import { useState } from "react";

function BioExpander() {
  const bio = "Lorem ipsum dolor sit, amet consecthg gfd nobis unde provident exercitationem fd quidem voluptas ullam possimus corrupti sit perspiciatis";
  let [expandBtn, setExpandBtn] = useState(false);

  if (bio.split("").length > 70) {
    return (
      <div className="text-sm">
        {expandBtn ? (
          <p>
            {bio}&nbsp;
            <button onClick={() => setExpandBtn((prev) => !prev)} className="text-blue-500 hover:underline">
              show less
            </button>
          </p>
        ) : (
          <p>
            {bio.split("").splice(0, 70).join("")}&nbsp;
            <button onClick={() => setExpandBtn((prev) => !prev)} className="text-blue-500 hover:underline">
              show more
            </button>
          </p>
        )}
      </div>
    );
  }

  return <p className="max-w-75">{bio}</p>;
}

export default BioExpander;
