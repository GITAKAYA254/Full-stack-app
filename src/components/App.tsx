import Header from "./Header";
import ContentList from "./contest-list";

const App = ({ initialData }) => {
  console.log(initialData);

  return (
    <div className="container">
      <Header message="Naming Contests" />

      <ContentList initialContests={initialData.contests} />
    </div>
  );
};
export default App;
