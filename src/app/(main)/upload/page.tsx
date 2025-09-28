import { Suspense } from "react";

// Main page
export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Turant page show ho jayega, content lazy load hoga */}
      <Suspense fallback={<p>Loading data...</p>}>
        <DashboardContent />
      </Suspense>
    </div>
  );
}

// Fake API delay
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 sec delay
  return "YHELLO";
}

// Async Server Component
async function DashboardContent() {
  const data = await getData();
  return <div>{data}</div>;
}
