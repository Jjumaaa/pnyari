import ministries from "@/data/ministries";
import MinistryCard from "./MinistryCard";

export default function MinistryTabs() {
  return (
    <div
      className="
      grid
      gap-8
      md:grid-cols-2
      lg:grid-cols-3
      "
    >
      {ministries.map((ministry) => (
        <MinistryCard
          key={ministry.id}
          ministry={ministry}
        />
      ))}
    </div>
  );
}