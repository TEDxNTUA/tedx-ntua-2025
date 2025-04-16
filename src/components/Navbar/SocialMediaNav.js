import SocialList from '@components/SocialMedia/SocialList';

const socialMediaLinks = {
  facebook: 'https://facebook.com/tedxntua',
  instagram: 'https://instagram.com/tedxntua/?hl=en',
  linkedIn: 'https://linkedin.com/company/tedxntua',
  spotify:
    'https://open.spotify.com/user/31jmzq7bew5xcd2cypvo4xuua6ay?si=Qt_NzTPGRFyETbZ4XgKoxw&utm_source=copy-link&nd=1&dlsi=ca94005974b04c42',
  tiktok: 'https://www.tiktok.com/@tedxntua',
  youtube: 'https://www.youtube.com/@TEDxNTUA'
};

function SocialMediaNav() {
  return (
    <div className="grid grid-cols-3 gap-3 justify-items-center w-[80%] mx-auto">
      <SocialList socialMediaLinks={socialMediaLinks} color={'white'} hoverColor={'yellow'} />
    </div>
  );
}

export default SocialMediaNav;
