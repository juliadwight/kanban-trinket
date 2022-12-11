import Kanban from './../components/Kanban'

function Home() {
  return (
    <>
      <Kanban 
        stages={[
          "Backlog", 
          "To-Do", 
          "In Progress", 
          "Done"
        ]}
      />
    </>
  );
}

export default Home;
