'use client';
import {useState} from 'react';

function SocialMediaItem({iconName, link, color, hoverColor}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform duration-300 hover:scale-125 w-[30px] h-[30px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-[30px] h-[30px]">
        <img
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-200 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
          src={`./socialMediaIcons/${color}/${iconName}-${color}.png`}
          alt={`${iconName}`}
        />
        <img
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          src={`./socialMediaIcons/${hoverColor}/${iconName}-${hoverColor}.png`}
          alt={`${iconName}`}
        />
      </div>
    </a>
  );
}

export default SocialMediaItem;
