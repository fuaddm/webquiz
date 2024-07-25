import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className={`${styles.header} relative z-50 w-full rounded-full bg-[#16181d] px-8 py-4`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-base font-medium text-white">Quiz App By</div>
          <Link
            href="https://github.com/fuaddm"
            target="_blank"
            className="h-10 w-10 overflow-hidden rounded-full bg-white outline-offset-2 outline-white hover:outline hover:outline-2">
            <Image
              src="https://avatars.githubusercontent.com/u/113819802?v=4"
              width={40}
              height={40}
              className="h-full w-full object-cover"
              alt="avatar"
            />
          </Link>
        </div>
        <Link
          href="https://github.com/fuaddm"
          target="_blank"
          className="cursor-pointer rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600">
          Check My Profile
        </Link>
      </div>
    </div>
  );
};

export default Header;
