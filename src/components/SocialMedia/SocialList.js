import SocialMediaItem from '@components/SocialMedia/SocialMediaItem';

function SocialList({socialMediaLinks, color, hoverColor}) {
  const socialMediaItems = Object.entries(socialMediaLinks || {}).flatMap(([platform, links]) => {
    const normalizedLinks = Array.isArray(links) ? links : [links]; // turn into array if needed

    return normalizedLinks
      .filter(Boolean) // remove null/undefined
      .map((link, index) => (
        <SocialMediaItem
          key={`${platform}-${index}`}
          link={link}
          iconName={platform}
          color={color}
          hoverColor={hoverColor}
        />
      ));
  });

  return <>{socialMediaItems}</>;
}

export default SocialList;
