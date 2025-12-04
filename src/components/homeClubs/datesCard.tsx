"use client";

interface DatesCardProps {
  details: {
    title: string;
    subtitle: string;
    date: string;
    team: string;
    url: string;
  };
}

function splitDate(dateString: string) {
  return dateString.split(" ");
}

export const DatesCard: React.FC<DatesCardProps> = ({ details }) => {
  const [month, day] = splitDate(details.date);

  return (
    <div className="flex gap-4 p-4 border-b border-slate-100 hover:bg-slate-50 transition">
      <div className="flex flex-col items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded border border-blue-100">
        <span className="text-[10px] font-bold uppercase">{month}</span>
        <span className="text-lg font-black leading-none">{day}</span>
      </div>
      <div>
        <h5 className="font-bold text-navy-900 text-md">{details.title}</h5>
        <p className="text-sm text-slate-500 font-semibold">{details.subtitle}</p>
        <p className="text-xs text-slate-500 font-semibold">{details.team}</p>
      </div>
    </div>
  );
};
