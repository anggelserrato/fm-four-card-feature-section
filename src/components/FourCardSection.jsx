import supervisorIcon from '../assets/icon-supervisor.svg';
import teamBuilderIcon from '../assets/icon-team-builder.svg';
import karmaIcon from '../assets/icon-karma.svg';
import calculatorIcon from '../assets/icon-calculator.svg';

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

function FourCardSection() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-[50px]">
      <article className="flex w-full max-w-85 flex-col gap-15">
        <header className="flex flex-col text-center">
          <p className="text-preset-2 text-2xl text-card-grey-500">
            Reliable, efficient delivery
          </p>
          <h1 className="mb-card-200 text-preset-1 text-2xl text-card-grey-500">
            Powered by Technology
          </h1>
          <p className="text-preset-4 text-[15px] text-card-grey-500">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </header>

        <section className="grid grid-cols-1 gap-card-400">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`rounded-lg bg-card-white p-card-400 shadow-[0_15px_30px_-11px_rgba(131,166,210,0.5)] ${card.borderClass}`}
            >
              <h2 className="mb-1.5 text-preset-3 text-[20px] text-card-grey-500">
                {card.title}
              </h2>
              <p className="mb-card-400 text-preset-5 text-[13px] text-card-grey-400">
                {card.description}
              </p>
              <img src={card.icon} alt="" className="ml-auto h-16 w-16" />
            </div>
          ))}
        </section>
      </article>
    </main>
  );
}

export default FourCardSection;
