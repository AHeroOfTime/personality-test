import { Page } from '../components/Page';
import Link from 'next/link';
import Image from 'next/image';
import { Diagram } from '../components/Diagram';

export default function Result() {
  return (
    <Page>
      <div className="box">
        <div className="content text-center">
          <div className="page-title leading-none -mt-28">
            <div className="font-handwriting text-6xl w-full text-left -mb-4 relative -left-10">
              Hello
            </div>
            Three
          </div>
          <div className="max-w-md mx-auto mb-5">
            <Diagram />
          </div>
          <p className="text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            officia hic ducimus iste sequi facilis corrupti dignissimos. Facere
            optio magni eaque eum est ut quaerat, sed, placeat veniam quis esse
            soluta quasi voluptates sunt voluptatibus nemo laborum, vel alias
            saepe perferendis. Mollitia, ullam reiciendis. Illum impedit
            expedita numquam accusamus soluta?
          </p>
        </div>
      </div>
    </Page>
  );
}
