import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
      <footer className="flex flex-col justify-center items-center mt-5">
        <Image
          className="mb-10"
          src={"https://i.ibb.co/dgG9HW4/FLASH.png"}
          width={100}
          height={100}
          alt="logo"
        ></Image>
        <p className="mb-20">
          <small>Terms and condition Refund Policy Privacy Policy</small>
        </p>
        <div className="flex items-center mb-5">
          <Image
            src={"https://i.ibb.co/vzD2WHm/sass.png"}
            width={30}
            height={30}
            alt="sass"
          />
          <p>We Run On Redshop</p>
        </div>
      </footer>
    );
};

export default Footer;