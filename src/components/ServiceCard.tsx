import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-3xl">{service.icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
          {service.title}
        </h3>
      </div>
      
      <p className="text-gray-600 mb-4 leading-relaxed">
        {service.description}
      </p>
      
      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
