import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis nulla urna, nec semper orci tristique ut. Donec finibus quam augue, vel rhoncus est vulputate at. Nullam mollis ultrices massa in ornare. Suspendisse ac laoreet enim. Cras et nulla lorem. Donec placerat aliquet libero vel pharetra. Nullam odio urna, vulputate sed metus non, faucibus fermentum arcu. Mauris at ligula nulla. Aenean fermentum nisl non sagittis iaculis. Aliquam eu enim varius, bibendum justo lobortis, faucibus orci. Donec accumsan sem sit amet risus fringilla pellentesque. Fusce vehicula odio non nisi ullamcorper consectetur. Fusce quis lorem orci. Integer nisl erat, pulvinar at velit ut, feugiat varius turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus porta rhoncus malesuada.</p>

      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}