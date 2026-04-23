import supervisorIcon from '../assets/icon-supervisor.svg';
import teamBuilderIcon from '../assets/icon-team-builder.svg';
import karmaIcon from '../assets/icon-karma.svg';
import calculatorIcon from '../assets/icon-calculator.svg';

function FourCardSection() {
  const cards = [
    {
      id: 1,
      icon: supervisorIcon,
      title: 'Supervisor',
      description: 'Monitors activity to identify project roadblocks',
      borderClass: 'border-t-4 border-t-card-cyan',
    },
    {
      id: 2,
      icon: teamBuilderIcon,
      title: 'Team Builder',
      description:
        'Scans our talent network to create the optimal team for your project',
      borderClass: 'border-t-4 border-t-card-red',
    },
    {
      id: 3,
      icon: karmaIcon,
      title: 'Karma',
      description: 'Regularly evaluates our talent to ensure quality',
      borderClass: 'border-t-4 border-t-card-orange',
    },
    {
      id: 4,
      icon: calculatorIcon,
      title: 'Calculator',
      description:
        'Uses data from past projects to provide better delivery estimates',
      borderClass: 'border-t-4 border-t-card-blue',
    },
  ];
  return (
    <main className="flex min-h-screen items-center justify-center">
      <article className="max-w-[90%] flex flex-col gap-16">
        <header className='flex flex-col gap-2 text-center'>
          <p className="font-light">Reliable, efficient delivery</p>
          <h1 className="font-bold text-card-grey-500">Powered by Technology</h1>
          <p className="text-card-grey-400">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </header>
        <section className="flex flex-col gap-4">
          {cards.map((card) => (
            <div key={card.id} className={`bg-card-white shadow-lg p-4 ${card.borderClass}`}>
              <h2 className="text-card-grey-500 font-bold">{card.title}</h2>
              <p className="font-light text-card-grey-400">{card.description}</p>
              <img src={card.icon} alt={card.title} className='w-8 h-8' />
            </div>
          ))}
        </section>
      </article>
    </main>
  );
}

export default FourCardSection;
