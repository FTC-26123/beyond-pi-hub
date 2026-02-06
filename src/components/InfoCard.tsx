import { ReactNode } from "react";
interface InfoCardProps {
  imagePlaceholder?: ReactNode;
  title: string;
  bulletPoints?: string[];
  description?: string;
}
const InfoCard = ({
  imagePlaceholder,
  title,
  bulletPoints,
  description
}: InfoCardProps) => {
  return <div className="flex flex-col gap-4 h-full">
      {/* Photo Box - Fixed aspect ratio */}
      <div className="bg-card rounded-2xl p-4 flex items-center justify-center">
        <div className="aspect-square w-full rounded-xl overflow-hidden">
          {imagePlaceholder || <div className="w-full h-full bg-secondary flex flex-col items-center justify-center text-muted-foreground">
              <div className="w-24 h-24 bg-muted rounded-full mb-4" />
              <p>Photo</p>
            </div>}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-foreground text-center">{title}</h3>
      
      {/* Orange Box with Bullet Points or Description */}
      <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
        {bulletPoints && bulletPoints.length > 0 ? <ul className="space-y-2">
            {bulletPoints.map((point, index) => <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5">•</span>
                <span className="">{point}</span>
              </li>)}
          </ul> : description ? <p>{description}</p> : <p className="text-primary-foreground/70">Add content here...</p>}
      </div>
    </div>;
};
export default InfoCard;