import Header from './Header';
import PageTitle from './PageTitle';
import AssuntosAbordados from './AssuntosAbordados';

function Recap() {
  return (
    <>
      <Header>
        <p>Olá</p>
        <p>Tchau</p>
      </Header>
      <div className="content-container">
        <PageTitle 
          title="Recap da aula do dia 04"
          subtitle="Vimos sobre components e Virtual DOM"
        />
        <AssuntosAbordados
          assuntosAbordados={['Components', 'Virtual DOM']}
        />
      </div>
    </>
  );
}

export default Recap;
