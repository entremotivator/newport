import React from 'react';
import { useTranslation } from "react-i18next";
import { images } from '../../constants';
import './ResourcesTabs.scss';

export const ResourcesTabsData = () => {
  const { t } = useTranslation();
  
  return [
    {
      id: "1",
      label: "Ainsider.tools",
      content: (
        <div>
          <h2 style={{ marginBottom: '30px' }}>Ainsider.tools</h2>
          <img src={images.ainsiderToolsNew} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
          <p>{t('resourcesTabAinsiderTools')}</p>
          <a href="https://ainsider.tools" className="Btn" target="_blank" rel="noopener noreferrer">Ainsider.tools</a>
        </div>
      ),
    },
      {
      id: "2",
      label: "AI Newsletter",
      content: (
        <div>
          <h2 style={{ marginBottom: '30px' }}>Ainsider AI Newsletter</h2>
          <img src={images.beehiv} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
          <p>{t('resourcesTabDescNewsletter')}</p>
          <a href="https://ainsider.beehiiv.com/" className="Btn" target="_blank" rel="noopener noreferrer">AI Newsletter</a>
        </div>
      ),
    },
    {
      id: "3",
      label: "AI Tutorials & Guides",
      content: (
        <div>
          <h2 style={{ marginBottom: '30px' }}>{t('resourcesTabDesc7Title')}</h2>
          <img src={images.cloudainsider} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
          <p>{t('resourcesTabDesc7')}</p>
          <a href="https://ainsider.store" className="Btn" target="_blank" rel="noopener noreferrer">Ainsider AI Hub</a>
        </div>
      ),
    },
    {
      id: "4",
      label: "Ainsider AI & Web Agency",
      content: (
        <div>
          <h2 style={{ marginBottom: '30px' }}>{t('resourcesTabDescStudio')}</h2>
          <img src={images.insdr} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
          <p>{t('resourcesTabDescStudio')}</p>
          <a href="https://ainsider.co" className="Btn" target="_blank" rel="noopener noreferrer">Ainsider AI Agency</a>
        </div>
      ),
    },
    {
      id: "5",
      label: "Ainsider.pl",
      content: (
        <div>
          <h2 style={{ marginBottom: '30px' }}>Ainsider.pl</h2>
          <img src={images.ainsiderpl} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
          <p>{t('resourcesTabDesc4')}</p>
          <a href="https://ainsider.pl" className="Btn" target="_blank" rel="noopener noreferrer">Ainsider.pl</a>
        </div>
      ),
    },
    {
      id: "6",
      label: "Github",
      content: (
        <div>
          <h2 style={{ marginBottom: '30px' }}>Ainsider Github</h2>
          <img src={images.git} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
          <p>{t('githubcta_desc1')}</p>
          <a href="https://github.com/piotrmacai" className="Btn" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      ),
    },
  
    // {
    //   id: "2",
    //   label: "Insdr.cloud",
    //   content: (
    //     <div>
    //       <h2 style={{ marginBottom: '30px' }}>Insdr.cloud - Web & AI & Automation Agency</h2>
    //       <p>{t('resourcesTabDesc2')}</p>
    //       <img src={images.insdr} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
    //       <a href="https://insdr.cloud" className="Btn">Insdr.cloud</a>
    //     </div>
    //   ),
    // },
    // {
    //   id: "3",
    //   label: "Macai.studio",
    //   content: (
    //     <div>
    //       <h2 style={{ marginBottom: '30px' }}>Macai.studio - Visuals created by AI mixed with human touch</h2>
    //       <img src={images.macai} className="app_header-img" alt="profile_bg" style={{ maxWidth: '600px', marginBottom:'20px' }} />
    //       <p>{t('resourcesTabDesc3')}</p>
    //       <a href="https://macai.studio" className="Btn">Macai.studio</a>
    //     </div>
    //   ),
    // },
    
  ];
};
