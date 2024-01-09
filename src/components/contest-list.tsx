import ContestPreview from "./contest-preview";
import { useEffect, useState } from "react";
import { fetchContests } from "../api-client";

const ContentList = ({ initialContests }) => {
  const [contests, setContests] = useState(initialContests);
  useEffect(() => {
    fetchContests().then((data) => {
      //STATE
      setContests(data.contests);
    });
  }, []);
  return (
    <div className="contest-list">
      {contests.map((contest) => {
        return <ContestPreview key={contest.id} contest={contest} />;
      })}
    </div>
  );
};
export default ContentList;
