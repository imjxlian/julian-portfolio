type Service = {
  title: string;
  description: string;
  emoji: string;
};

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="bg-gray-200 dark:bg-neutral-800 p-5 rounded-lg h-auto">
      <h3 className="text-xl font-semibold mb-3">
        {service.emoji} {service.title}
      </h3>
      <p className="text-neutral-800 dark:text-slate-300">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;
