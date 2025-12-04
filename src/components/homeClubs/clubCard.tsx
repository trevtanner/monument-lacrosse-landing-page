"use client";

interface ClubCardProps {
  details: {
    title: string;
    icon: string;
    location: string;
    ages: string;
    category: string;
    types: string[];
    status: string;
    website: string;
  };
}

export const ClubCard: React.FC<ClubCardProps> = ({ details }) => {
  return (
    <section id="home" className="container mx-auto px-4 py-4 bg-slate-200">
      <div className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-gold-500 transition duration-300">
        <div className="flex justify-between items-start mb-4">
          <div className="w-14 h-14 bg-navy-100 rounded-full flex items-center justify-center text-navy-800 font-bold">
            {details.icon}
          </div>
          <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
            {details.status}
          </span>
        </div>
        <h4 className="font-display font-bold text-xl text-navy-900 mb-1 group-hover:text-gold-600 transition">
          {details.title}
        </h4>
        <p className="text-sm text-slate-500 font-medium my-2">
          {details.category}
        </p>
        <p className="text-sm text-slate-500 font-medium mb-4">
          {details.location} • {details.ages}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
            {details.types[0]}
          </span>
        </div>
        <button className="w-full py-2 border border-slate-300 rounded font-bold text-slate-600 hover:bg-slate-50 text-sm">
          View Profile
        </button>
      </div>
    </section>
  );
};
