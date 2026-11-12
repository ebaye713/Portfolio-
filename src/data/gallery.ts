import { GalleryPhoto } from '../types';
import facePortraitImg from '../assets/images/ebaye_face_portrait_1794352146331.jpg';
import soloOutdoorImg from '../assets/images/ebaye_solo_outdoor_1794352126353.jpg';

/**
 * ============================================================================
 * 📸 EBAYE PRAISEGOD ESE — DYNAMIC GALLERY REPOSITORY
 * ============================================================================
 * 
 * 💡 HOW TO ADD MORE PHOTOS TO YOUR GALLERY:
 * 1. Place your new photo in the `/public/assets/` folder (or reference an external URL).
 * 2. Add an item to `galleryPhotos` below:
 *    - `id`: unique ID
 *    - `title`: Photo title
 *    - `category`: 'Robotics & Engineering' | 'Portraits' | 'Campus & Innovation'
 *    - `image`: "/assets/your-photo-name.jpg"
 *    - `date`: Month / Year
 *    - `caption`: Brief description of what is happening
 *    - `context`: Where it was taken or event name
 * ============================================================================
 */

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "team-galaxy-robotics-competition",
    title: "Team Galaxy in the Arena",
    category: "Robotics & Engineering",
    image: "/assets/aistudio/IMG-20261011-WA0009_e6ee9516.jpg",
    date: "Competition Season 2026",
    caption: "Ebaye PraiseGod Ese and teammates fine-tuning the tournament competition robot at the FIRST / Coding Age national robotics arena.",
    context: "International / National Youth Robotics Competition Arena with Team Galaxy & F.G.C. Ikom",
    aspect: "landscape"
  },
  {
    id: "ebaye-portrait-executive",
    title: "Ebaye PraiseGod Ese",
    category: "Portraits",
    image: facePortraitImg,
    date: "2026",
    caption: "Portrait of Ebaye PraiseGod Ese — Developer, Innovator, Creative Thinker, and Digital Entrepreneur.",
    context: "Official Studio Portrait",
    aspect: "portrait"
  },
  {
    id: "campus-innovation-walk",
    title: "Campus & Tech Collaborations",
    category: "Campus & Innovation",
    image: soloOutdoorImg,
    date: "2026",
    caption: "Ebaye PraiseGod Ese on campus exploring tech opportunities, software development, and engineering initiatives.",
    context: "Innovation & Fellowship Gathering",
    aspect: "portrait"
  }

  /* 
   * ⬇️ ADD MORE OF YOUR PICTURES BELOW THIS LINE ⬇️
   * ,{
   *   id: "my-new-photo",
   *   title: "Robotics Workshop",
   *   category: "Robotics & Engineering",
   *   image: "/assets/your_new_image.jpg",
   *   date: "2026",
   *   caption: "Working on new prototypes...",
   *   context: "Tech Lab",
   *   aspect: "landscape"
   * }
   */
];
