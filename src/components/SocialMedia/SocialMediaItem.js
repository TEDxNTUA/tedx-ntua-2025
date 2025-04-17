'use client';
import {useState} from 'react';

function SocialMediaItem({iconName, link, color, hoverColor}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-[50%] sm:max-w-[30%] md:max-w-[60%] inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <img
          className={`${isHovered ? 'hidden' : 'block'}`}
          srr#rc={`./socialMediaIcons/${color}/${iconName}-${color}.png`}
          alt={`${iconName}-icon`}
          width={30}
          height={30}
        />
        <img
          className={`${isHovered ? 'block' : 'hidden'}`}
          srr#rc={`./socialMediaIcons/${hoverColor}/${iconName}-${hoverColor}.png`}
          alt={`${iconName}-icon`}
          width={30}
          height={30}
        />
      </div>
    </a>
  );
}

export default SocialMediaItem;
