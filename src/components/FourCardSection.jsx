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
    gridClass:
      'xl:col-start-1 xl:row-span-2 xl:row-start-2 md:col-start-1 md:row-start-2 md:col-span-2 xl:col-span-1',
  },
  {
    id: 2,
    icon: teamBuilderIcon,
    title: 'Team Builder',
    description:
      'Scans our talent network to create the optimal team for your project',
    borderClass: 'border-t-4 border-t-card-red',
    gridClass:
      'xl:col-start-2 xl:row-span-2 xl:row-start-1 md:col-start-2 md:row-start-1 md:col-span-2 xl:col-span-1',
  },
  {
    id: 3,
    icon: karmaIcon,
    title: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    borderClass: 'border-t-4 border-t-card-orange',
    gridClass:
      'xl:col-start-2 xl:row-span-2 xl:row-start-3 md:col-start-3 md:row-start-2 md:col-span-2 xl:col-span-1',
  },
  {
    id: 4,
    icon: calculatorIcon,
    title: 'Calculator',
    description:
      'Uses data from past projects to provide better delivery estimates',
    borderClass: 'border-t-4 border-t-card-blue',
    gridClass:
      'xl:col-start-3 xl:row-span-2 xl:row-start-2 md:col-start-2 md:row-start-3 md:col-span-2 xl:col-span-1',
  },
];

function FourCardSection() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-[50px] md:px-0 md:py-card-1600">
      <section className="flex w-full max-w-85 flex-col items-center gap-15 md:max-w-[660px] md:gap-[74px] xl:max-w-[1114px]">
        <header className="flex flex-col text-center md:w-[540px]">
          <p className="text-preset-2 text-card-grey-500">
            Reliable, efficient delivery
          </p>
          <h1 className="mb-card-200 text-preset-1 text-card-grey-500">
            Powered by Technology
          </h1>
          <p className="text-preset-4 text-card-grey-500">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </header>

        <section className="grid w-full grid-cols-1 gap-card-400 md:grid-cols-4 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-4">
          {cards.map((card) => (
            <article
              key={card.id}
              className={`h-[250px] rounded-lg bg-card-white p-card-400 shadow-[0_15px_30px_-11px_rgba(131,166,210,0.5)] ${card.borderClass} ${card.gridClass}`}
            >
              <h2 className="mb-1.5 text-preset-3 text-card-grey-500">
                {card.title}
              </h2>
              <p className="mb-card-400 text-preset-5 text-card-grey-400">
                {card.description}
              </p>
              <img
                src={card.icon}
                alt=""
                className="ml-auto h-16 w-16"
                aria-hidden="true"
              />
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}

export default FourCardSection;
