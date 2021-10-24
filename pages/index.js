import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  const { query } = useRouter();

  return (
    <div>
      <style>
        {`a {
          color: blue;
        }`}
      </style>
      Current category is {query.category}
      <br />
      <br />
      <br />
      <div>
        <Link href="/car" passHref shallow>
          <a>
            car category
          </a>
        </Link>
      </div>
      <div>
        <Link href="/tractor" passHref shallow>
          <a>
            tractor category
          </a>
        </Link>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  return { props: {} };
};