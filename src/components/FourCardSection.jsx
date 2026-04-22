import supervisorIcon from '../assets/icon-supervisor.svg'
import teamBuilderIcon from '../assets/icon-team-builder.svg'
import karmaIcon from '../assets/icon-karma.svg'
import calculatorIcon from '../assets/icon-calculator.svg'

function FourCardSection() {
  const cards = [
    {
      id: 1, icon: supervisorIcon, title: 'Supervisor', description: 'Monitors activity to identify project roadblocks'
    },
    {
      id: 2, icon: teamBuilderIcon, title: 'Team Builder', description: 'Scans our talent network to create the optimal team for your project'
    },
    {
      id: 3, icon: karmaIcon, title: 'Karma', description: 'Regularly evaluates our talent to ensure quality'
    },
    {
      id: 4, icon: calculatorIcon, title: 'Calculator', description: 'Uses data from past projects to provide better delivery estimates'
    }
  ]
  return (
    <main>
      <article>
        <header>
          <h1>Reliable, efficient delivery</h1>
          <p>Powered by Technology</p>
          <p>
            Our Artificial Intelligence powered tools use millions of project data
            points to ensure that your project is successful
          </p>
        </header>
        <section>
          {cards.map((card) => (
            <div key={card.id}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <img src={card.icon} alt={card.title} />
            </div>
          ))}
        </section>
      </article>
    </main>
  );
}

export default FourCardSection;
