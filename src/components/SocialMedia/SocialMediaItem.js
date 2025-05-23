'use client';
import {useState} from 'react';

function SocialMediaItem({iconName, link, color, hoverColor}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="max-h-[50%] sm:max-h-[30%] md:max-h-[60%] inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <img
          className={`${isHovered ? 'hidden' : 'block'}`}
          src={`/socialMediaIcons/${color}/${iconName}-${color}.png`}
          alt={`${iconName}-icon`}
          width={30}
          height={30}
        />
        <img
          className={`${isHovered ? 'block' : 'hidden'}`}
          src={`/socialMediaIcons/${hoverColor}/${iconName}-${hoverColor}.png`}
          alt={`${iconName}-icon`}
          width={30}
          height={30}
        />
      </div>
    </a>
  );
}

export default SocialMediaItem;
