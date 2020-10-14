# nextLevelWeek3_front
Next Level Week #3

# Aqui eu guardo algumas coisinhas:

interface testeProps {
  text: String
}

// Sintaxe  ->  JSX - JavaScript XML //

function Title(props: testeProps) {
  return <h1>{props.text}</h1>
}

function App() {
  return (
    <div className="page-landing">
      <Title text="To testando em kkk"/>
    </div>
  );
}
