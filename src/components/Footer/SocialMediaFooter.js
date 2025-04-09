import SocialMediaItem from "./SocialMediaItem";

const socialMediaLinks = {
  instagram: "https://instagram.com/tedxntua/?hl=en",
  facebook: "https://facebook.com/tedxntua",
  tiktok: "https://www.tiktok.com/@tedxntua",
  linkedin: "https://linkedin.com/company/tedxntua",
  spotify: "https://open.spotify.com/user/31jmzq7bew5xcd2cypvo4xuua6ay",
  youtube: "https://www.youtube.com/@TEDxNTUA",
};

function SocialMediaFooter() {
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
      {Object.entries(socialMediaLinks).map(([platform, url]) => (
        <SocialMediaItem
          key={platform}
          link={url}
          iconName={platform}
          color="white"
          hoverColor="white"
        />
      ))}
    </div>
  );
}

export default SocialMediaFooter;
