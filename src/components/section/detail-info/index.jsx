import React from 'react';
import TitleInfo from '../title-info';
import BreakingNews from '../breaking-news';
import Bridegroom from '../bride-groom';
import LoveStory from '../love-story';
import OurGallery from '../our-gallery';
import WishSection from '../wish';
import Footer from '../footer';
import data from '../../../data/config.json';
import SongButton from '../../ui/song-button';

export default function DetailInfo() {
  return (
    <div className="space-y-5 pb-10">
      <video className="w-full" autoPlay muted>
        <source src={data.url_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="px-4 space-y-4">
        <TitleInfo />
        {data.show_menu.breaking_news && <BreakingNews />}
        {data.show_menu.bride_and_groom && <Bridegroom />}
        {data.show_menu.love_story && <LoveStory />}
        {data.show_menu.gallery && (
          <OurGallery gallery={data.gallery} show_menu={data.show_menu} />
        )}
        <div className="text-center pb-4">
          <div className="mb-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.55062366104974!2d106.9215773242838!3d-6.913309575122753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6849e78f83e5d5%3A0x174b757daacabcd3!2sMasjid%20Al%20Mutaqin!5e0!3m2!1sid!2sid!4v1758269299081!5m2!1sid!2sid"
              style={{
                border: 0,
                width: '100%',
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a
            className="text-center underline"
            href="https://maps.app.goo.gl/QeGYjMNf12dYQZAZ9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lihat Lokasi
          </a>
        </div>
        {data.show_menu.wish && import.meta.env.VITE_APP_TABLE_NAME ? (
          <WishSection />
        ) : null}
      </div>
      <Footer />
      <SongButton />
    </div>
  );
}
