"use client";

import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

// Main page
export default function Page() {
  return (
    <div>
      <input type="file" id="post-upload" hidden />
      <div className="max-w-7xl mx-auto w-full p-5 bg-accent block">
        <h1>Drag Post Here</h1>
        <CirclePlus />
        <Button>
          <label htmlFor="post-upload">Click To Upload</label>
        </Button>
      </div>
    </div>
  );
}
