import React from 'react';
import { Achievement } from '../../data/writers';
import { WallTooltip } from './WallTooltip';
import { Award, Medal, Star } from 'lucide-react';

interface AchievementBadgeProps {
  achievement: Achievement;
}

const getAchievementIcon = (label: string) => {
  const lowerLabel = label.toLowerCase();
  if (lowerLabel.includes('nobel')) {
    return <Star className="w-3 h-3" />;
  }
  if (lowerLabel.includes('cervantes')) {
    return <Medal className="w-3 h-3" />;
  }
  return <Award className="w-3 h-3" />;
};

const getAchievementColor = (label: string) => {
  const lowerLabel = label.toLowerCase();
  if (lowerLabel.includes('nobel')) {
    return 'bg-yellow-500 text-yellow-950';
  }
  if (lowerLabel.includes('cervantes')) {
    return 'bg-purple-500 text-white';
  }
  if (lowerLabel.includes('nacional')) {
    return 'bg-green-600 text-white';
  }
  return 'bg-blue-500 text-white';
};

export const AchievementBadge: React.FC<AchievementBadgeProps> = ({ achievement }) => {
  const tooltipContent = (
    <div>
      <div className="font-semibold text-sm">{achievement.label}</div>
      {achievement.year && (
        <div className="text-xs text-gray-400">{achievement.year}</div>
      )}
      {achievement.examFact && (
        <div className="text-sm mt-1 text-gray-200">{achievement.examFact}</div>
      )}
    </div>
  );

  const colorClass = getAchievementColor(achievement.label);
  const icon = getAchievementIcon(achievement.label);

  return (
    <WallTooltip content={tooltipContent}>
      <div
        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] md:text-xs font-medium shadow-sm cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md ${colorClass}`}
      >
        {icon}
        <span className="truncate max-w-[80px] md:max-w-[100px]">
          {achievement.label}
          {achievement.year && ` ${achievement.year}`}
        </span>
      </div>
    </WallTooltip>
  );
};

export default AchievementBadge;
