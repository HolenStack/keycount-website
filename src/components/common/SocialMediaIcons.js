import instagramLight from './../../assets/images/logos/instagram/Instagram Logo Pack/02 White Glyph/Instagram_Glyph_White.png';
import facebookLight from './../../assets/images/logos/facebook/Facebook Brand Asset Pack 2019/f-Logos-2019-1/f_Logo_Online_04_2019/white/PNG/f_logo_RGB-White_1024.png';
import youtubeDark from './../../assets/images/logos/youtube/youtube_full_color_icon/social/1024px/dark/youtube_social_icon_dark.png';
import twitterLight from './../../assets/images/logos/twitter/Twitter logo/PNG/2021 Twitter logo - white.png';
import telegram from './../../assets/images/logos/telegram/Logo.png';
import linkedin from './../../assets/images/logos/linkedin/LI-In-Bug.png';
import instagramDark from './../../assets/images/logos/instagram/Instagram Logo Pack/03 Black Glyph/Instagram_Glyph_Black.png';
import facebookDark from './../../assets/images/logos/facebook/Facebook Brand Asset Pack 2019/f-Logos-2019-1/f_Logo_Online_04_2019/black/PNG/f_logo_RGB-Black_1024.png';
import twitterDark from './../../assets/images/logos/twitter/Twitter logo/PNG/2021 Twitter logo - black.png';

export const SocialMediaIcons = {
    light: {
        instagram: {
            iconUrl: instagramLight,
            cssClass: '',
        },
        facebook: {
            iconUrl: facebookLight,
            cssClass: '',
        },
        youtube: {
            iconUrl: youtubeDark,
            cssClass: '',
        },
        twitter: {
            iconUrl: twitterLight,
            cssClass: '',
        },
        telegram: {
            iconUrl: telegram,
            cssClass: 'telegram-light',
        },
        linkedin: {
            iconUrl: linkedin,
            cssClass: 'linkedin-light',
        },
    },
    dark: {
        instagram: {
            iconUrl: instagramDark,
            cssClass: '',
        },
        facebook: {
            iconUrl: facebookDark,
            cssClass: '',
        },
        youtube: {
            iconUrl: youtubeDark,
            cssClass: '',
        },
        twitter: {
            iconUrl: twitterDark,
            cssClass: '',
        },
        telegram: {
            iconUrl: telegram,
            cssClass: 'telegram-dark',
        },
        linkedin: {
            iconUrl: linkedin,
            cssClass: 'linkedin-dark',
        }
    }
}