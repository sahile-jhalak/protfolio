import {FaGithub,FaLinkedinIn,FaTwitter} from 'react-icons/fa6';
import {SiLeetcode} from 'react-icons/si';

export const Socials=[
    {
        id: `linkedin-${Date.now()}`,
        content:'linkedin',
        Icon: FaLinkedinIn,
        uri: "https://www.linkedin.com/in/sahilejhalak95",
        color: "#0072b1",
    },
    {
        id: `github-${Date.now()}`,
        Icon: FaGithub,
        uri: "https://github.com/sahile-jhalak",
        color: "#fff",
        content:'github',
      },
      {
        id:`leetcode-${Date.now()}`,
        content:'leetcode',
        Icon: SiLeetcode,
        uri:"https://leetcode.com/sahil_ansari98/",
        color:"#fff",
        
      },
      {
        id:`twitter-${Date.now()}`,
        content:'twitter',
        Icon:FaTwitter,
        uri:"https://twitter.com/SahileJhalak2",
        color:"#fff",
      }
];