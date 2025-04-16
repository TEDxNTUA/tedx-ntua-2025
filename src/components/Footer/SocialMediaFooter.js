import SocialList from '@components/SocialMedia/SocialList';

const socialMediaLinks = {
  instagram: 'https://instagram.com/tedxntua/?hl=en',
  facebook: 'https://facebook.com/tedxntua',
  tiktok: 'https://www.tiktok.com/@tedxntua',
  linkedin: 'https://linkedin.com/company/tedxntua',
  spotify: 'https://open.spotify.com/user/31jmzq7bew5xcd2cypvo4xuua6ay',
  youtube: 'https://www.youtube.com/@TEDxNTUA'
};

function SocialMediaFooter() {
  return (
    <section className="flex flex-row gap-3 lg:gap-4">
      <SocialList socialMediaLinks={socialMediaLinks} color={'white'} hoverColor={'yellow'} />
    </section>
  );
}

export default SocialMediaFooter;
